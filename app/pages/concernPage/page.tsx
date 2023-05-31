import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { LogoutButton } from "@/app/auth";
import { ConcernHandler } from "./concernHandler";
import { ServiceProvider } from "@/app/ServiceProvider/ServiceProvider";

// other import statements...

export default async function ConcernPage() {
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

  async function getUserConcern() {
    const res = await fetch('http://localhost:3000/api/user/' + user_Id + '/post/userPost', {
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

  const userConcerns = await getUserConcern();
  let services = new ServiceProvider()
  const userConcerns2 = await services.concernClassification.showConcernList({userId:user_Id})
  

  return (
    <div className="grid w-full items-center justify-center">
      <ConcernHandler user_Id={user_Id} email={email} userConcerns={userConcerns2} />
    </div>
  );
}
