
import { getServerSession } from "next-auth";
import { IAppointmentManager } from "../iCoreServices/AppointmentManager";
import { authOptions } from "../api/auth/[...nextauth]/route";



export class AppointmentManager implements IAppointmentManager{
    
// attributes go here  

    
    async createAppointment({ userId }: { userId: any }) {
    // Replace with your session ID retrieval log
    
    const res = await fetch("http://localhost:3000/api/user/" + userId, {
      method: "GET",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  

    updateAppointment() {
        //TODO
    }

    generateAppointmentTicket() {
        //TODO
    }
}