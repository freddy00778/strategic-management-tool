import InputDropdown from "../InputDropdown";
import InputField from "../InputField";
import Button from "../Button";
import { useState } from "react";
const BudgetForm = () => {
  const [benefit, setBenefit] = useState("");
  const [cost, setCost] = useState("");
  const options = ["Select", "Yes", "No"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <form
      action="submit"
      className="flex flex-col w-full h-full overflow-y-auto max-h-[700px] scrollbar-thin scrollbar-thumb-zinc-200 px-6 py-2 space-y-6"
    >
      <div className="flex w-full items-center space-x-10">
        <InputDropdown
          id="dropdown"
          header="Do we need it?"
          label={`${selectedOption}`}
          options={options}
          onOptionSelected={handleOptionSelected}
          className=" w-full m-0"
        />
        <InputField
          id="user-name"
          label="For How Many People"
          value={benefit}
          onChange={(e) => setBenefit(e.target.value)}
          type="text"
          className="w-full m-0 "
          placeholder="Provide the number"
        />
      </div>
      <div className="flex w-full items-center space-x-10">
        <InputField
          id="user-name"
          label="What do we expect it to cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          type="text"
          className="w-full m-0 "
          placeholder="Provide cost amount"
        />
        <InputField
          id="user-name"
          label="Allocated budget requirement"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          type="number"
          className="w-full m-0 "
          placeholder="Enter your value"
        />
      </div>
      <div className="flex w-full items-center space-x-10 py-6">
        <InputField
          id="user-name"
          label="Allocated Budget"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          type="number"
          className="w-full m-0 "
          placeholder="Enter your value"
        />
        <InputField
          id="user-name"
          label="Actual Spend"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          type="number"
          className="w-full m-0 "
          placeholder="Enter your value"
        />
      </div>
      <div className="flex w-full h-full space-x-20   items-end justify-end">
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

export default BudgetForm;
