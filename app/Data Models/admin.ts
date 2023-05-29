import { UserModel } from "./user";

export class Admin extends UserModel {
     _name: string; 
     _email: string; 
     _address: string; 
     _password: string;


    constructor(name: string, email: string, address: string, password: string){
        super(name, email, address,password)
        this._name = name;
        this._email = email;
        this._address = address; 
        this._password = password;
    }

    
    
    
    public get name() : string {
        return this._name
    }
    public get email() : string {
        return this._email
    }
    public get address() : string {
        return this._address
    }
    public get password() : string { 
        return this._password
    }
    
}