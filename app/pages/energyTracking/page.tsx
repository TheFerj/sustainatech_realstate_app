
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { EnergyTrackingHandler } from "./energyTrackingHandler";
import { ServiceProvider } from "./serviceProvider";
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

// Await the asynchronous function to get the array of user posts
  async function getUserEnergy() {
    const res = await fetch('http://localhost:3000/api/user/' + user_Id + '/energyTracker/userEnergy', {
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
  const userEnergy = await getUserEnergy();
  return (
    <>
    <div>
        </div>
        <EnergyTrackingHandler user_Id={user_Id} email={email} userPosts={userEnergy} />
    </>
  
  );
}
