var crypto = require("crypto");
var uuid = require('node-uuid');
export class Group {
    private groupId: String
    private groupName: String
    private memberIds: Array<String>
    private password: String


    //永続データ復元時に使用する
    constructor(groupId: String, groupName: String, memberIds: Array<String>, password: String) {
        this.groupName = groupName
        this.groupId = groupId
        this.password = password
        this.memberIds = memberIds
    }

    //初回作成時に使用するファクトリメソッド
    public static from(groupName: String): Group {
        const groupId: string = uuid.v4()
        const password: String = this.generatePassword()
        const memberIds: Array<String> = new Array<String>()
        const group: Group = new Group(groupId, groupName, memberIds, password)
        return group
    }
   

    public confirmPasswordAndGroupName(password: string, groupName: string): boolean {

        if (this.groupName !== groupName
            || this.password !== password) {
            throw new Error("パスワードもしくはグループ名が間違っています。")
        }

        return true
    }

    private static generatePassword(): String {
        var N = 16
        return crypto.randomBytes(N).toString('base64').substring(0, N)
    }

    public regeneratePassword(): String {
        const password: String = Group.generatePassword()
        this.password = password
        return Group.generatePassword()
    }

    public join(memberId: String): void {
       this.memberIds.push(memberId)
    }

    public withdraw(memberId: String): void {
        this.memberIds = this.memberIds.filter((id) => { return (memberId !== id) })
    }
    public showMembers(): Array<String>{
        return this.memberIds
    }

}