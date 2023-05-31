

export async function getAppoinmentData({ userId }: { userId: any },{ id }: { id: any }) {
    // Replace with your session ID retrieval log
    
    const res = await fetch("http://localhost:3000/api/user/" + userId + "/appointment/"+ id, {
      method: "GET",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }