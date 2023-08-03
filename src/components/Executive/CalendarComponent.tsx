import React, { useState } from "react";
import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CustomChangeTable from "./CalendarTables/CustomChangeTable";
import { EventsData } from "../../data/EventsData";
import "./Calender.css";
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
  width?: number;
  extendedProps?: object;
  type?: string;
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

  const handleEventMouseEnter = (mouseEnterInfo: EventClickArg) => {
    const eventElement = mouseEnterInfo.el;
    const eventName = mouseEnterInfo.event.title;
    eventElement.setAttribute("title", eventName);
  };

  const handleEventMouseLeave = (mouseLeaveInfo: EventClickArg) => {
    const eventElement = mouseLeaveInfo.el;
    eventElement.removeAttribute("title");
  };

  const renderEventContent = (eventContent: EventContentArg) => {
    const eventType = eventContent.event.extendedProps.type;
    const eventColor = eventContent.event.textColor;

    if (eventType === "milestone") {
      return (
        <div
          style={{ backgroundColor: eventColor }}
          className="w-3 h-3 transform rotate-45"
        ></div>
      );
    } else if (eventType === "activity") {
      return (
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: eventColor }}
        ></div>
      );
    } else if (eventType === "initiative") {
      return (
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderBottom: `16px solid ${eventColor}`,
          }}
        ></div>
      );
    } else {
      return (
        <div className="bg-transparent flex flex-wrap gap-2 w-12">
          <div
            className="w-12 h-6 rounded-full flex items-center justify-center"
            title={eventContent.event.title}
          >
            <i className="text-[10px]">{eventContent.event.id}</i>
          </div>
        </div>
      );
    }
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
        dayMaxEvents={30}
        dayMaxEventRows={30}
        weekends={weekendsVisible}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        eventMouseEnter={handleEventMouseEnter}
        eventMouseLeave={handleEventMouseLeave}
        events={events}
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
