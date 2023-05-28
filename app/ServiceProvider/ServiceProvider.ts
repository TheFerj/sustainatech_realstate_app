import { EnergyTracker } from "@prisma/client";
import { AppointmentManager } from "../CoreServices/AppointmentManagerImpl";
import { ConcernClassification } from "../CoreServices/ConcernClassificationImpl";
import { Service } from "../CoreServices/Service";
import { FinanceManager } from "../CoreServices/FinanceManagerImpl";
import { Reporter } from "../CoreServices/ReportingImpl";

export class ServiceProvider { 
     
chosenService!: Service;
    appointmentManager!: AppointmentManager;
concernClassification!: ConcernClassification;
energyTracker!: EnergyTracker;
financeManager!: FinanceManager;
reporter!: Reporter;


    setService(service: string) {

        if(service === 'Appointment'){
            this.chosenService = this.appointmentManager;
        }
        if(service === 'ConcernClassification'){
            this.chosenService = this.concernClassification;
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
