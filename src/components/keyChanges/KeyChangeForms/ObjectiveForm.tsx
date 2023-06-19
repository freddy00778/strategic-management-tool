import InputField from "../../InputField";
import { useState } from "react";
import Button from "../../Button";
import DisplayValuesComponent from "../../DisplayValuesComponent";

interface ObjectiveFormProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ObjectiveForm: React.FC<ObjectiveFormProps> = ({ onChange }) => {
  const [benefit, setBenefit] = useState("");
  const [measure, setMeasure] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [displayValues, setDisplayValues] = useState<string[]>([]);
  const [displayValues1, setDisplayValues1] = useState<string[]>([]);

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
      <div className="flex flex-col w-full px-10 py-4 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">Benefits of the change</h1>
        </div>
        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            value={benefit}
            onChange={(e) => setBenefit(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="How the change adds value"
            characterLimit={120}
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-10 py-10 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">
            How will the benefit be measured?
          </h1>
        </div>
        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            value={measure}
            onChange={(e) => setMeasure(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="Provide the necessary information"
            characterLimit={120}
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
