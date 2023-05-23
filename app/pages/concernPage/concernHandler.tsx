import { LogoutButton } from '@/app/auth';
import React, { Key } from 'react'
import ConcernModal from './deleteModal';
import { ViewConcern } from './concernView';
import { formatDate } from './formatDateFunction';




interface ConcernHandlerProps{
    user_Id: string;
    email: string;
    userPosts: [];
}



export const ConcernHandler: React.FC<ConcernHandlerProps> =  ({user_Id,email,userPosts}) => {

  return (
    <>
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
      </>
  )
}
