'use client'

import { useState } from 'react';
import { Button } from '../../../components/ui/button';

interface ViewConcernFormProps {
  id: string;
  concern:string;
  title:string;
  type:string;
  urgency:string;
  createdAt:string;
}

export const ViewConcern: React.FC<ViewConcernFormProps> =  ({ id,concern,title,createdAt,type,urgency }) => {
    async function getUserPosts() {
        const res = await fetch('http://localhost:3000/api/user/' + id + '/post/userPost', {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache' // or other cache control directives
          }
        });
      
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
      
        return res.json();
      }
      
  
  return (
    <>
        
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Concern
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Urgency
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {title}
                </th>
                <td className="px-6 py-4">
                    {concern}
                </td>
                <td className="px-6 py-4">
                    {createdAt}
                </td>
                <td className="px-6 py-4">
                    {type}
                </td>
                <td className="px-6 py-4">
                    {urgency}
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </>
  );
};
