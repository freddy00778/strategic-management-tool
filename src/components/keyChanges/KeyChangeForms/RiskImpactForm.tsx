import InputDropdown from "../../InputDropdown";
import InputField from "../../InputField";
import DisplayValuesComponent from "../../DisplayValuesComponent";
import { useState } from "react";
import Button from "../../Button";

interface RiskImpactFormProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const RiskImpactForm: React.FC<RiskImpactFormProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [displayValues, setDisplayValues] = useState<string[]>([]);
  const options1 = ["Select", "High Risk", "Significant Risk", "Moderate Risk"];
  const options2 = [
    "Select",
    "Severe Impact",
    "Significant Impact",
    "Moderate Impact",
    "Minor Impact",
    "Negligible Impact",
  ];
  const options = ["Select", "Key Change 1", "Key Change 2", "Key Change 3"];
  const options3 = [
    "Select",
    "Very Likely",
    "Likely",
    "Possible",
    "Unlikely",
    "Very Unlikely",
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOption1, setSelectedOption1] = useState(options[0]);
  const [selectedOption2, setSelectedOption2] = useState(options[0]);
  const [selectedOption3, setSelectedOption3] = useState(options[0]);
  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
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
  return (
    <form
      action="submit"
      className="flex flex-col w-full h-full px-10  overflow-y-auto max-h-[700px] scrollbar-thin scrollbar-thumb-zinc-200"
    >
      <div className="flex items-center w-full justify-between">
        <h1 className="w-3/4">Select Key Change Risk</h1>
        <InputDropdown
          id="dropdown"
          label={`${selectedOption}`}
          options={options}
          onOptionSelected={handleOptionSelected}
          className=" w-1/4 m-0"
        />
      </div>
      <InputDropdown
        id="dropdown"
        header="Risk Category"
        label={`${selectedOption1}`}
        options={options1}
        onOptionSelected={handleOptionSelected1}
        className=" w-full m-0"
      />
      <InputDropdown
        id="dropdown"
        header="How severe is the risk?"
        label={`${selectedOption2}`}
        options={options2}
        onOptionSelected={handleOptionSelected2}
        className=" w-full m-0"
      />
      <InputDropdown
        id="dropdown"
        header="What is the likelihood or Probability that the risk may happen?"
        label={`${selectedOption3}`}
        options={options3}
        onOptionSelected={handleOptionSelected3}
        className=" w-full m-0"
      />
      <div className="flex flex-col w-full  py-10  space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-0">
          <h1 className="text-[20px]">
            Is there a risk associated with this Key Change?
          </h1>
        </div>
        <div className="flex flex-col w-full  ">
          <InputField
            id="email"
            label="(Risk that need a mitigation plan or needs to be monitored)"
            value={inputValue}
            onChange={handleInputChange}
            onEnterPress={handleKeyPress}
            type="textarea"
            placeholder="Describe the risk briefly"
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

export default RiskImpactForm;
