import Button from "../Button";
import Table from "../Table";
import { useState } from "react";
import lesson from "../../assets/images/lessons-log.svg";
import cancel from "../../assets/images/cancel.svg";
import DecisionModal from "./DecisionModal";

interface DataType {
  [key: string]: string | number;
}

const DecisionForm = () => {
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  const [date1, setDate1] = useState("");
  const [topic, setTopic] = useState("");
  const [context, setContext] = useState("");
  const [forum, setForum] = useState("");
  const [approvedBy, setApprovedBy] = useState("");
  const [comments, setComments] = useState("");
  const [decision, setDecision] = useState("");
  const [department, setDepartment] = useState("");
  const [date2, setDate2] = useState("");
  const [nextStep, setNextStep] = useState("");
  const [actionedBy, setActionedBy] = useState("");

  const addData = (newData: DataType) => {
    setData((prevData) => [...prevData, newData]);
  };

  const handleSave = () => {
    setSecondModalOpen(true); // Open the modal when button is clicked
  };

  return (
    <div className="flex flex-col w-full h-screen relative ">
      <div className="flex flex-col w-full h-full my-10  space-y-10 ">
        <div className="flex w-full px-10 items-end justify-end">
          <Button
            variant="primary"
            size="lg"
            onClick={handleSave}
            className="rounded-lg w-[30%]"
            type="button"
          >
            Add A Decision
          </Button>
        </div>
        <div className="flex flex-col w-full px-10 h-[80%]">
          <Table
            headings={[
              "No",
              "Date1",
              "Topic",
              "Context",
              "Dept",
              "Decision",
              "Forum",
              "Date2",
              "Next Step",
              "Approved By",
              "Actioned By",
              "Comments",
            ]}
            data={data}
            addData={addData}
            children={
              <div className=" space-y-2">
                <img src={lesson} alt="lessons" width={200} />
                <h1 className="text-[18px]">No Decision Made</h1>
              </div>
            }
          />
        </div>
      </div>
      <DecisionModal
        isOpen={secondModalOpen}
        onClose={() => setSecondModalOpen(false)}
        className="absolute"
        cancel={cancel}
        width={14}
        date1={date1}
        setDate1={setDate1}
        topic={topic}
        setTopic={setTopic}
        context={context}
        setContext={setContext}
        forum={forum}
        setForum={setForum}
        approvedBy={approvedBy}
        setApprovedBy={setApprovedBy}
        comments={comments}
        setComments={setComments}
        decision={decision}
        setDecision={setDecision}
        department={department}
        setDepartment={setDepartment}
        date2={date2}
        setDate2={setDate2}
        nextStep={nextStep}
        setNextStep={setNextStep}
        actionedBy={actionedBy}
        setActionedBy={setActionedBy}
        addData={addData}
        dataLength={data.length}
      />
    </div>
  );
};

export default DecisionForm;
