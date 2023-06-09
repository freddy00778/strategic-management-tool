import { useState } from "react";
import InputField from "../../../InputField";
import InputDropdown from "../../../InputDropdown";

const Assets = () => {
  const options = [
    "Select",
    "Strategic Change",
    "BAU Change",
    "Annual Corporate Initiative",
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };
  const [division, setDivision] = useState("");
  return (
    <form className="flex flex-col w-full px-10 py-10  space-y-10">
      <div className="w-full flex items-center border-b border-b-border py-2">
        <h1 className="text-[20px]">Assets</h1>
      </div>
      <div className="flex w-full items-center justify-between space-x-10">
        <InputDropdown
          id="dropdown"
          header="Asset Type"
          label={`${selectedOption}`}
          options={options}
          onOptionSelected={handleOptionSelected}
          className=" w-full m-0"
        />
        <InputField
          id="text"
          label="Division/Department/Unit"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          type="text"
          placeholder="Enter the department name"
          required
          className="w-full m-0"
        />
      </div>
    </form>
  );
};

export default Assets;
