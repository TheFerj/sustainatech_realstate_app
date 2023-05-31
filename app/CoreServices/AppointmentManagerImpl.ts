
import { IAppointmentManager } from "../iCoreServices/AppointmentManager";

export class AppointmentManager implements IAppointmentManager {
  generateAppointmentTicket(): void {
    throw new Error("Method not implemented.");
}


async updateAppointment({id}:{id:string},
  { userId }: { userId: number },
  { issue }: { issue: any },
  { description }: { description: any },
  { prefferedDate }: { prefferedDate: any },
  { location }: { location: any },
  { contact }: { contact: any }
) {
  // Replace with your session ID retrieval logic
  try {
    const res = await fetch(`/api/user/${userId}/appointment/`+id, {
      method: 'PATCH',
      body: JSON.stringify({
        issue,
        description,
        prefferedDate,
        location,
        contact,
        userId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to post concern');
    }

    // Reset form values
    
  } catch (error: any) {

  }
}
  async createAppointment(
    { userId }: { userId: number },
    { issue }: { issue: any }= { issue: null },
    { description }: { description: any }= { description: null },
    { prefferedDate }: { prefferedDate: any }= { prefferedDate: null },
    { location }: { location: any }= { location: null },
    { contact }: { contact: any }= { contact: null }
  ) {
    // Replace with your session ID retrieval logic
    try {
      const res = await fetch(`/api/user/${userId}/appointment`, {
        method: 'POST',
        body: JSON.stringify({
          issue,
          description,
          prefferedDate,
          location,
          contact,
          userId
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to post concern');
      }

      // Reset form values
      
    } catch (error: any) {
  
    }
  }
}
