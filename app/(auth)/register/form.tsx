'use client'

import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [business_name, setBusiness_name] = useState('')
  const [business_type, setBusiness_type] = useState('')
  const [location, setLocation] = useState('')
  const [contact_number, setContact] = useState('')

  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          name,
          business_name,
          business_type,
          location,
          contact_number

          

        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        signIn()
      } else {
        setError((await res.json()).error)
      }
    } catch (error: any) {
      setError(error?.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]">
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
      {/* address */}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          className="w-full"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="name"
        />
      </div>
      {/* address */}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="location">Location</Label>
        <Input
          className="w-full"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          type="location"
        />
      </div>
      {/* bussines name */}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="business_name">Bussiness Name</Label>
        <Input
          className="w-full"
          required
          value={business_name}
          onChange={(e) => setBusiness_name(e.target.value)}
          id="business_name"
          type="business_name"
        />
      </div>
      {/* bussines type */}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="business_type">Bussiness Type</Label>
        <Input
          className="w-full"
          required
          value={business_type}
          onChange={(e) => setBusiness_type(e.target.value)}
          id="business_type"
          type="business_type"
        />
      </div>
      {/* contact */}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="contact">Contact</Label>
        <Input
          className="w-full"
          required
          value={contact_number}
          onChange={(e) => setContact(e.target.value)}
          id="contact"
          type="contact"
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
      <div className="w-full">
        <Button className="w-full" size="lg">
          Register
        </Button>
      </div>
    </form>
  )
}
