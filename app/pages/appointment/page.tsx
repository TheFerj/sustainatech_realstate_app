
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { AppointmentHandler } from "./appointmentHandler";
import { ServiceProvider } from "@/app/ServiceProvider/ServiceProvider";
import { Scheduler } from "@aldabil/react-scheduler";
import { Key } from "react";
import { formatDate } from "../adminAppointments/dateToString";
// other import statements...

export default async function engergyTracking() {
//   // Fetch user using Prisma based on session ID
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email; // Replace with your session ID retrieval log

  async function getUserData() {
    const res = await fetch("http://localhost:3000/api/user/" + userId, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  const users = await getUserData();
  const user_Id = users.id;
  const email = users.email;

  // async function getUserAppointment() {
  //   const res = await fetch('http://localhost:3000/api/user/' + user_Id + '/appointment/userAppointment', {
  //     method: 'GET',
  //     headers: {
  //       'Cache-Control': 'no-cache' // or other cache control directives
  //     }
  //   });
  
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch data');
  //   }
  
  //   return res.json();
  // }   
 
  // const userAppointment = await getUserAppointment();

  let services = new ServiceProvider()
  const userAppointments = await services.appointmentManager.showAppointment({userId:user_Id})
  return (
    <>
    <div>
    Appointment Page
        </div>
        <AppointmentHandler user_Id={user_Id} email={email} userPosts={userAppointments}/>
       
        
    </>
  
  );
}
