

import React, { Key } from 'react'
import CustomScheduler from './custonScheduler';





interface AdminAppointmentHandlerProps{
    user_Id: string;
    email: string;
    userPosts: [];
    events:any;
}



export const AdminAppointmentHandler: React.FC<AdminAppointmentHandlerProps> =  ({user_Id,email,userPosts,events}) => {

  return (
    <>
    <div className="grid w-full items-center justify-center">
    
      <CustomScheduler events={events}/>
  
    
    
  </div>
      </>
  )
}
