import { Email } from "src/member/domain/Members/Email";
import { Member } from "src/member/domain/Members/Member";
import { MemberRepository } from "src/member/domain/Members/MemberRepository";
import { Authenticator } from "src/domain/shared/auth/Authenticator";



export class MemberCreateUseCase{

    private memberRepository : MemberRepository
    private authenticator : Authenticator

    constructor(memberRepository : MemberRepository, authenticator : Authenticator){
        
    }
    
    public execute(sid : string){
        const [name, email ] : [String, String] = this.authenticator.getUserInfo(sid)
        const member : Member = Member.createMember(sid, name, new Email(email))
        this.memberRepository.insertMember(member)
    }
}