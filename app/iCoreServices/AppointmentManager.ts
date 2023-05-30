export interface IAppointmentManager { 
// functionality subject to change

 createAppointment({ userId }: { userId: string }):void;
 updateAppointment():void;
 generateAppointmentTicket():void;

}