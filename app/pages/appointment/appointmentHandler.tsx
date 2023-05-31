"use client"

import { LogoutButton } from '@/app/auth';
import React, { Key } from 'react'
import AppointmentModal from './appointmentModal';
import { ViewAppointment } from './appointmentView';
import { Scheduler } from '@aldabil/react-scheduler';
import CustomScheduler from '../adminAppointments/custonScheduler';




interface AppointmentHandlerProps{
    user_Id: string;
    email: string;
    userPosts: [];
    events:any;
}



export const AppointmentHandler: React.FC<AppointmentHandlerProps> =  ({user_Id,email,userPosts,events}) => {

  return (
    <>
    <div className="grid w-full items-center justify-center">
      <AppointmentModal id={user_Id} email={email} />
      
      {userPosts.reverse().map((post: { id: Key; issue: string; description: string; prefferedDate:string; ActualDate:string; location:string; contact:string; status:string;}) => (
        <>
      <div key={post.id}>
        <ViewAppointment id={user_Id} issue={post.issue} description={post.description} prefferedDate={post.prefferedDate} ActualDate={post.ActualDate} location={post.location} contact={post.contact} status={post.status} />
        
      </div></>
      
      ))}
    
    
  </div>
      </>
  )
}
