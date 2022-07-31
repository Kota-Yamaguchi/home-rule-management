import { Field, InputType } from "@nestjs/graphql"


@InputType()
export class CreateMemberInput{
    @Field(()=> String)
    memberId : String
    @Field(()=> String)
    name : String 
    @Field(()=> String)
    email: String
}