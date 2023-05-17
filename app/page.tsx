import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from './auth'
import { User } from './user'
import { NextResponse } from 'next/server'
async function getData() {
  const res = await fetch('http://localhost:3000/api/user', {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


export default async function Home() {
  const data = await getData()
  console.log('-------data----')
  console.log(data[0].name)
  return (
    <main>
      <pre></pre>
      <h2>Home</h2>
      <h2>Server call</h2>
      <pre>{data[0].name}</pre> {/* Display the extracted "id" property */}
      
      <h2>Client call</h2>
      <User/>
    </main>
  )
}