import KeyChangeList from "./KeyChangeList";
import { StakeholderData } from "../../data/StakeholdersData";
import * as Tabs from "@radix-ui/react-tabs";
import StakeholderForm from "./KeyChangeForms/StakeholderForm";
import ChangeDriverForm from "./KeyChangeForms/ChangeDriverForm";
import { useState } from "react";

const StakeholdersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const tabIsActive = (tabValue: string): boolean => activeTab === tabValue;

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex w-full h-[84%] ">
        <div className="w-1/4 border-r border-r-border border-opacity-20">
          <div className="border-b border-border border-opacity-20">
            <h1 className="w-full px-12 py-4">Key Changes</h1>
          </div>
          <KeyChangeList data={StakeholderData} />
        </div>
        <div className="w-3/4">
          <Tabs.Root
            className="flex-col items-center w-full"
            onValueChange={(value) => setActiveTab(value as string)}
            defaultValue="tab1"
          >
            <Tabs.List className="flex items-center w-full py-2 px-8 border-b border-border border-opacity-20">
              <Tabs.Trigger value="tab1" className="pr-28">
                <h1
                  className={
                    tabIsActive("tab1")
                      ? "text-primary-500 bg-primary-50 px-6 py-2 rounded-md"
                      : "text-primary-500"
                  }
                >
                  Change Drivers
                </h1>
              </Tabs.Trigger>

              <Tabs.Trigger value="tab2">
                <h1
                  className={
                    tabIsActive("tab2")
                      ? "text-primary-500 bg-primary-50 px-6 py-2 rounded-md"
                      : "text-primary-500"
                  }
                >
                  Affected Stakeholders
                </h1>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <ChangeDriverForm />
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <StakeholderForm />
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default StakeholdersPage;
