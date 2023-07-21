import { RiskImpactData } from "../../data/RiskImpactData";
import KeyChangeList from "./KeyChangeList";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import RiskImpactForm from "./KeyChangeForms/RiskImpactForm";
import InputField from "../InputField";
import DisplayValuesComponent from "../DisplayValuesComponent";
import Button from "../Button";
interface RiskPageProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const RiskPage: React.FC<RiskPageProps> = ({ onChange }) => {
  const [displayValues1, setDisplayValues1] = useState<string[]>([]);
  const [displayValues2, setDisplayValues2] = useState<string[]>([]);
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const tabIsActive = (tabValue: string): boolean => activeTab === tabValue;

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
    <div className="w-full h-full flex flex-col ">
      <div className="flex w-full h-[84%] ">
        <div className="w-1/4 border-r border-r-border border-opacity-20">
          <div className="border-b border-border border-opacity-20">
            <h1 className="w-full px-12 py-4">Key Changes</h1>
          </div>
          <KeyChangeList data={RiskImpactData} />
        </div>
        <div className="w-3/4">
          <Tabs.Root
            className="flex-col items-center w-full"
            onValueChange={(value) => setActiveTab(value as string)}
            defaultValue="tab1"
          >
            <Tabs.List className="flex items-center w-full py-2 px-8 spacing-x-6 border-b border-border border-opacity-20">
              <Tabs.Trigger value="tab1" className="pr-28">
                <h1
                  className={
                    tabIsActive("tab1")
                      ? "text-primary-500 bg-primary-50 px-6 py-2 rounded-md"
                      : "text-primary-500"
                  }
                >
                  Obstacles
                </h1>
              </Tabs.Trigger>

              <Tabs.Trigger value="tab2" className="pr-28">
                <h1
                  className={
                    tabIsActive("tab2")
                      ? "text-primary-500 bg-primary-50 px-6 py-2 rounded-md"
                      : "text-primary-500"
                  }
                >
                  Levers
                </h1>
              </Tabs.Trigger>
              <Tabs.Trigger value="tab3">
                <h1
                  className={
                    tabIsActive("tab3")
                      ? "text-primary-500 bg-primary-50 px-6 py-2 rounded-md"
                      : "text-primary-500"
                  }
                >
                  Risk Rating
                </h1>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <div className="flex flex-col w-full px-10 py-10  space-y-6  overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-zinc-200">
                <div className="w-full flex items-center border-b border-b-border py-0">
                  <h1 className="text-[20px]">Barriers /Obstacles</h1>
                </div>
                <div className="flex flex-col w-full">
                  <InputField
                    id="email"
                    label=""
                    value={inputValue1}
                    onChange={handleInputChange1}
                    onEnterPress={handleKeyPress1}
                    type="textarea"
                    placeholder="What barriers or obstacles do you foresee?"
                    required
                    className="w-full  "
                    characterLimit={120}
                  />
                  <div className="mt-4">
                    <DisplayValuesComponent
                      displayValues={displayValues1}
                      handleDeleteValue={handleDeleteValue1}
                    />
                  </div>
                </div>
                <div className="flex w-full h-full space-x-20   items-end justify-end">
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
              </div>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <div className="flex flex-col w-full px-10 py-10  space-y-16 overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-zinc-200 ">
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
                    className="w-full"
                    characterLimit={120}
                  />
                  <div className="mt-6">
                    <DisplayValuesComponent
                      displayValues={displayValues2}
                      handleDeleteValue={handleDeleteValue2}
                    />
                  </div>
                </div>
                <div className="flex w-full h-full space-x-20  items-end justify-end">
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
              </div>
            </Tabs.Content>
            <Tabs.Content value="tab3">
              <RiskImpactForm />
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default RiskPage;
