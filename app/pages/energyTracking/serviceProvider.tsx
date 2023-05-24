

export class ServiceProvider {
    energyTracker: []; // Define energyTracker property

    constructor() {
      this.energyTracker = []; // Initialize energyTracker as an empty array
      // Rest of the properties and methods...
    }
  
    async getEnergyTracker(user_Id: string) {
      const res = await fetch('http://localhost:3000/api/user/' + user_Id + '/energyTracker/userEnergy', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache' // or other cache control directives
        }
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      return res.json();
    }

    async postEnergyTracker(email: string, formattedDate: string, electricBill: string, energyUsage: any, id: string) {
      const res = await fetch('/api/user/' + email + '/energyTracker', {
          method: 'POST',
          body: JSON.stringify({
              billDate: formattedDate,
              electricBill: parseFloat(electricBill),
              energyUsage,
              userId: id
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      });
  
      if (!res.ok) {
          throw new Error('Failed to post data');
      }
  
      return res.json();
  }
  }


  