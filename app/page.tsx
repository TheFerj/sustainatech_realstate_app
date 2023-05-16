import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from './auth'
import { User } from './user'

export default async function Home() {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id; // Extract the "id" property from the session object

  return (
    <main>
      <h2>Home</h2>
      <h2>Server call</h2>
      <pre>{JSON.stringify(userId)}</pre> {/* Display the extracted "id" property */}
      <h2>Client call</h2>
      <User/>
    </main>
  )
}