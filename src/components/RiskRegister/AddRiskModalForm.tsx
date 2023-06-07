import InputField from "../InputField";
import InputDropdown from "../InputDropdown";
import Button from "../Button";
import { DataType } from "../../../types";
import { useState } from "react";

interface AddKeyChangeFormProps {
  risk: string;
  setRisk: React.Dispatch<React.SetStateAction<string>>;
  owner: string;
  setOwner: React.Dispatch<React.SetStateAction<string>>;
  action: string;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  person: string;
  setPerson: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  assessment: string;
  setAssessment: React.Dispatch<React.SetStateAction<string>>;
  reportedDate: string;
  setReportedDate: React.Dispatch<React.SetStateAction<string>>;
  addData: (newData: DataType) => void;
  onClose: () => void;
}
const AddRiskModalForm: React.FC<AddKeyChangeFormProps> = ({
  risk,
  setRisk,
  owner,
  setOwner,
  action,
  setAction,
  person,
  setPerson,
  category,
  setCategory,
  assessment,
  setAssessment,
  reportedDate,
  setReportedDate,
  onClose,
  addData,
}) => {
  const options1 = [
    "Select",
    "Strategic Change",
    "Start-Up",
    "Implementation",
    "Anchoring",
    "Benefits",
  ];
  const options2 = [
    "Select",
    "Strategic Change",
    "Start-Up",
    "Implementation",
    "Anchoring",
    "Benefits",
  ];
  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);
  const handleSave = () => {
    addData({
      risk: risk,
      owner: owner,
      action: action,
      person: person,
      category: category,
      assessment: assessment,
      reportedDate: reportedDate,
      options1: options1,
      options2: options2,
    });
    onClose();
  };
  const handleOptionSelected1 = (option1: string) => {
    setSelectedOption1(option1);
  };
  const handleOptionSelected2 = (option2: string) => {
    setSelectedOption2(option2);
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
        label="Risk"
        value={risk}
        onChange={(e) => setRisk(e.target.value)}
        type="textarea"
        placeholder="Describe the risk"
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
        label="Mitigating Actions"
        value={action}
        onChange={(e) => setAction(e.target.value)}
        type="textarea"
        placeholder="Describe the mitigating actions identified"
        required
        className="w-full m-0 h-44"
      />
      <InputDropdown
        id="dropdown"
        header="Mitigating Actions captured in Change Management / Project Plan"
        label={`${selectedOption1}`}
        options={options1}
        onOptionSelected={handleOptionSelected1}
        className=" w-full m-0"
      />
      <InputField
        id="change"
        label="Responsible person to action mitigating action"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
        type="text"
        placeholder="Responsible person’s name"
        required
        className="w-full m-0"
      />
      <div className="flex items-center w-full justify-between space-x-10">
        <InputDropdown
          id="dropdown"
          header="Risk Category"
          label={`${selectedOption2}`}
          options={options2}
          onOptionSelected={handleOptionSelected2}
          className=" w-full m-0"
        />
        <InputField
          id="change"
          label="Category Value"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Enter the risk category value"
          required
          className="w-full m-0"
        />
      </div>
      <div className="flex w-full items-center justify-between  py-2 border-b border-b-border border-opacity-20">
        <h1 className="text-primary-500 w-full">Current Risks</h1>
        <InputField
          id="date"
          value={reportedDate}
          onChange={(e) => setReportedDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
      </div>
      <div className="flex items-center w-full justify-between space-x-10">
        <InputDropdown
          id="dropdown"
          header="Impact Level"
          label={`${selectedOption2}`}
          options={options2}
          onOptionSelected={handleOptionSelected2}
          className=" w-full m-0"
        />
        <InputDropdown
          id="dropdown"
          header="Risk Category"
          label={`${selectedOption2}`}
          options={options2}
          onOptionSelected={handleOptionSelected2}
          className=" w-full m-0"
        />
      </div>
      <InputField
        id="change"
        label="Risk Assessment Value"
        value={assessment}
        onChange={(e) => setAssessment(e.target.value)}
        type="text"
        placeholder="Risk Assessment Value"
        required
        className="w-full m-0"
      />
      <div className="flex w-full h-[20%] items-end justify-end ">
        <Button
          variant="primary"
          size="md"
          onClick={handleSave}
          className="rounded-lg w-[30%] mt-6"
          type="button"
        >
          Add Risk
        </Button>
      </div>
    </div>
  );
};

export default AddRiskModalForm;
