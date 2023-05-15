import { LoginButton, LogoutButton } from "@/app/auth";
import { User } from "@/app/user";

export default async function Dashboard() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4">Welcome to dashboard</h2>
      <div className="flex">
        <LoginButton />

      
      </div>
      <div className="flex">
         
        <LogoutButton />
      
      </div>
      <h2 className="mt-4">Server Session</h2>
      <pre></pre>
      <h2 className="mt-4">Client Call</h2>
      <User />
    </div>
  );
}
