import KeyChangeList from "./KeyChangeList";
import { Outlet } from "react-router-dom";
import { StakeholderData } from "../../data/StakeholdersData";

const StakeholdersPage = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex w-full py-6 px-6 border-b border-b-border border-opacity-20 items-center ">
        <h1 className="w-1/4 px-6">Key Changes</h1>
        <div className="flex items-center w-3/4 spacing-x-8">
          <h1 className="text-primary-500">Change Drivers</h1>
          <h1 className=" text-primary-500">Affected Stakeholders</h1>
        </div>
      </div>
      <div className="flex w-full h-[84%] ">
        <div className="w-1/4 border-r border-r-border border-opacity-20">
          <KeyChangeList data={StakeholderData} />
        </div>
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StakeholdersPage;
