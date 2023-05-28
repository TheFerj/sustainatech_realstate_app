
export class ServiceProvider { 
    
chosenService: Service;

appointmentManager: AppointmentManager;
concernClassification: ConcernClassification;
energyTracker: EnergyTracker;
financeManager: FinanceManager;
reporter: Reporter;


    setService(service: string) {

        if(service === 'Appointment'){
            this.chosenService = this.appointmentManager;
        }
        if(service === 'ConcernClassification'){
            this.chosenService = this.concernClassification;
        }
        if(service === 'EnergyTracking'){
            this.chosenService = this.energyTracker; 
        }
        if(service === 'FinanceManager'){ 
            this.chosenService = this.financeManager;
        }
        if(service === 'Reporting'){
            this.chosenService = this.reporter;
        }
    }

    public getService(): Service {

            return this.chosenService

        }
}




