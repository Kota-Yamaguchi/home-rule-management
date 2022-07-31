import { Inject, Injectable } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { DuplicateException } from 'src/exception/RuntimeExeception';
import { Email } from '../domain/Members/Email';
import { Member } from '../domain/Members/Member';
import { MemberRepository } from '../domain/Members/MemberRepository';
import { CreateMemberInput } from './create.member.dto';

@Injectable()
export class CreateMemberService {

    constructor(
        @Inject("MemberRepository")
        private readonly memberRepository:MemberRepository
    ){}

    public execute(input :CreateMemberInput ): void{
        const name :String = input.name
        const email : Email = new Email(input.email)
        const id : String = input.id
        if (this.checkDuplicateMember(id)){
            throw new DuplicateException()
        }

        this.memberRepository.insertMember(Member.createMember(id, name , email))
    }
    private checkDuplicateMember(id: String):boolean{

        const member :Member = this.memberRepository.selectMember(id);
        if (member) {
            return true
        }
        return false
        
    }

}
