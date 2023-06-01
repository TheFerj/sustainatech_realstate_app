
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Key } from "react";
import { AdminAppointmentHandler } from "./adminAppointmentHandler";
import { formatDate } from "./dateToString";
// other import statements...

export default async function AdminAppointment() {
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


 




  async function getUserEnergy() {
    const res = await fetch('http://localhost:3000/api/user/' + user_Id + '/appointment', {
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

  
  const events: { event_id: Key; title: string; start: Date; end: Date; description:string; editable:boolean; deletable: boolean;
    draggable: boolean; }[] = [];
  const userAppointment = await getUserEnergy();
  userAppointment.forEach((post: { id: Key; issue: string; description: string; prefferedDate:string; ActualDate:string; location:string; contact:string; status:string; editable: boolean;deletable: boolean;
    draggable: boolean;}) => {
    
    const formattedDate = formatDate(post.prefferedDate)


    events.push({
      event_id: post.id,
      title: post.issue,
      start: new Date(formattedDate),
      end: new Date(formattedDate),
      description:post.description,
      editable: false,
      deletable:false,
      draggable:false

    });


  });
  console.log(events)
  return (
    <>
    <div>
        </div>
        <AdminAppointmentHandler user_Id={user_Id} email={email} userPosts={userAppointment} events={events}/>
       
        
    </>
  
  );
}
