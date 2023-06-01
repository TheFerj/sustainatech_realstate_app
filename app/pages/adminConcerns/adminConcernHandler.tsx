
"use client"
import { LogoutButton } from '@/app/auth';
import React, { Key, useState } from 'react';
import { formatDate } from '../concernPage/formatDateFunction';
import { AdminConcernView } from './adminConcernView';

interface ConcernHandlerProps {
  user_Id: string;
  email: string;
  userPosts: [];
}

export const AdminConcernHandler: React.FC<ConcernHandlerProps> = ({
  user_Id,
  email,
  userPosts
}) => {
  const [sortOption, setSortOption] = useState('default');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const sortPosts = (posts: any[]) => {
    if (sortOption === 'high') {
      return posts.sort((a, b) => a.urgency.localeCompare(b.urgency));
    } else if (sortOption === 'medium') {
      return posts.sort((a, b) => a.urgency.localeCompare(b.urgency));
    } else if (sortOption === 'low') {
      return posts.sort((a, b) => a.urgency.localeCompare(b.urgency));
    } else {
      return posts;
    }
  };

  const sortedPosts = sortPosts(userPosts);

  return (
    <>
      <div className="grid w-full items-center justify-center">
      <h3 className="justify-center"> Tenant Concerns</h3>
        <div>
          <label htmlFor="sortOption">Sort by:</label>
          <select id="sortOption" value={sortOption} onChange={handleSortChange}>
            <option value="high">Default</option>
            <option value="default">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"style={{ width: "200px", height: "30px" }}>
                Title
              </th>
              <th scope="col" className="px-6 py-3"style={{ width: "200px", height: "30px" }}>
                Concern
              </th>
              <th scope="col" className="px-6 py-3"style={{ width: "200px", height: "30px" }}>
                Date
              </th>
              <th scope="col" className="px-6 py-3"style={{ width: "200px", height: "30px" }}>
                Type
              </th>
              <th scope="col" className="px-6 py-3" style={{ width: "200px", height: "30px" }}>
                Urgency
              </th>
              <th scope="col" className="px-6 py-3" style={{ width: "200px", height: "30px" }}>
                Status
              </th>
            </tr>
          </thead>
          </table>
        
        {sortedPosts.reverse().map((post: { id: Key; title: string; content: string; createdAt: string; type: string; urgency: string }) => (
          <div key={post.id}>
            <AdminConcernView id={user_Id} concern={post.content} title={post.title} createdAt={formatDate(post.createdAt)} type={post.type} urgency={post.urgency} />
          </div>
        ))}
      </div>
    </>
  );
};
