import { ChangeEvent, FC, useState } from "react";
import { CustomCheckbox } from "../../../CustomCheckBox";
import InputField from "../../../InputField";

interface CheckboxState {
  [key: string]: boolean;
}

const Governance: FC = () => {
  const [division, setDivision] = useState("");
  const options = [
    "Legislation",
    "Statutory requirements",
    "Policies & Procedures",
    "EIA",
    "Accountability",
    "Mandates",
    "Decision making ladder",
  ];

  const [state, setState] = useState<CheckboxState>(
    options.reduce((acc, curr) => ({ ...acc, [curr]: false }), {})
  );

  const handleCheckboxChange =
    (option: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setState((prevState) => ({ ...prevState, [option]: e.target.checked }));
    };

  return (
    <div className="flex flex-col w-full px-10 py-10  space-y-10  ">
      <div className="w-full flex items-center border-b border-b-border py-2">
        <h1 className="text-[20px]">Governance & Reporting</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full  ">
        {options.map((option, index) => (
          <CustomCheckbox
            key={index}
            id={`exampleCheckbox2${index}`}
            label={option}
            checked={state[option]}
            onChange={handleCheckboxChange(option)}
          />
        ))}
      </div>
      <div className="">
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
    </div>
  );
};

export default Governance;
