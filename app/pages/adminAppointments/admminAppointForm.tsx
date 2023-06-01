'use client'


import { ServiceProvider } from '@/app/ServiceProvider/ServiceProvider';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { getAppoinmentData } from './getAppointmentData';


interface AdminAppointmentFormProps {
  id: string;
  email: string;
  appointmentDescriptions:string;
  appointmentIssue:string;
}


const currentDate = new Date();
export const AdminAppointmentForm: React.FC<AdminAppointmentFormProps> =  ({ id, email,appointmentDescriptions,appointmentIssue }) => {
  function formatDate(date: string,time:string): string {
  
    const formattedDateString = date+"T"+ time +":00.000Z";
  
    return formattedDateString;
  }

    const [issue, setIssue] = useState('');
    const [description, setDescription] = useState('');
    const [prefferedDate, setPrefferedDate] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');
    const [prefferedTime, setPrefferedTime] = useState('');
    const formattedDate = formatDate(prefferedDate,prefferedTime);
    const [error, setError] = useState<string | null>(null);
    const userId = Number.isNaN(id) ? 0 : Number(id);

    let services = new ServiceProvider()
    const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        // services.appointmentManager.updateAppointment({id:'59'},{userId:7},{issue:'issue10'},{description:'asdasdas'},{prefferedDate:"2023-05-25T10:00:00.000Z"},{location:"cpu"},{contact:"098112"})
  services.appointmentManager.createAppointment({userId:userId},{issue:issue},{description:description},{prefferedDate:formattedDate},{location:location},{contact:contact})
  
        // Reset form values
        setIssue('')
        setDescription('')
        setContact('')
        setPrefferedDate('')
        setPrefferedTime('')
        setError(null);
        console.log('submitted')
      } catch (error: any) {
        setError(error?.message);
      }
    };

  
  // let service = new ServiceProvider()
  // service.appointmentManager.createAppointment({userId:7},{issue:'issue'},{description:'asdasdas'},{prefferedDate:"2023-05-25T10:00:00.000Z"},{location:"cpu"},{contact:"098112"})
    
  const [appointmentData, setAppointmentData] = useState<any>(null);

  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        const data = await getAppoinmentData({ userId: email }, { id: '59' });
        setAppointmentData(data);
      } catch (error: any) {
        setError(error?.message);
      }
    };

    fetchAppointmentData();
  },);

//   console.log(appointmentData?.issue);
  return (
      <>

      <form onSubmit={onSubmit} action="#" className="space-y-8">
      
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center font-bold">Contact Us</div>
  <div className="mt-3 text-center text-4xl font-bold">Make an Appointment </div>
  {appointmentData?.issue}
  {appointmentDescriptions}
  {appointmentIssue}
  <div className="p-8">
    <div className="flex gap-4">

      <input value={issue} onChange={(e) => {
      const inputValue = (e.target as HTMLInputElement).value;
      setIssue(inputValue);
    }} type="Name"  name="name" className="mt-1 block w-1/2 rounded-md border
       border-slate-300 bg-white px-3 py-4
       placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500
        focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 
        sm:text-sm" placeholder="Issue" />

<input
  required
  onChange={(e) => {
    const inputValue = (e.target as HTMLInputElement).value;
    const numericValue = inputValue.replace(/[^0-9]/g,'');

    if (numericValue !== '') {
      setContact(numericValue);
    } else {
      setContact('');
    }
  }}
  value={contact}
  type="text"
  pattern="[0-9]*"
  id="title"
  className="mt-1 block w-1/2 rounded-md border
  border-slate-300 bg-white px-3 py-4
  placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500
  focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 
  sm:text-sm"
  placeholder="Contact"/>


      <input value={location} onChange={(e) => {
      const inputValue = (e.target as HTMLInputElement).value;
      setLocation(inputValue);
    }} type="location" name="location" className="mt-1 block w-1/2 rounded-md border
       border-slate-300 bg-white px-3 py-4
       placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500
        focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 
        sm:text-sm" placeholder="Location" />
    </div>
    <div className="my-6 flex gap-4">

    <input value={prefferedDate} onChange={(e) => {
      const inputValue = (e.target as HTMLInputElement).value;
      setPrefferedDate(inputValue);
    }} type="date" name="email" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4
       placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500
        focus:border-sky-500 focus:outline-none
         focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Select Date" />

    <input value={prefferedTime} onChange={(e) => {
      const inputValue = (e.target as HTMLInputElement).value;
      setPrefferedTime(inputValue);
    }} type="time" name="name" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4
     placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500
      focus:border-sky-500 focus:outline-none 
      focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Select Time*" />
     
    </div>
    <div className="">
      <textarea value={description} onChange={(e) => {
      const inputValue = (e.target as HTMLTextAreaElement).value;
      setDescription(inputValue);
    }} name="textarea" id="text" cols={30} rows={10} className="mb-10 h-40 w-full resize-none 
      rounded-md border
       border-slate-300 p-5 font-semibold
        text-gray-500">
            Description
            </textarea>  
    </div>
    <button type="submit" className="py-3 px-5 text-sm font-medium text-center
           text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none 
           focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 
           dark:focus:ring-primary-800">Set Appointment</button>
  </div>
</div>
      </form>

      </>
    );
  };
  