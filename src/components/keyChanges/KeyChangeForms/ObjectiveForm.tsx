import InputField from "../../InputField";
import { useState } from "react";
import Button from "../../Button";
import DisplayValuesComponent from "../../DisplayValuesComponent";
import DynamicFieldSet from "../../DynamicFieldSet";
interface ObjectiveFormProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
interface Benefit {
  benefit: string;
  measure: string;
}
const defaultStructure: Record<
  string,
  | "number"
  | "text"
  | "password"
  | "email"
  | "textarea"
  | "search"
  | "datepicker"
> = {
  content: "text",
  details: "text",
};

const characterLimits: Record<string, number> = {
  content: 120,
};
const defaultBenefit: Benefit = {
  benefit: "How the change adds value",
  measure: "Provide the necessary information",
};

const ObjectiveForm: React.FC<ObjectiveFormProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [displayValues, setDisplayValues] = useState<string[]>([]);
  const [displayValues1, setDisplayValues1] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<Benefit[]>([defaultBenefit]);

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
  const addBenefit = () => {
    setBenefits([...benefits, defaultBenefit]);
  };
  return (
    <form className="flex flex-col w-full h-full overflow-y-auto max-h-[800px] scrollbar-thin scrollbar-thumb-zinc-200">
      <div className="flex flex-col w-full px-10 py-10  space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-0">
          <h1 className="text-[20px]">Objectives of the key change</h1>
        </div>
        <div className="flex flex-col w-full  ">
          <InputField
            id="email"
            label=""
            value={inputValue1}
            onChange={handleInputChange1}
            onEnterPress={handleKeyPress1}
            type="textarea"
            placeholder="What do you want to see?"
            required
            className="w-full h-[200px] "
            characterLimit={120}
          />
          <div className="py-16">
            <DisplayValuesComponent
              displayValues={displayValues1}
              handleDeleteValue={handleDeleteValue1}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 py-4  space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-0">
          <h1 className="text-[20px]">Risk of not implementing the change</h1>
        </div>
        <div className="flex flex-col w-full  ">
          <InputField
            id="email"
            label="(What would happen if this key change is not made?/ What is the worst that can happen/)"
            value={inputValue}
            onChange={handleInputChange}
            onEnterPress={handleKeyPress}
            type="textarea"
            placeholder="Provide the necessary information"
            required
            className="w-full h-[200px] "
            characterLimit={120}
          />
          <div>
            <DisplayValuesComponent
              displayValues={displayValues}
              handleDeleteValue={handleDeleteValue}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 py-4  space-y-16  ">
        <div className="flex w-full items-center justify-between border-b py-2 border-border border-opacity-20">
          <h1>Benefit</h1>
          <Button
            size="md"
            variant="primary"
            onClick={addBenefit}
            type="submit"
            className="w-[25%] m-0 bg-primary-500 rounded-lg"
          >
            Add Benefit
          </Button>
        </div>
        <div className="flex flex-col h-full w-full space-y-8 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200">
          <DynamicFieldSet
            data={benefits}
            setData={setBenefits}
            dataStructure={defaultStructure}
            idBase="benefits"
            labels={{
              content: "Benefits of the change",
              details: "How will the benefit be measured?",
            }}
            placeholders={{
              content: "How the change adds value",
              details: "Provide the necessary information",
            }}
            characterLimits={characterLimits}
          />
        </div>
      </div>

      <div className="flex w-full h-full space-x-20 px-10 py-10 pb-10 items-end justify-end">
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

export default ObjectiveForm;
