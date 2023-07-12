import React, { useState } from "react";
import {
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CustomModal from "../CustomModal";
import cancel from "../../assets/images/cancel.svg";
import CustomChangeTable from "./CalendarTables/CustomChangeTable";
interface DemoAppState {
  weekendsVisible?: boolean;
}

export type Event = {
  id: string;
  title: string;
  start: string;
  end?: string;
  allDay?: boolean;
  backgroundColor?: string;
  textColor?: string;
  border?: string;
};

const CalendarComponent: React.FC<DemoAppState> = ({
  weekendsVisible = true,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Strategic Projects",
      start: "2023-07-20",
      backgroundColor: "#00009E",
      textColor: "#fff",
      border: "transparent",
    },
    {
      id: "2",
      title: "BAU Projects",
      start: "2023-07-20",
      backgroundColor: "#C84C00",
      textColor: "#fff",
      border: "transparent",
    },
    {
      id: "3",
      title: "Technical Change Projects",
      start: "2023-07-20",
      backgroundColor: "#840084",
      textColor: "#fff",
      border: "transparent",
    },
    {
      id: "4",
      title: "Strategic Project Milestone",
      start: "2023-07-20",
      backgroundColor: "#0000EE",
      textColor: "#fff",
      border: "transparent",
    },
    {
      id: "5",
      title: "Key Strategic Project Activity",
      start: "2023-07-20",
      backgroundColor: "#6565FF",
      textColor: "#fff",
      border: "transparent",
    },
    {
      id: "6",
      title: "BAU Project Milestone",
      start: "2023-07-20",
      backgroundColor: "#F45D00",
      textColor: "#fff",
      border: "transparent",
    },
    {
      id: "7",
      title: "Key BAU Project Activity",
      start: "2023-07-20",
      backgroundColor: "#FFA56D",
      textColor: "#000",
      border: "transparent",
    },
    {
      id: "8",
      title: "Public Holiday",
      start: "2023-07-20",
      backgroundColor: "#000",
      textColor: "#fff",
      border: "transparent",
    },
  ]);

  const handleEventClick = (clickInfo: EventClickArg) => {
    setSelectedEvent({
      id: clickInfo.event.id,
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
      allDay: clickInfo.event.allDay,
    });
  };

  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <i className="text-[12px]">{eventContent.event.title}</i>
      </>
    );
  };

  return (
    <div className="container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={weekendsVisible}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        events={events} // render events from the state
      />
      {selectedEvent && (
        <CustomChangeTable
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default CalendarComponent;
