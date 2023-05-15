import { LoginButton, LogoutButton } from "@/app/auth";
import { User } from "@/app/user";

import { getSession } from "next-auth/react";

export default function Dashboard({session }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4">Welcome to the dashboard</h2>
      <div className="flex">
        {!session ?  <LogoutButton />:<LoginButton /> }
      </div>
      <h2 className="mt-4">Server Session</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <h2 className="mt-4">Client Call</h2>
      <User />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
