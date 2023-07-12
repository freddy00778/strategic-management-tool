import CustomModal from "../../CustomModal";
import cancel from "../../../assets/images/cancel.svg";
import { useState } from "react";
import { Event } from "../CalendarComponent";

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

const CustomChangeTable: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <CustomModal
      isOpen={true}
      size="lg"
      cancel={cancel}
      onClose={onClose}
      width={24}
    >
      <h2 className="text-primary-500 text-2xl">{event.title}</h2>
    </CustomModal>
  );
};

export default CustomChangeTable;
