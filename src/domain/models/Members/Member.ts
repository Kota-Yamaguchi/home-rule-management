
import { Email } from "./Email"

export class Member{

    private memberId : String
    private name : String
    private email : Email

    constructor(memberId: String, name : String, email : Email){
        this.memberId = memberId
        this.name = name
        this.setEmail(email)
    }

    public setEmail(email : Email) :void {
        this.email = email
    }

    static createMember(sid : String, name: String, email : Email) : Member{
        return new Member(sid, name, email)
    }

}