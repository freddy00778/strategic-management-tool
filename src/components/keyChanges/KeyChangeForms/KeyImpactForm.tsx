import { useState } from "react";
import InputField from "../../InputField";
import DisplayValuesComponent from "../../DisplayValuesComponent";
import Button from "../../Button";

interface KeyImpactFormProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const KeyImpactForm: React.FC<KeyImpactFormProps> = ({ onChange }) => {
  const [division, setDivision] = useState("");
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
  return (
    <form
      action="submit"
      className="flex flex-col w-full h-full py-10 overflow-y-auto max-h-[700px] scrollbar-thin scrollbar-thumb-zinc-200"
    >
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
      <div className="flex flex-col w-full px-10 py-10  space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-0">
          <h1 className="text-[20px]">
            Who is the Responsible Senior Stakeholder to manage benefit/make
            decisions
          </h1>
        </div>
        <div className="flex flex-col w-full  ">
          <InputField
            id="email"
            label="(Who in business is responsible for this area/ ensuring that the benefit is realized/ has to
approve the change?)"
            value={inputValue}
            onChange={handleInputChange}
            onEnterPress={handleKeyPress}
            type="textarea"
            placeholder="Provide the necessary information"
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

export default KeyImpactForm;
