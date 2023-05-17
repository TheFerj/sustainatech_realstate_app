import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "@/app/auth";

import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export default async function Dashboard() {
  // Fetch user using Prisma based on session ID
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email; // Replace with your session ID retrieval log
  async function getUSerData() {
    const res = await fetch('http://localhost:3000/api/user/'+userId, {
      method: 'GET',
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }


  const user = await getUSerData();

  const name = user?.name;
  const business_name = user?.business_name;
  const business_type = user?.business_type;
  const location = user?.location;
  const contact_number = user?.contact_number;
  return (
    <div className="grid w-full items-center justify-center">
      <div className="p-4 border border-gray-300 rounded-md text-center">

        <h2>Server Session</h2>
        <div>Name: {name}</div>
        <div>Business Names: {business_name}</div>
        <div>Bussines Type:{business_type}</div>
        <div>Location: {location}</div>
        <div>Contact_number: {contact_number}</div>
        
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
}
