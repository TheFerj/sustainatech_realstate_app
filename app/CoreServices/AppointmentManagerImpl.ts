import { IAppointmentManager } from "../iCoreServices/AppointmentManager";
import { Service } from "./Service";

export class AppointmentManager extends Service implements IAppointmentManager{
    
// attributes go here  
    
    
    createAppointment() {
        return console.log('success')
    }

    updateAppointment() {
        //TODO
    }

    generateAppointmentTicket() {
        //TODO
    }
}