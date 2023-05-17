import Link from 'next/link'
import { ProfileForm } from './editFrom'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


export default async function EditProfile() {
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
  
  
    const users = await getUSerData();
    const email = users?.email;
    const name = users?.name;
    const business_name = users?.business_name;
    const business_type = users?.business_type;
    const location = users?.location;
    const contact_number = users?.contact_number;

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl">Profile Update</h1>
        <p className="text-center">
          <ProfileForm  Current_name={name} 
          Current_email={email} 
          Current_contact={contact_number} 
          Current_businessName={business_name} 
          Current_businessType={business_type} 
          Current_location={location}  />
        </p>
      </div>
    </div>
  )
}
