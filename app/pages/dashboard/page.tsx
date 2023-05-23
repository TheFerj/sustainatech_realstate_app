import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import DeleteModal from "./deleteModal";
import { PostConcern } from "./concernForm";
import { ViewConcern } from "./concernView";
import { title } from "process";
import ConcernModal from "./deleteModal";
import { LogoutButton } from "@/app/auth";


// other import statements...

export default async function Dashboard() {
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
      console.log(userPosts);

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
      <ConcernModal id={user_Id} email={email} />

    {userPosts.reverse().map((post: { id: Key; title: string; content: string; createdAt:string; type:string; urgency:string;}) => (
      <>
      <div key={post.id}>
        <ViewConcern id={user_Id} concern={post.content} title={post.title} createdAt={formatDate(post.createdAt)} type={post.type} urgency={post.urgency} />
      </div></>
    ))}
    
    
  </div>
  
  );
}
