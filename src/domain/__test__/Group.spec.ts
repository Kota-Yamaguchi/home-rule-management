import { Group} from "src/domain/models/Groups/Group";
var crypto = require("crypto");
var uuid = require('node-uuid');
describe("Group test ", ()=>{
   
    const an : Buffer =Buffer.from('e46bbb550892006aa4dfbc5813f1e0625b9ac4a76dab5c6632d154117a8707f7',"utf8")
    const uuidans = "1234567890qwertyuio"
    it("new instance method 'from' of normal test   ", ()=>{
        const spycrypto = jest.spyOn(crypto, "randomBytes");
        const spyuuid = jest.spyOn(uuid, "v4");
        spycrypto.mockReturnValue(an);
        spyuuid.mockReturnValue(uuidans);
        const g : Group = Group.from("test1")
        const iscomfirm = g.confirmPasswordAndGroupName(crypto.randomBytes(16).toString('base64').substring(0, 16), "test1")
        expect(iscomfirm).toBe(true)
    })

    it("new instance method 'from' of wrong password test   ", ()=>{
        const spycrypto = jest.spyOn(crypto, "randomBytes");
        const spyuuid = jest.spyOn(uuid, "v4");
        spycrypto.mockReturnValue(an);
        spyuuid.mockReturnValue(uuidans);
        const g : Group = Group.from("test1")
        expect(() => g.confirmPasswordAndGroupName("wrong", "test1")).toThrow();
        
    })

    it("instance member add test ", ()=>{
        const g: Group =Group.from("test1")

        const addedMemberId = "1000000" 
        g.join(addedMemberId)
        const memberIds : Array<String> = g.showMembers()
        console.log(memberIds)
        expect(memberIds).toStrictEqual(["1000000"])

    })

    it("instance member add test ", ()=>{
        const g: Group = new Group("10000", "test1", ["1", "2", "3"], "password")

        const removeMemberId = "1" 
        g.withdraw(removeMemberId)
        expect(g.showMembers()).toStrictEqual(["2", "3"])

    })

})
