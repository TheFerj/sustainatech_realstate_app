'use client'


import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';


interface PostEnergyTrackingFormProps {
  id: string;
  email: string;
}


const currentDate = new Date();
export const PostEnergyTracking: React.FC<PostEnergyTrackingFormProps> = ({ id, email }) => {
  function formatDate(date: string): string {
  
    const formattedDateString = date+"T10:30:00.000Z";
  
    return formattedDateString;
  }
    const [billDate, setBillDate] = useState('');
    const [electricBill, setElectricBill] = useState('');
    const [energyUsage, setenergyUsage] = useState('');
    const [error, setError] = useState<string | null>(null);
    const formattedDate = formatDate(billDate);

    console.log(formattedDate);
    console.log(electricBill);
    const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const res = await fetch('/api/user/'+{email}+'/energyTracker', {
          method: 'POST',
          body: JSON.stringify({
            billDate:formattedDate,
            electricBill:parseFloat(electricBill),
            energyUsage,
            userId: id
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!res.ok) {
          throw new Error('Failed to post concern');
        }
  
        // Reset form values
        
        setError(null);
      } catch (error: any) {
        setError(error?.message);
      }
    };
  
    return (
      <>
       <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold
       text-center text-gray-900 dark:text-white">Add Energy Bill</h2>
      <p className="mb-8 lg:mb-16 font-light
       text-center text-gray-500 dark:text-gray-400
        sm:text-xl">Form</p>
      <form onSubmit={onSubmit} action="#" className="space-y-8">
      
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"  >Energy Usage</label>
              <input
  required
  onChange={(e) => {
    const inputValue = (e.target as HTMLInputElement).value;
    const numericValue = inputValue.replace(/[^0-9.]/g, '');

    if (numericValue !== '') {
      setElectricBill(numericValue);
    } else {
      setElectricBill('');
    }
  }}
  value={electricBill}
  type="text"
  pattern="[0-9]*[.]?[0-9]*"
  id="title"
  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
  placeholder="Input Energy Bill"
>
</input>
<label htmlFor="energy-rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Billing Period
  </label>
  <input
    required
    onChange={(e) => {
      const inputValue = (e.target as HTMLInputElement).value;
      setBillDate(inputValue);
    }}
    value={billDate}
    type="date"
    id="billDate"
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    placeholder="Select Date"
  />
   <label htmlFor="energy-rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    Energy Rating
  </label>
  <input required onChange={(e) => setenergyUsage((e.target as unknown as HTMLSelectElement).value)}value={energyUsage}type="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
  placeholder="Insert Energy Usage in KwH"></input>


          </div> 
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center
           text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none 
           focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 
           dark:focus:ring-primary-800">Add Energy Bill</button>
      </form>
  </div>

      </>
    );
  };
  
