

export async function getUserData2({ userId }: { userId: any }) {
    // Replace with your session ID retrieval log
    
    const res = await fetch("http://localhost:3000/api/user/" + userId, {
      method: "GET",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }