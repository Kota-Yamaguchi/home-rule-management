
import { generateUUID } from "src/utils/genUuid";
import { Level } from "./Level";
import { RuleState } from "./RuleState";


type ShowContentsType = {
    ruleName : String, 
    discription : String,
    level : Level,
    commentIds : Array<String>,
    status : RuleState
} 

export class ProposedRule{
    private ruleId: String
    private ruleName : String
    private discription : String
    private level : Level
    private commentIds : Array<String>
    private status : RuleState
    private proposedTimestamp : Date
    
    constructor(ruleId: String, ruleName: String,discription : String,
        level : Level,commentIds : Array<String>,proposedTimestamp : Date){
        
        this.ruleName = ruleName
        this.ruleId = generateUUID()
        this.discription = discription
        this.level = level
        this.commentIds = commentIds
        this.status = "PROPOSED"
        this.proposedTimestamp = new Date()
    }

    public static propose(ruleName: String,discription : String,level : Level) : ProposedRule{
        
        const ruleId = generateUUID()
        const commentIds = []
        const status = "PROPOSED"
        const proposedTimestamp :Date = new Date()
        return new ProposedRule(ruleId, ruleName,discription,level, commentIds, proposedTimestamp)

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