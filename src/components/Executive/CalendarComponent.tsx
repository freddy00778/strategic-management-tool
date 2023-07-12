import React, { useState } from "react";
import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CustomChangeTable from "./CalendarTables/CustomChangeTable";
import { EventsData } from "../../data/EventsData";
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
  const [events, setEvents] = useState<Event[]>(EventsData);

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
