import { LogoutButton } from '@/app/auth';
import React, { Key } from 'react'
import EnergyTrackingModal from './energyTrackingModal';
import { EnergyTrackingView } from './energyTrackingView';
import { ServiceProvider } from './serviceProvider';




interface EnergyTrackingHandlerProps{
    user_Id: string;
    email: string;
    userPosts: [];
}



export const EnergyTrackingHandler: React.FC<EnergyTrackingHandlerProps> =  async ({user_Id,email,userPosts}) => {
  const serviceProvider = new ServiceProvider() // Replace with the actual user ID\
  const energyTrackerData = await serviceProvider.getEnergyTracker(user_Id);
  console.log("asdasdasdsa");
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
