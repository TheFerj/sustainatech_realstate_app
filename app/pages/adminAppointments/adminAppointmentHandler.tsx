"use client"

import { LogoutButton } from '@/app/auth';
import React, { Key } from 'react'


import { Scheduler } from '@aldabil/react-scheduler';
import CustomScheduler from '../appointment/custonScheduler';





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
      NEW
      <CustomScheduler events={events}/>
      NEW
    
    
  </div>
      </>
  )
}
