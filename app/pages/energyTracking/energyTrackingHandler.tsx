import { LogoutButton } from '@/app/auth';
import React, { Key } from 'react'
import EnergyTrackingModal from './energyTrackingModal';
import { EnergyTrackingView } from './energyTrackingView';




interface EnergyTrackingHandlerProps{
    user_Id: string;
    email: string;
    userPosts: [];
}



export const EnergyTrackingHandler: React.FC<EnergyTrackingHandlerProps> =  ({user_Id,email,userPosts}) => {

  return (
    <>
    <div className="grid w-full items-center justify-center">
      <EnergyTrackingModal id={user_Id} email={email} />
      {userPosts.reverse().map((post: { id: Key; electricBill: string; energyUsage: string; billDate:string; type:string; urgency:string;}) => (
        <>
      <div key={post.id}>
        <EnergyTrackingView id={user_Id} electricBill={post.electricBill} energyUsage={post.energyUsage} billDate={post.billDate}  />
      </div></>
      
      ))}
    
    
  </div>
      </>
  )
}
