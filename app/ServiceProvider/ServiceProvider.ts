import { AppointmentManager } from "../CoreServices/AppointmentManagerImpl";
import { ConcernClassification } from "../CoreServices/ConcernClassificationImpl";
import { EnergyTracker } from "../CoreServices/EnergyTrackingImpl";
import { FinanceManager } from "../CoreServices/FinanceManagerImpl";
import { Reporter } from "../CoreServices/ReportingImpl";


export class ServiceProvider { 
    
     public appointmentManager: AppointmentManager;
     public concernClassification: ConcernClassification;
     public energyTracker: EnergyTracker;
     public financeManager: FinanceManager;
     public reporting: Reporter;

constructor(){
    this.appointmentManager = new AppointmentManager();
    this.concernClassification = new ConcernClassification();
    this.energyTracker = new EnergyTracker();
    this.financeManager = new FinanceManager();
    this.reporting = new Reporter()
     }

}
