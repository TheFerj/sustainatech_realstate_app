import { LoginButton, LogoutButton } from "@/app/auth";
import { User } from "@/app/user";

export default async function Dashboard() {
  return <><LoginButton />
  <LogoutButton />
  <h2>Server Session</h2>
  <pre></pre>
  <h2>Client Call</h2>
  <User /></>
}
