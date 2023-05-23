import { LogoutButton } from '@/app/auth';
import React, { Key } from 'react'

import { PostAppliance } from './applianceForm';
import ApplianceModal from './applianceModal';
import { ApplianceView } from './applianceView';




interface ApplianceHandlerHandlerProps{
    user_Id: string;
    email: string;
    userPosts: [];
}



export const ApplianceHandler: React.FC<ApplianceHandlerHandlerProps> =  ({user_Id,email,userPosts}) => {

  return (
    <>
    <div className="grid w-full items-center justify-center">

      <div className="columns-2">
       <h1 className='px-5'>Appliances</h1> 
      <ApplianceModal id={user_Id} email={email} />
      </div>
      {userPosts.reverse().map((post: { id: Key; brand: string; energy_rating: string; model:string; type:string;}) => (
        <>
      <div key={post.id}>
        <ApplianceView id={user_Id} type={post.type} brand={post.brand} energy_rating={post.energy_rating} model={post.model} />
      </div></>
      
      ))}
    
    
  </div>
      </>
  )
}
