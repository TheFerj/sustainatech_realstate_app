import { LogoutButton } from '@/app/auth';
import React, { Key } from 'react'
import AppointmentModal from './appointmentModal';




interface AppointmentHandlerProps{
    user_Id: string;
    email: string;
    userPosts: [];
}



export const AppointmentHandler: React.FC<AppointmentHandlerProps> =  ({user_Id,email,userPosts}) => {

  return (
    <>
    <div className="grid w-full items-center justify-center">
      <AppointmentModal id={user_Id} email={email} />


      {/* {userPosts.reverse().map((post: { id: Key; electricBill: string; energyUsage: string; billDate:string; type:string; urgency:string;}) => (
        <>
      <div key={post.id}>
        <EnergyTrackingView id={user_Id} electricBill={post.electricBill} energyUsage={post.energyUsage} billDate={post.billDate}  />
      </div></>
      
      ))}
     */}
    
  </div>
      </>
  )
}
