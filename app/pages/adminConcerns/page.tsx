
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { LogoutButton } from "@/app/auth";
import { AdminConcernHandler } from "./adminConcernHandler";





// other import statements...

export default async function TeanantClassificationPage() {
  // Fetch user using Prisma based on session ID
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

  async function getUserPosts() {
    const res = await fetch('http://localhost:3000/api/user/' + user_Id + '/appliance/userAppliance', {
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
  const userPosts = await getUserPosts(); // Await the asynchronous function to get the array of user posts
  async function getUserWall() {
    const res = await fetch('http://localhost:3000/api/user/'+ userId + '/post', {
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
  const userConcerns= await getUserWall();
  return (
    <>
    <div className="columns-1 py-20">
        
        <AdminConcernHandler user_Id={user_Id} email={userConcerns.email} userPosts={userConcerns}/>        
    </div>
    </>
  
  );
}
