import InputField from "../../InputField";
import { useState } from "react";
import DisplayValuesComponent from "../../DisplayValuesComponent";
import Button from "../../Button";
import Technology from "./CheckLists/Technology";
import Organisation from "./CheckLists/Organisation";
import Governance from "./CheckLists/Governance";
import Assets from "./CheckLists/Assets";
import Process from "./CheckLists/Process";
import Employees from "./CheckLists/Employees";
import Customers from "./CheckLists/Customers";
import Suppliers from "./CheckLists/Suppliers";
import Training from "./CheckLists/Training";
interface StakeholderFormProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const StakeholderForm: React.FC<StakeholderFormProps> = ({ onChange }) => {
  const [division, setDivision] = useState("");
  const [department, setDepartment] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [displayValues, setDisplayValues] = useState<string[]>([]);
  const [displayValues1, setDisplayValues1] = useState<string[]>([]);
  const [displayValues2, setDisplayValues2] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const handleKeyPress = (value: string) => {
    setDisplayValues([...displayValues, value]);
    setInputValue("");
  };

  const handleDeleteValue = (index: number) => {
    const newValues = [...displayValues];
    newValues.splice(index, 1);
    setDisplayValues(newValues);
  };
  const handleInputChange1 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue1(e.target.value);
    onChange?.(e);
  };

  const handleKeyPress1 = (value: string) => {
    setDisplayValues1([...displayValues1, value]);
    setInputValue1("");
  };

  const handleDeleteValue1 = (index: number) => {
    const newValues = [...displayValues1];
    newValues.splice(index, 1);
    setDisplayValues1(newValues);
  };
  const handleInputChange2 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue2(e.target.value);
    onChange?.(e);
  };

  const handleKeyPress2 = (value: string) => {
    setDisplayValues2([...displayValues2, value]);
    setInputValue2("");
  };

  const handleDeleteValue2 = (index: number) => {
    const newValues = [...displayValues2];
    newValues.splice(index, 1);
    setDisplayValues2(newValues);
  };
  return (
    <form
      action="submit"
      className="flex flex-col w-full h-full overflow-y-auto max-h-[700px] scrollbar-thin scrollbar-thumb-zinc-200"
    >
      <div className="flex flex-col w-full px-10 py-10  space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-0">
          <h1 className="text-[20px]">
            Who will be impacted/affected by this key change?
          </h1>
        </div>
        <div className="flex flex-col w-full  ">
          <InputField
            id="email"
            label="Name the Stakeholder or Stakeholder Group (Internal & External)"
            value={inputValue}
            onChange={handleInputChange}
            onEnterPress={handleKeyPress}
            type="textarea"
            placeholder="Provide the names of the stakeholders"
            required
            className="w-full h-[200px] "
            characterLimit={120}
          />
          <div className="mt-20">
            <DisplayValuesComponent
              displayValues={displayValues}
              handleDeleteValue={handleDeleteValue}
            />
          </div>
        </div>
      </div>
      <div className="px-10">
        <InputField
          id="email"
          label="Division/Department/Unit"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          type="text"
          placeholder="Enter the department name"
          required
          className="w-2/4 m-0 "
        />
      </div>
      <Technology />
      <Organisation />
      <Governance />
      <Assets />
      <Process />
      <Employees />
      <Customers />
      <Suppliers />
      <Training />
      <div className="px-10">
        <InputField
          id="email"
          label="OtherProject/Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          type="text"
          placeholder="Enter the department/project name"
          required
          className="w-2/4 m-0 "
        />
      </div>
      <div className="flex flex-col w-full px-10 py-10  space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-0">
          <h1 className="text-[20px]">Barriers /Obstacles</h1>
        </div>
        <div className="flex flex-col w-full   ">
          <InputField
            id="email"
            label=""
            value={inputValue1}
            onChange={handleInputChange1}
            onEnterPress={handleKeyPress1}
            type="textarea"
            placeholder="What barriers or obstacles do you foresee?"
            required
            className="w-full h-[200px] "
            characterLimit={120}
          />
          <div className="mt-12">
            <DisplayValuesComponent
              displayValues={displayValues1}
              handleDeleteValue={handleDeleteValue1}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 py-10  space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-0">
          <h1 className="text-[20px]">Levers</h1>
        </div>
        <div className="flex flex-col w-full  ">
          <InputField
            id="email"
            label="(How does it contribute to i.e the strategy, improved financial performance, compliance,
sustainability, effectiveness, efficiency, culture, values?)"
            value={inputValue2}
            onChange={handleInputChange2}
            onEnterPress={handleKeyPress2}
            type="textarea"
            placeholder="Provide the necessary information"
            required
            className="w-full h-[200px] "
            characterLimit={120}
          />
          <div className="mt-24">
            <DisplayValuesComponent
              displayValues={displayValues2}
              handleDeleteValue={handleDeleteValue2}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full h-full space-x-20 px-10  items-end justify-end">
        <Button
          variant="primary"
          size="lg"
          onClick={() => alert("Objective Saved")}
          className="rounded-lg w-[40%] bg-primary-500"
          type="button"
        >
          Save & Continue
        </Button>
      </div>
    </form>
  );
};

export default StakeholderForm;
