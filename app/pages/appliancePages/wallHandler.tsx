import { LogoutButton } from '@/app/auth';
import React, { Key } from 'react'

import { PostAppliance } from './applianceForm';
import ApplianceModal from './applianceModal';
import { ApplianceView } from './applianceView';
import WallModal from './wallModal';
import { WallView } from './wallView';




interface WallHandlerProps{
    user_Id: string;
    email: string;
    userPosts: [];
}



export const WallHandler: React.FC<WallHandlerProps> =  ({user_Id,email,userPosts}) => {

  return (
    <>
    <div className="grid w-full items-center justify-center">

      <div className="columns-2">
       <h1 className='px-5'>Wall</h1> 
      <WallModal id={user_Id} email={email} />
      </div>
      {userPosts.reverse().map((post: { id: Key;  type:string; details:string;}) => (
        <>
      <div key={post.id}>
        <WallView id={user_Id} type={post.type} details={post.details} />
      </div></>
      
      ))}
    
    
  </div>
      </>
  )
}
