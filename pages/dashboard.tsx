import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { LoginButton, LogoutButton } from '@/app/auth';
import { User } from '@/app/user';

interface DashboardProps {
  session: Session | null;
}

export default function Dashboard({ session }: DashboardProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4">Welcome to the dashboard</h2>
      <div className="flex">
        {!session ? <LogoutButton /> : <LoginButton />}
      </div>
      <h2 className="mt-4">Server Session</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <h2 className="mt-4">Client Call</h2>
      <User />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<DashboardProps> = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<DashboardProps>> => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
