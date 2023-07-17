import InputField from "../InputField";
import InputDropdown from "../InputDropdown";
import Button from "../Button";
import { DataType } from "../../../types";
import { useState } from "react";
import lesson from "../../assets/images/lessons-log.svg";
import cancel from "../../assets/images/cancel.svg";
import Table from "../Table";
import IssueNoteModal from "./IssueNote/IssueNoteModal";

interface IssueModalFormProps {
  issue: string;
  setIssue: React.Dispatch<React.SetStateAction<string>>;
  owner: string;
  setOwner: React.Dispatch<React.SetStateAction<string>>;
  action: string;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  person: string;
  setPerson: React.Dispatch<React.SetStateAction<string>>;
  assessment1: string;
  setAssessment1: React.Dispatch<React.SetStateAction<string>>;
  dateLogged: string;
  setDateLogged: React.Dispatch<React.SetStateAction<string>>;
  reportedDate: string;
  setReportedDate: React.Dispatch<React.SetStateAction<string>>;
  addData: (newData: DataType) => void;
  onClose: () => void;
}
const IssueModalForm: React.FC<IssueModalFormProps> = ({
  issue,
  setIssue,
  owner,
  setOwner,
  action,
  setAction,
  person,
  setPerson,
  assessment1,
  setAssessment1,
  dateLogged,
  setDateLogged,
  reportedDate,
  setReportedDate,
  onClose,
  addData,
}) => {
  const options1 = ["Select", "No", "Yes"];
  const options2 = [
    "Select",
    "Very High Impact",
    "High Impact",
    "Medium Impact",
    "Low Impact",
  ];
  const options3 = [
    "Select",
    "Very High Impact",
    "High Impact",
    "Medium Impact",
    "Low Impact",
  ];
  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);
  const [selectedOption3, setSelectedOption3] = useState(options3[0]);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [data1, setData1] = useState<DataType[]>([]);
  const addData1 = (newData: DataType) => {
    setData1((prevData) => [...prevData, newData]);
  };

  const openModal = () => {
    setSecondModalOpen(true); // Open the modal when button is clicked
  };
  const handleSave = () => {
    addData({
      issue: issue,
      owner: owner,
      action: action,
      person: person,
      reportedDate: reportedDate,
      options1: options1,
      options2: options2,
      options3: options3,
    });
    onClose();
  };
  const handleOptionSelected1 = (option1: string) => {
    setSelectedOption1(option1);
  };
  const handleOptionSelected2 = (option2: string) => {
    setSelectedOption2(option2);
  };
  const handleOptionSelected3 = (option3: string) => {
    setSelectedOption3(option3);
  };
  return (
    <div className="flex flex-col space-y-16 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200">
      <InputField
        id="change"
        label="Date Reported"
        value={reportedDate}
        onChange={(e) => setReportedDate(e.target.value)}
        type="datepicker"
        className="w-full m-0"
      />
      <InputField
        id="change"
        label="Issue"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
        type="textarea"
        placeholder="Describe the issue"
        required
        className="w-full m-0 h-44"
      />
      <InputField
        id="change"
        label="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        type="text"
        placeholder="Responsible Manager"
        required
        className="w-full m-0"
      />
      <InputField
        id="change"
        label="Solution / Action"
        value={action}
        onChange={(e) => setAction(e.target.value)}
        type="textarea"
        placeholder="Describe the solution or action required to resolve the issue"
        required
        className="w-full m-0 h-44"
      />
      <InputDropdown
        id="dropdown"
        header="Actions captured in Change Management / Project Plan"
        label={`${selectedOption1}`}
        options={options1}
        onOptionSelected={handleOptionSelected1}
        className=" w-full m-0"
      />
      <InputField
        id="change"
        label="Responsible person to take action"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
        type="text"
        placeholder="Responsible person’s name"
        required
        className="w-full m-0"
      />
      <div className="flex items-center w-full justify-between space-x-10">
        <InputField
          id="date"
          label="Date"
          value={reportedDate}
          onChange={(e) => setReportedDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
        <InputDropdown
          id="dropdown"
          header="Impact Level"
          label={`${selectedOption2}`}
          options={options2}
          onOptionSelected={handleOptionSelected2}
          className=" w-full m-0"
        />
      </div>
      <div className="flex items-center w-full justify-between space-x-10">
        <InputField
          id="date"
          label="Date"
          value={reportedDate}
          onChange={(e) => setReportedDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
        <InputDropdown
          id="dropdown"
          header="Previous Level of Impact"
          label={`${selectedOption3}`}
          options={options3}
          onOptionSelected={handleOptionSelected3}
          className=" w-full m-0"
        />
      </div>
      <div className="flex w-full py-4 border-b border-border border-opacity-20 items-center justify-between ">
        <h1>Notes</h1>

        <Button
          variant="primary"
          size="md"
          onClick={openModal}
          className="rounded-lg w-[30%] bg-primary-500"
          type="button"
        >
          Add Notes
        </Button>
      </div>
      <div className="relative">
        <div className="flex flex-col w-full  h-[100%]">
          <Table
            headings={[
              "Date",
              "Notes",
              "Previous RS",
              "Previous Rating",
              "Risk Assessment",
            ]}
            data={data1}
            //addData={addData}
            children={
              <div className=" space-y-2">
                <img src={lesson} alt="lessons" width={140} />
                <h1 className="text-[18px]">No Notes</h1>
              </div>
            }
          />
        </div>
      </div>
      <div>
        <IssueNoteModal
          isOpen={secondModalOpen}
          onClose={() => setSecondModalOpen(false)}
          className=" absolute "
          cancel={cancel}
          width={14}
          assessment={assessment1}
          setAssessment={setAssessment1}
          dateLogged={dateLogged}
          setDateLogged={setDateLogged}
          text={text}
          setText={setText}
          addData={addData1}
          dataLength={data1.length}
        />
      </div>
      <div className="flex w-full h-[20%] items-end justify-end ">
        <Button
          variant="primary"
          size="md"
          onClick={handleSave}
          className="rounded-lg w-[30%] mt-6 bg-primary-500"
          type="button"
        >
          Add Issue
        </Button>
      </div>
    </div>
  );
};

export default IssueModalForm;
