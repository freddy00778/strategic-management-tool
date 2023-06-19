import * as Tabs from "@radix-ui/react-tabs";
import RadioButton from "../RadioButton";
import { useState } from "react";
import StrategicProjects from "./StrategicProjects";
import BAUProjects from "./BAUProjects";
import AnnualCorporate from "./AnnualCorporate";
import TechnicalChange from "./TechnicalChange";

interface KeyDatesProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const KeyDatesLayout: React.FC<KeyDatesProps> = ({
  date,
  setDate,
  text,
  setText,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>("option1");
  return (
    <div className="w-full h-full  flex flex-col">
      <h1 className="text-2xl">What type of project is this?</h1>
      <Tabs.Root className="w-full h-full flex-col">
        <Tabs.List className="flex  flex-wrap  gap-8 border-b border-border border-opacity-20 py-4">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            <RadioButton
              title="Strategic Projects"
              name="walletAmount"
              value="option1"
              selected={selectedValue === "option1"}
              onChange={(value) => setSelectedValue(value)}
              className="flex w-full"
            />
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            <RadioButton
              title="BAU Projects"
              name="walletAmount"
              value="option2"
              selected={selectedValue === "option2"}
              onChange={(value) => setSelectedValue(value)}
              className="flex w-full"
            />
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab3">
            <RadioButton
              title="Annual Corporate Initiative"
              name="walletAmount"
              value="option3"
              selected={selectedValue === "option3"}
              onChange={(value) => setSelectedValue(value)}
              className="flex w-full"
            />
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab4">
            <RadioButton
              title="Technical Change Projects"
              name="walletAmount"
              value="option4"
              selected={selectedValue === "option4"}
              onChange={(value) => setSelectedValue(value)}
              className="flex w-full"
            />
          </Tabs.Trigger>
        </Tabs.List>
        <div className="flex-col w-full ">
          <Tabs.Content value="tab1" className="w-full h-full flex-col   py-4">
            <StrategicProjects
              date={date}
              setDate={setDate}
              text={text}
              setText={setText}
            />
          </Tabs.Content>
          <Tabs.Content
            value="tab2"
            className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 py-4"
          >
            <BAUProjects />
          </Tabs.Content>
          <Tabs.Content
            value="tab3"
            className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 py-4"
          >
            <AnnualCorporate />
          </Tabs.Content>
          <Tabs.Content
            value="tab4"
            className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 py-4"
          >
            <TechnicalChange />
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
};

export default KeyDatesLayout;
