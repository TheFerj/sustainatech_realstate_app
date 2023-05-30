"use client"

import { LogoutButton } from '@/app/auth';
import React, { Key } from 'react'
import AppointmentModal from './appointmentModal';
import { ViewAppointment } from './appointmentView';
import { Scheduler } from '@aldabil/react-scheduler';
import CustomScheduler from './custonScheduler';




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
      <Scheduler
  view="month"
  events={[
    {
      event_id: 1,
      title: "Event 1",
      start: new Date("2021/5/2 09:30"),
      end: new Date("2021/5/2 10:30"),
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2021/5/4 10:00"),
      end: new Date("2021/5/4 11:00"),
    },
  ]}
/>
      
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
