import { getUserData2 } from "@/app/Data Models/GetUserData";
import { Admin } from "@/app/Data Models/admin";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Profile() {
  // Fetch user using Prisma based on session ID
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email; // Replace with your session ID retrieval log
  async function getUSerData() {
    const res = await fetch('http://localhost:3000/api/user/' + userId, {
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


  
  const users = await getUserData2({userId:userId});
  const admin = new Admin(users.name,users.email,users.location,users.password)
  const email = admin.email;
  const name = admin.name;
  const business_name = users?.business_name;
  const business_type = users?.business_type;
  const location = users?.location;
  const contact_number = users?.contact_number;
  console.log('----------data---------')
  console.log(admin.name)
  console.log(users)
  console.log('----------data---------')
  return (
    <div className="grid w-full items-center justify-center">
      
      <div>

                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">Profile</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Name</div>
                                <div className="px-4 py-2">{name}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Bussines Name</div>
                                <div className="px-4 py-2">{business_name}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email</div>
                                <div className="px-4 py-2">{email}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Bussines Type</div>
                                <div className="px-4 py-2">{business_type}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Contact Number</div>
                                <div className="px-4 py-2">{contact_number}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Address</div>
                                
                                    <div className="px-4 py-2">{location}</div>
                                
                            </div>
                        </div>
                    </div>
                    <Link legacyBehavior href="pages/editProfile">
                    <button
                        className="block w-full text-green-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                          Edit Information</button>
                    </Link>
                    
                </div>
                
      </div>
    </div>
  );
}
