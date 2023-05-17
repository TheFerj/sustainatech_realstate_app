"use client"

import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react';


interface ProfileFormProps {
  Current_name: string;
  Current_email: string;
  Current_contact: string;
  Current_businessName: string;
  Current_businessType: string;
  Current_location: string;
  
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
    Current_name,Current_email,
    Current_contact,
    Current_businessName,
    Current_businessType,
    Current_location}) => {
        const router = useRouter()
        const searchParams = useSearchParams()
        const callbackUrl = searchParams.get('callbackUrl') || '/pages/profile'
  const [email, setEmail] = useState(Current_email);
  const [name, setName] = useState(Current_name);
  const [location, setLocation] = useState(Current_location);
  const [contact_number, setContact_number] = useState(Current_contact);
  const [business_name, setBusiness_name] = useState(Current_businessName);
  const [business_type, setBusiness_type] = useState(Current_businessType);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const res = await fetch('http://localhost:3000/api/user/' + Current_email, {
        method: 'PATCH',
        body: JSON.stringify({
          email,
          name,
          location,
          contact_number,
          business_name,
          business_type,
           // Include the role property in the request body
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        router.push(callbackUrl || '/pages/profile')
        setSuccessMessage('Update Successful');
      } else {
        setError((await res.json()).error);
      }
    } catch (error: any) {
      setError(error?.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]"> 
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Name</Label>
        <Input
          className="w-full"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="name"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Contact Number</Label>
        <Input
          className="w-full"
          required
          value={contact_number}
          onChange={(e) => setContact_number(e.target.value)}
          id="location"
          type="location"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Bussines Name</Label>
        <Input
          className="w-full"
          required
          value={business_name}
          onChange={(e) => setBusiness_name(e.target.value)}
          id="business_name"
          type="business_name"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Bussines Type</Label>
        <Input
          className="w-full"
          required
          value={business_type}
          onChange={(e) => setBusiness_type(e.target.value)}
          id="business_type"
          type="business_type"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Address</Label>
        <Input
          className="w-full"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          id="Address"
          type="Address"
        />
      </div>
      {error && <Alert>{error}</Alert>}
      {successMessage && (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">{successMessage}</span>
        </div>
      )}
      <div className="w-full">
        <Button className="w-full" size="lg">
          Update
        </Button>
      </div>
    </form>
  );
};