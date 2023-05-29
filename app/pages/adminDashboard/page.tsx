import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import { PostConcern } from "../concernPage/concernForm";

import { LogoutButton } from "@/app/auth";



// other import statements...

export default async function AdminDashboard() {
  // Fetch user using Prisma based on session ID
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email; // Replace with your session ID retrieval log

  async function getUserData() {
    const res = await fetch("http://localhost:3000/api/user/" + userId, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  const users = await getUserData();
  const user_Id = users.id;
  const email = users.email;

  async function getUserPosts() {
    const res = await fetch('http://localhost:3000/api/user/' + user_Id + '/post/userPost', {
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
  const userPosts = await getUserPosts(); // Await the asynchronous function to get the array of user posts
      
      const userPostsList = []
      const userPostArray = userPosts.map((post: { id: any; title: any; content: any; }) => ({
        id: post.id,
        title: post.title,
        content: post.content,
      }));

      function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
      
        return `${month} ${day} ${year}`;
      }
  return (
    
    <div className="grid w-full items-center justify-center">
      <LogoutButton/>
      admin dashboard
      <a href="./adminTenantClassification" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tenant Classification List</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">page for tenant classification</p>
</a>

<a href="./adminConcerns" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tenant Classification List</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">page for tenant classification</p>
</a>
      
</div>

  
  );
}
