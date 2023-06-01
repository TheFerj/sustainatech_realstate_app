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
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"style={{ width: "200px", height: "100px" }}>
                Name
              </th>
              <th scope="col" className="px-6 py-3"style={{ width: "200px", height: "100px" }}>
                Email
              </th>
              <th scope="col" className="px-6 py-3"style={{ width: "200px", height: "100px" }}>
                Business Name
              </th>
              <th scope="col" className="px-6 py-3"style={{ width: "200px", height: "100px" }}>
                Business Type
              </th>
              <th scope="col" className="px-6 py-3"style={{ width: "200px", height: "100px" }}>
                Location
              </th>
              <th scope="col" className="px-6 py-3"style={{ width: "200px", height: "100px" }}>
                Contact
              </th>
            </tr>
          </thead>
          </table>
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
