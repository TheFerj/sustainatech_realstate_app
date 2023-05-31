export interface IAppointmentManager { 
// functionality subject to change

 createAppointment({ userId }: { userId: number },{issue}:{issue:any},{description}:{description:any},{prefferedDate}:{prefferedDate:any},{location}:{location:any},{contact}:{contact:any}):void;
 updateAppointment({id}:{id:string},{ userId }: { userId: number },{issue}:{issue:any},{description}:{description:any},{prefferedDate}:{prefferedDate:any},{location}:{location:any},{contact}:{contact:any}):void;
 generateAppointmentTicket():void;

}