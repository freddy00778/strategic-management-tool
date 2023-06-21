import InputDropdown from "../../InputDropdown";
import { useState } from "react";
import Button from "../../Button";
const PriorityForm = () => {
  const options = ["Select", "Major", "Significant"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <form
      action="submit"
      className="flex flex-col w-full h-full px-10  overflow-y-auto max-h-[700px] scrollbar-thin scrollbar-thumb-zinc-200"
    >
      <div className="w-2/4">
        <InputDropdown
          id="dropdown"
          header="Key Change Prioritisation"
          label={`${selectedOption}`}
          options={options}
          onOptionSelected={handleOptionSelected}
          className=" w-full m-0"
        />
      </div>
      <div className="flex w-full h-full space-x-20 px-10  items-end justify-end">
        <Button
          variant="primary"
          size="lg"
          onClick={() => alert("Objective Saved")}
          className="rounded-lg w-[40%] bg-primary-500"
          type="button"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default PriorityForm;
