import { Admin } from "./admin"
import { Tenant } from "./tenant"


export class Ticket {
    _schedule: string
    _issuer: Admin
    _issuedTo: Tenant
    //_ticketDetails: string;

    constructor(schedule: string, issuer: Admin, issuedTo: Tenant) {
        this._schedule = schedule;
        this._issuer = issuer;
        this._issuedTo = issuedTo
    }

    public get schedule(): string {
        return this._schedule
    }

    public get issuer(): Admin {
        return this._issuer
    }

    public get ticketRecipient(): Tenant {
        return this._issuedTo
    }

    // public get ticketDetails(): string {
    //     return this._ticketDetails
    // }

}



