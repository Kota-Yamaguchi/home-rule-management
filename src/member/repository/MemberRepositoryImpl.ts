import { Injectable } from "@nestjs/common";
import { Email } from "../domain/Members/Email";
import { Member } from "../domain/Members/Member";
import { MemberRepository } from "../domain/Members/MemberRepository";


@Injectable()
export class MemberRepositoryImpl implements MemberRepository{
    insertMember(member : Member) :void{
        
    }

    selectMember(id : String ):Member{
        return Member.createMember("11","uuu",new Email("ss@ss.com"))
    } 
    
}