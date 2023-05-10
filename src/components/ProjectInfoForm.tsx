import InputField from "./InputField";
import { useState } from "react";
import InputDropdown from "./InputDropdown";
import DisplayValuesComponent from "./DisplayValuesComponent";

interface ProjectInfoFormProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ProjectInfoForm: React.FC<ProjectInfoFormProps> = ({ onChange }) => {
  const [category, setCategory] = useState("");
  const [division, setDivision] = useState("");
  const [sponsor, setSponsor] = useState("");
  const [manager, setManager] = useState("");
  const [champion, setChampion] = useState("");
  const [change, setChange] = useState("");
  const [initiative, setInitiative] = useState("");
  const options = ["Select", "MTN", "Vodafone", "Airtel Tigo"];
  const options1 = ["Select", "MTN", "Vodafone", "Airtel"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [inputValue, setInputValue] = useState("");
  const [displayValues, setDisplayValues] = useState<string[]>([]);

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

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };
  const handleOptionSelected1 = (option1: string) => {
    setSelectedOption1(option1);
  };

  return (
    <div className="flex flex-col w-full h-screen my-10 overflow-y-auto max-h-[10000px] space-y-10 scrollbar-thin scrollbar-thumb-zinc-200">
      <div className="flex w-full space-x-20 px-20 items-center">
        <InputDropdown
          id="dropdown"
          header="Category"
          label={`${selectedOption}`}
          options={options}
          onOptionSelected={handleOptionSelected}
          className=" w-full m-0"
        />
        <InputField
          id="email"
          label="Project Name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Enter the project name"
          required
          className="w-full m-0"
        />
      </div>
      {/* first section */}
      <div className="flex w-full h-full space-x-20 px-20 items-start justify-between">
        <div className="flex flex-col w-2/4 space-y-10 ">
          <InputField
            id="email"
            label="Initiating Division/Department/Unit"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            type="text"
            placeholder="Enter the department name"
            required
            className="w-full m-0"
          />
          <InputField
            id="email"
            label="Project Sponsor"
            value={sponsor}
            onChange={(e) => setSponsor(e.target.value)}
            type="text"
            placeholder="Enter the project sponsor name"
            required
            className="w-full m-0"
          />
          <InputField
            id="email"
            label="Project Manager"
            value={manager}
            onChange={(e) => setManager(e.target.value)}
            type="text"
            placeholder="Enter the project manager name"
            required
            className="w-full m-0"
          />
          <InputField
            id="email"
            label="Project Champion"
            value={champion}
            onChange={(e) => setChampion(e.target.value)}
            type="text"
            placeholder="Enter the project champion name"
            required
            className="w-full m-0"
          />
          <InputField
            id="email"
            label="Change Manager"
            value={change}
            onChange={(e) => setChange(e.target.value)}
            type="text"
            placeholder="Enter the change manager name"
            required
            className="w-full m-0"
          />
          <InputDropdown
            id="dropdown"
            header="Change State of the Initiative"
            label={`${selectedOption1}`}
            options={options1}
            onOptionSelected={handleOptionSelected1}
            className=" w-full m-0"
          />
        </div>
        <div className="flex flex-col w-2/4 h-full space-y-10">
          <InputField
            id="email"
            label="Main Objective of the Initiative"
            value={inputValue}
            onChange={handleInputChange}
            onEnterPress={handleKeyPress}
            type="textarea"
            placeholder="Describe the main objectives"
            required
            className="w-full mb-2"
          />
          <div>
            <DisplayValuesComponent
              displayValues={displayValues}
              handleDeleteValue={handleDeleteValue}
            />
          </div>

          <InputField
            id="user-name"
            label="Initiative Date"
            value={initiative}
            onChange={(e) => setInitiative(e.target.value)}
            type="datepicker"
            className="w-full"
          />
          <InputField
            id="user-name"
            label="Technical Initiative End Date"
            value={initiative}
            onChange={(e) => setInitiative(e.target.value)}
            type="datepicker"
            className="w-full"
          />
          <InputField
            id="user-name"
            label="Change Initiative End Date"
            value={initiative}
            onChange={(e) => setInitiative(e.target.value)}
            type="datepicker"
            className="w-full"
          />
          <InputField
            id="user-name"
            label="Final Benefits Realization Date"
            value={initiative}
            onChange={(e) => setInitiative(e.target.value)}
            type="datepicker"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoForm;
