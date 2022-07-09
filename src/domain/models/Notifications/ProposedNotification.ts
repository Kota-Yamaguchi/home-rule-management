import { IMemberNotification } from "../Members/MemberNotification";




export class ProposedNotification implements IMemberNotification{
    contents: string;
    notify() {
        this.contents = "" 
        throw new Error("Method not implemented.");
    }
    

}