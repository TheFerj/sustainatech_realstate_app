import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export async function fetchUserData() {
    try {
      const session = await getServerSession(authOptions);
      const userId = session?.user?.email;
  
      const res = await fetch(`http://localhost:3000/api/user/${userId}`, {
        method: 'GET',
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const user = await res.json();
      return(user.role);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }
  