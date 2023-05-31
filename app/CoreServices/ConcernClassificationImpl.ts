
import { IConcernClassification } from "../iCoreServices/ConcernClassification";

export class ConcernClassification implements IConcernClassification {
    
    
    classifyConcern(): void {
        throw new Error("Method not implemented.");
    }


    
    async showConcernList({ userId }: { userId: any }) {
        
            const res = await fetch('http://localhost:3000/api/user/' + userId + '/post/userPost', {
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
}