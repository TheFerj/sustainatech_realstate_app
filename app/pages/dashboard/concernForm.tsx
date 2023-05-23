'use client'

import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '@/components/ui/input';

interface PostConcernFormProps {
  id: string;
  email: string;
}

export const PostConcern: React.FC<PostConcernFormProps> = ({ id, email }) => {
  const [content, setContent] = useState('');
  const [title, settitle] = useState('');
  const [urgency, seturgency] = useState('');
  const [type, settype] = useState('');
  const [status, setstatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/user/'+{email}+'/post', {
        method: 'POST',
        body: JSON.stringify({
          title,
          urgency,
          type,
          status,
          content: content,
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
      setContent('');
      setError(null);
    } catch (error: any) {
      setError(error?.message);
    }
  };

  async function getUserPost() {
    const res = await fetch('http://localhost:3000/api/user/' + email +'/post'+ id, {
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

  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a Environmental issue? Want to send feedback? Let us know.</p>
      <form onSubmit={onSubmit} action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"  >Title</label>
              <input required onChange={(e) => settitle((e.target as unknown as HTMLSelectElement).value)}value={title}type="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Insert Title">
              </input>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Concern Type</label>
              <select id="business_type" className="bg-gray-50 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => settype((e.target as HTMLSelectElement).value)}>
  <option selected>Choose a type</option>
  <option value="Energy waste,">Energy waste</option>
  <option value="Water waste">Water waste</option>
  <option value="Poor indoor air quality">Poor indoor air quality</option>
  <option value="Hazardous waste disposal">Hazardous waste disposal</option>
  <option value="Pest infestations">Pest infestations</option>
  <option value="Noise pollution">Noise pollution</option>
  <option value="Waste management practices">Waste management practices</option>
</select>
<label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Urgency</label>
              <select id="business_type" 
              className="bg-gray-50 border
               border-green-300
                text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500
                  focus:border-blue-500 block w-full p-2.5
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => seturgency((e.target as HTMLSelectElement).value)}>
  <option selected>Choose a urgency</option>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea value={content} onChange={(e) => setContent((e.target as unknown as HTMLSelectElement).value)}id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border
               border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>

    </>
  );
};
