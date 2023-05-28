import { IReporter } from "../iCoreServices/Reporting";
import { Service } from "./Service";

export  class Reporter extends Service implements IReporter { 

    // attributes go here

    sendConcern(input: string) {
        //TODO
    }
}