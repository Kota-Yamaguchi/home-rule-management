import { Level } from "./Level"
import { RuleState } from "./RuleState"



type ShowContentsType = {
    ruleName : String, 
    discription : String,
    level : Level,
    commentIds : Array<String>,
    status : RuleState
} 

export class ApprovedRule {

    private ruleId: String
    private ruleName : String
    private discription : String
    private level : Level
    private commentIds : Array<String>
    private status : RuleState
    private approvedTimestamp : Date

    constructor(ruleId: String, ruleName: String,discription : String,
        level : Level,
        commentIds : Array<String>,
        approvedTimestamp : Date
        ){
        
        this.ruleName = ruleName
        this.ruleId =ruleId
        this.discription = discription
        this.level = level
        this.commentIds = commentIds
        this.approvedTimestamp = approvedTimestamp
    }
   
    public findIllegal(){
        
    }

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