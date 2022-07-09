import { Level } from "./Level"
import { RuleState } from "./RuleState"



type ShowContentsType = {
    ruleName : String, 
    discription : String,
    level : Level,
    commentIds : Array<String>,
    status : RuleState
} 

export class DeniedRule {

    private ruleId: String
    private ruleName : String
    private discription : String
    private level : Level
    private commentIds : Array<String>
    private status : RuleState
    private deniedTimestamp : Date

    constructor(ruleId: String, ruleName: String,discription : String,
        level : Level,
        
        commentIds : Array<String>,
        deniedTimestamp : Date
        ){
        
        this.ruleName = ruleName
        this.ruleId =ruleId
        this.discription = discription
        this.level = level
        this.commentIds = commentIds
        this.status = "DENIED"
        this.deniedTimestamp = deniedTimestamp
    }
   
    public 

    public showRuleContents(): ShowContentsType{
        return {
            ruleName : this.ruleName, 
            discription : this.discription,
            level : this.level,
            commentIds : this.commentIds,
            status : this.status,
        } 
    }

    public updateDiscription(updateText: string) : void {
        this.discription = updateText
    }

    public addComments(commentId: string) : void {
        this.commentIds.push(commentId)
    }



}