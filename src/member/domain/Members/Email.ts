import { IsEmail } from "class-validator"


export class Email {
    @IsEmail()
    private value : String
    
    constructor(email: String){
        this.value = email
    }


}