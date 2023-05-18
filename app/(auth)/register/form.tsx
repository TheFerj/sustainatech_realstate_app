"use client"

import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
interface RegisterFormProps {
  names: string;
}
export const RegisterForm: React.FC<RegisterFormProps> = ({names}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const role = 'tenant';
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          name,
          location,
          role, // Include the role property in the request body
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        signIn();
        setSuccessMessage('Successfully created a new tenant account');
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
        {names}
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
        <Label htmlFor="email">Address</Label>
        <Input
          className="w-full"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          type="location"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
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
          Register
        </Button>
      </div>
    </form>
  );
};
