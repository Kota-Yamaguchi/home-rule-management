
var uuid = require("node-uuid")

export class Member{

    private memberId : String
    private name : String

    constructor(memberId: String, name : String){
        this.memberId = memberId
        this.name = name
    }

    // static createMember(name : String) : Member{
    //     const memberId: string = uuid.v4()
    //     const member :Member = new Member(memberId, name)
    //     return member
    // }

}