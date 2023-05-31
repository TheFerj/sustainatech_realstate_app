export { default } from 'next-auth/middleware'

export const config = {
  //change this middle ware.
  matcher: ['/pages/dashboard','/pages/profile','/pages/adminDashboard','/pages/adminConcerns','/pages/concernPage']
}
