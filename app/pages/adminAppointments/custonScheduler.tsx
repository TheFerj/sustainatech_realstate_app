"use client"

import { useState } from "react";
import { TextField, Button, DialogActions } from "@mui/material";
import { Scheduler } from "@aldabil/react-scheduler";
import type {
  ProcessedEvent,
  SchedulerHelpers
} from "@aldabil/react-scheduler/types";
import AdminAppointmentModal from "./adminAppointmentModal";
import { getAppoinmentData } from "./getAppointmentData";

interface CustomEditorProps {
  scheduler: SchedulerHelpers;
}
const CustomEditor = ({ scheduler }: CustomEditorProps) => {
  const event = scheduler.edited;

  // Make your own form/state
  const [state, setState] = useState({
    title: event?.title || "",
    description: event?.description || "",
    urgency: event?.urgency || "",
    status: event?.status || "",
    issue: event?.description || "",
  });
  const [error, setError] = useState("");


  
  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <p>Load your custom form/fields</p>
      </div>
      <DialogActions>
        <Button onClick={scheduler.close}>Cancel</Button>
      </DialogActions>
    </div>
  );
};

interface CustomSchedulerProps{
events:[]
}

const CustomScheduler: React.FC<CustomSchedulerProps> = ({events}) => {
  
  return (
    <Scheduler
      events={events}
      customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
      viewerExtraComponent={(fields, event) => {
        return (
          
          <div>
            <p>Appointment Details</p>
            <p>Description: {event.description || "Nothing..."}</p>
            <AdminAppointmentModal id={'7'} email={"dav@gmail.com"} appointmentDescriptions={event.description} appointmentIssue={event.tittle}/>
          </div>
        );
      }}
    />
  );
};


export default CustomScheduler;