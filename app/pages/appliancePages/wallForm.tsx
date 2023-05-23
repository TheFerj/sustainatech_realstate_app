'use client'

import { useState } from 'react';


interface PostWallFormProps {
  id: string;
  email: string;
}

export const PostWall: React.FC<PostWallFormProps> = ({ id, email }) => {

  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');

  const [details, setdetails] = useState('');
  const [energy_rating, setEnergy_rating] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/user/'+{email}+'/walls', {
        method: 'POST',
        body: JSON.stringify({
          type,
          details,
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

  async function getUserPost() {
    const res = await fetch('http://localhost:3000/api/user/' + email +'/walls'+ id, {
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
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Add Wall Details</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Fill up Form</p>
      <form onSubmit={onSubmit} action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"  >Type</label>
              <input required onChange={(e) => setType((e.target as unknown as HTMLSelectElement).value)}value={type}type="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Insert Type">
              </input>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"  >Details</label>
              <input required onChange={(e) => setdetails((e.target as unknown as HTMLSelectElement).value)}value={details}type="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Insert Details">
              </input>
          </div>
          
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Add Wall
            </button>
      </form>
  </div>

    </>
  );
};
