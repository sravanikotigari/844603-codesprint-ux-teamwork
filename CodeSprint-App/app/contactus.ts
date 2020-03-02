export class ContactDetails{
    id : number;
    
    name : string;
    email : string;
    message : string;
    trainer : string;
    constructor(name,email,message,trainer){
        this.name=name;
        this.email=email;
        this.message=message;
        this.trainer=trainer;    
    }
}