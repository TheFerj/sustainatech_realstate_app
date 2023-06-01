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
    <div className="py-10 grid w-full items-center justify-center">
      <ConcernModal id={user_Id} email={email} />
      <div className="py-">
        
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3"style={{ width: "200px", height: "30px" }}>
                Title
              </th>
              <th scope="col" className="px-4 py-3"style={{ width: "200px", height: "30px" }}>
                Concern
              </th>
              <th scope="col" className="px-4 py-3"style={{ width: "200px", height: "30px" }}>
                Date
              </th>
              <th scope="col" className="px-4 py-3"style={{ width: "200px", height: "30px" }}>
                Type
              </th>
              <th scope="col" className="px-4 py-3" style={{ width: "200px", height: "30px" }}>
                Urgency
              </th>
              <th scope="col" className="px-4 py-3" style={{ width: "200px", height: "30px" }}>
                Status
              </th>
            </tr>
          </thead>
          </table>
    {userConcerns.reverse().map((post: { id: Key; title: string; content: string; createdAt:string; type:string; urgency:string; status:string;}) => (
      
      <>
      <div key={post.id}>
        <ViewConcern id={user_Id} concern={post.content} title={post.title} createdAt={formatDate(post.createdAt)} type={post.type} urgency={post.urgency} status={post.status} />
      </div>
      </>
      
      ))}
      </div>
    
    
  </div>
      </>
  )
}
