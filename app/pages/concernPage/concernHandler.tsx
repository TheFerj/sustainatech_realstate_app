import { LogoutButton } from '@/app/auth';
import React, { Key } from 'react'
import { ViewConcern } from './concernView';
import { formatDate } from './formatDateFunction';
import ConcernModal from './ConcernModal';




interface ConcernHandlerProps{
    user_Id: string;
    email: string;
    userConcerns: [];
}



export const ConcernHandler: React.FC<ConcernHandlerProps> =  ({user_Id,email,userConcerns}) => {
  if (userConcerns.length === 0) {
   
    return(
      <><ConcernModal id={user_Id} email={email} /><div>No data available</div></>
      );
      
  }

  return (
    <>
    <div className="grid w-full items-center justify-center">
      <ConcernModal id={user_Id} email={email} />
    {userConcerns.reverse().map((post: { id: Key; title: string; content: string; createdAt:string; type:string; urgency:string;}) => (
        <>
      <div key={post.id}>
        <ViewConcern id={user_Id} concern={post.content} title={post.title} createdAt={formatDate(post.createdAt)} type={post.type} urgency={post.urgency} />
      </div></>
      
      ))}
    
    
  </div>
      </>
  )
}
