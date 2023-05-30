"use client"

import { useState } from "react";
import { TextField, Button, DialogActions } from "@mui/material";
import { Scheduler } from "@aldabil/react-scheduler";
import type {
  ProcessedEvent,
  SchedulerHelpers
} from "@aldabil/react-scheduler/types";

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
  });
  const [error, setError] = useState("");

  const handleChange = (value: string, name: string) => {
    setState((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  const handleSubmit = async () => {
    // Your own validation
    if (state.title.length < 3) {
      return setError("Min 3 letters");
    }

    try {
      scheduler.loading(true);

      /**Simulate remote data saving */
      const added_updated_event = (await new Promise((res) => {
        /**
         * Make sure the event have 4 mandatory fields
         * event_id: string|number
         * title: string
         * start: Date|string
         * end: Date|string
         */
        setTimeout(() => {
          res({
            event_id: event?.event_id || Math.random(),
            title: state.title,
            start: scheduler.state.start.value,
            end: scheduler.state.end.value,
            description: state.description,
            urgency: state.urgency,
            status: state.status
          });
        }, 3000);
      })) as ProcessedEvent;

      scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
      scheduler.close();
    } finally {
      scheduler.loading(false);
    }
  };
  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <p>Load your custom form/fields</p>
        <TextField
          label="Title"
          value={state.title}
          onChange={(e) => handleChange(e.target.value, "title")}
          error={!!error}
          helperText={error}
          fullWidth
        />
        <TextField
          label="Description"
          value={state.description}
          onChange={(e) => handleChange(e.target.value, "description")}
          fullWidth
        />
        <TextField
          label="Urgency"
          value={state.urgency}
          onChange={(e) => handleChange(e.target.value, "urgency")}
          fullWidth
        />
      </div>
      <DialogActions>
        <Button onClick={scheduler.close}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogActions>
    </div>
  );
};

interface CustomSchedulerProps{
events:[]
}

const CustomScheduler: React.FC<CustomSchedulerProps> = ({events}) => {
  const [events2, setEvents] = useState([
    {
      event_id: 1,
      title: "Event 1",
      start: new Date("2023/5/22, 09:00"),
      end: new Date("2023/5/22 9:00"),
    },
    {
      event_id: 5,
    title: 'Internet',
    start: new Date ('2023/5/31 8:30'),
    end: new Date('2023/5/31 9:30'),
    description: 'Slow internet'
    },
  ]);

  return (
    <Scheduler
      events={events}
      customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
      viewerExtraComponent={(fields, event) => {
        return (
          <div>
            <p>Useful to render custom fields...</p>
            <p>Description: {event.description || "Nothing..."}</p>
            <p>Urgency: {event.urgency || "Nothing..."}</p>
            <p>Status: {event.status || "Nothing..."}</p>
          </div>
        );
      }}
    />
  );
};


export default CustomScheduler;