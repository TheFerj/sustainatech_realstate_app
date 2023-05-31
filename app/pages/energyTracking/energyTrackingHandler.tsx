"use client"
import React, { Key, useEffect, useState } from 'react';
import EnergyTrackingModal from './energyTrackingModal';
import { EnergyTrackingView } from './energyTrackingView';

interface EnergyTrackingHandlerProps {
  user_Id: string;
  email: string;
  userPosts: [];
}

export const EnergyTrackingHandler: React.FC<EnergyTrackingHandlerProps> = ({ user_Id, email, userPosts }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Perform any asynchronous operations here
    // Example: Fetch data, make API calls, etc.
    // Once the asynchronous operations are completed, set the loading state to false
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator or component
  }

  return (
    <>
      <div className="grid w-full items-center justify-center">
        <EnergyTrackingModal id={user_Id} email={email} />
        {userPosts.reverse().map((post: { id: Key; electricBill: string; energyUsage: string; billDate: string; type: string; urgency: string; }) => (
          <div key={post.id}>
            <EnergyTrackingView id={user_Id} electricBill={post.electricBill} energyUsage={post.energyUsage} billDate={post.billDate} />
          </div>
        ))}
      </div>
    </>
  );
};
