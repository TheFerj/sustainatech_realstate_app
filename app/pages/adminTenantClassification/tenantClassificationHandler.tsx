"use client"

import { LogoutButton } from '@/app/auth';
import React, { Key, useState } from 'react';
import { TenantClassificationView } from './tenantClassificationVIew';

interface TenantClassificationHandlerProps {
  user_Id: string;
  email: string;
  userPosts: {
    id: Key;
    issue: string;
    email: string;
    role: string;
    name: string;
    location: string;
    business_name: string;
    business_type: string;
    contact_number: string;
  }[];
}

export const TenantClassificationHandler: React.FC<TenantClassificationHandlerProps> = ({
  user_Id,
  email,
  userPosts,
}) => {
  const [sortedPosts, setSortedPosts] = useState([...userPosts]);
  const [selectedBusinessType, setSelectedBusinessType] = useState('');

  const sortList = () => {
    const sorted = [...sortedPosts].sort((a, b) =>
      b.business_type.localeCompare(a.business_type)
    );
    setSortedPosts(sorted);
  };

  const filterByBusinessType = () => {
    if (selectedBusinessType === '') {
      return sortedPosts;
    }
    return sortedPosts.filter((post) => post.business_type === selectedBusinessType);
  };

  return (
    <>
      <div className="grid w-full items-center justify-center">
        <div>
          <select
            value={selectedBusinessType}
            onChange={(e) => setSelectedBusinessType(e.target.value)}
          >
            <option value="">All Business Types</option>
            <option value="Manufacturing and Industrial businesses">Manufacturing and Industrial businesses</option>
            <option value="Residential Businesses">Residential Businesses</option>
            <option value="Foodservice and Hospitality businesses">Foodservice and Hospitality businesses</option>
            <option value="Retail and Commercial businesses">Retail and Commercial businesses</option>
            <option value="Healthcare and Medical businesses">Healthcare and Medical businesses</option>
            <option value="Office and Administrative businesses">Office and Administrative businesses</option>
            <option value="Transportation and Logistics businesses">Transportation and Logistics businesses</option>
            <option value="Agriculture and Farming businesses">Agriculture and Farming businesses</option>
            <option value="Construction and Building businesses">Construction and Building businesses</option>
          </select>
        </div>
        <button onClick={sortList}>Sort by Business Type</button>
        {filterByBusinessType().reverse().map((post: { id: Key; issue: string; email: string; role: string; name: string; location: string; business_name: string; business_type: string; contact_number: string }) => (
          <div key={post.id}>
            <TenantClassificationView
              id={user_Id}
              email={post.email}
              role={post.role}
              name={post.name}
              business_name={post.business_name}
              location={post.location}
              business_type={post.business_type}
              contact_number={post.contact_number}
            />
          </div>
        ))}
      </div>
    </>
  );
};
