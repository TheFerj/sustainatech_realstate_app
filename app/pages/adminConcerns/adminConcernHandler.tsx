
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
        <LogoutButton />
        <div>
          <label htmlFor="sortOption">Sort by:</label>
          <select id="sortOption" value={sortOption} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        
        {sortedPosts.reverse().map((post: { id: Key; title: string; content: string; createdAt: string; type: string; urgency: string }) => (
          <div key={post.id}>
            <AdminConcernView id={user_Id} concern={post.content} title={post.title} createdAt={formatDate(post.createdAt)} type={post.type} urgency={post.urgency} />
          </div>
        ))}
      </div>
    </>
  );
};
