import { NavBar } from '../components/navbar'
import { fetchUserData } from './getUserdata'
import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const userData = await fetchUserData();
  return (
    <html lang="en">
      <body>
        <NavBar role={userData}/>
        {userData}
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
