
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { AppointmentHandler } from "./appointmentHandler";
import { ServiceProvider } from "@/app/ServiceProvider/ServiceProvider";
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


  // const service = new ServiceProvider()
  // const appointment = service.setService("appointment");
  // const getService = appointment.service.getService();
  // const appointmentCreate = getService.createAppointment();




// Await the asynchronous function to get the array of user posts
  async function getUserEnergy() {
    const res = await fetch('http://localhost:3000/api/user/' + user_Id + '/appointment/userAppointment', {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache' // or other cache control directives
      }
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }   
  // const serviceProvider = new ServiceProvider() // Replace with the actual user ID\
  // const energyTrackerData = await serviceProvider.getEnergyTracker(user_Id);
  // console.log(1);
  const userAppointment = await getUserEnergy();
  return (
    <>
    <div>
    Appointment Page
        </div>
        <AppointmentHandler user_Id={user_Id} email={email} userPosts={userAppointment} />
        
    </>
  
  );
}
