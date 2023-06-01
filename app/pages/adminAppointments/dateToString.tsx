export function formatDate(dateString: string | number | Date) {
    const date = new Date(dateString);
  
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
  
    const formattedDate = `${year}/${month}/${day} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    return formattedDate;
  }
  