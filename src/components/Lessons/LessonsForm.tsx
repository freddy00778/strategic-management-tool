import Button from "../Button";

import Table from "../Table";
import { useState } from "react";
import lesson from "../../assets/images/lessons-log.svg";
import cancel from "../../assets/images/cancel.svg";
import LessonModal from "./LessonModal";
import { DataType } from "../../../types";

const LessonsForm = () => {
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [category, setCategory] = useState("");
  const [division, setDivision] = useState("");
  const [text, setText] = useState("");

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
            Add lessons
          </Button>
        </div>
        <div className="flex flex-col w-full px-10 h-[80%]">
          <Table
            headings={["No", "Type", "Description", "Date Logged", "Logged By"]}
            data={data}
            //addData={addData}
            children={
              <div className=" space-y-2">
                <img src={lesson} alt="lessons" width={200} />
                <h1 className="text-[18px]">No Lessons Log</h1>
              </div>
            }
          />
        </div>
      </div>
      <LessonModal
        isOpen={secondModalOpen}
        onClose={() => setSecondModalOpen(false)}
        className=" absolute"
        cancel={cancel}
        width={14}
        category={category}
        setCategory={setCategory}
        division={division}
        setDivision={setDivision}
        text={text}
        setText={setText}
        addData={addData}
        dataLength={data.length}
      />
    </div>
  );
};

export default LessonsForm;
