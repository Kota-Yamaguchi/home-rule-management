import { Member } from "./Member";


export interface MemberRepository{
    insertMember(member : Member) :void
}