import CustomModal from "../../CustomModal";
import cancel from "../../../assets/images/cancel.svg";
import { Event } from "../CalendarComponent";
import Table from "../../Table";
import lesson from "../../../assets/images/lessons-log.svg";
import { DataType } from "../../../../types";
// import { useState } from "react";

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

const CustomChangeTable: React.FC<EventModalProps> = ({ event, onClose }) => {
  //   const [data, setData] = useState<DataType[]>([]);
  // Define the data and headings based on the event.title
  let tableData: DataType[] = [];
  let tableHeadings: string[] = [];

  // Map the event.title to the specific data and headings
  switch (event.title) {
    case "Strategic Projects":
      tableHeadings = [
        "No",
        "Project Name",
        "Start Date",
        "End Date",
        "Milestone",
        "Key Activity",
        "Sponsor",
        "Project Manager",
        "Change Manager",
      ];
      // Set the specific data for Strategic Projects
      tableData = [
        // Add your data rows here
      ];
      break;
    case "Strategic Project Milestone":
      tableHeadings = [
        "No",
        "Project Name",
        "Milestone",
        "Start Date",
        "End Date",
        "Sponsor",
        "Project Manager",
        "Change Manager",
      ];
      // Set the specific data for BAU Projects
      tableData = [
        // Add your data rows here
      ];
      break;
    case "Key Strategic Project Activity":
      tableHeadings = [
        "No",
        "Project Name",
        "KSP Activity",
        "Start Date",
        "End Date",
        "Sponsor",
        "Project Manager",
        "Change Manager",
      ];
      // Set the specific data for BAU Projects
      tableData = [
        // Add your data rows here
      ];
      break;
    case "BAU Projects":
      tableHeadings = [
        "No",
        "Project Name",
        "Start Date",
        "End Date",
        "Milestone",
        "Key Activity",
        "Sponsor",
        "Project Manager",
        "Change Manager",
      ];
      // Set the specific data for BAU Projects
      tableData = [
        // Add your data rows here
      ];
      break;
    case "BAU Project Milestone":
      tableHeadings = [
        "No",
        "Project Name",
        "Milestone",
        "Start Date",
        "End Date",
        "Sponsor",
        "Project Manager",
        "Change Manager",
      ];
      // Set the specific data for BAU Projects
      tableData = [
        // Add your data rows here
      ];
      break;
    case "Key BAU Project Activity":
      tableHeadings = [
        "No",
        "Project Name",
        "KBP Activity",
        "Start Date",
        "End Date",
        "Sponsor",
        "Project Manager",
        "Change Manager",
      ];
      // Set the specific data for BAU Projects
      tableData = [
        // Add your data rows here
      ];
      break;
    case "Technical Change Projects":
      tableHeadings = [
        "No",
        "Project Name",
        "Start Date",
        "End Date",
        "Milestone",
        "Key Activity",
        "Sponsor",
        "Project Manager",
        "Change Manager",
      ];
      // Set the specific data for BAU Projects
      tableData = [
        // Add your data rows here
      ];
      break;
    // Add cases for other event titles
    default:
      // Set default headings and data
      tableHeadings = [];
      tableData = [];
  }
  return (
    <CustomModal
      isOpen={true}
      size="lg"
      cancel={cancel}
      onClose={onClose}
      width={24}
    >
      <h2 className="text-primary-500 text-2xl">{event.title}</h2>
      <div className="flex flex-col w-full h-full py-10">
        <Table
          headings={tableHeadings}
          data={tableData}
          //addData={addData}
          children={
            <div className=" space-y-2">
              <img src={lesson} alt="lessons" width={200} />
              <h1 className="text-[18px]">No Data</h1>
            </div>
          }
        />
      </div>
    </CustomModal>
  );
};

export default CustomChangeTable;
