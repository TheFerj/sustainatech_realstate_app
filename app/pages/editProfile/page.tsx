import Link from 'next/link'
import { ProfileForm } from './editFrom'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getUserData2 } from '@/app/Data Models/GetUserData';
import { Admin } from '@/app/Data Models/admin';


export default async function EditProfile() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.email; // Replace with your session ID retrieval log
    
  
    const users = await getUserData2({userId:userId});
    const admin = new Admin(users.name,users.email,users.location,users.password)
    const email = users?.email;
    const name = users?.name;
    const business_name = users?.business_name;
    const business_type = users?.business_type;
    const location = users?.location;
    const contact_number = users?.contact_number;
    console.log(admin.name)

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
