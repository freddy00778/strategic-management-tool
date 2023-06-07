import KeyChangeList from "./KeyChangeList";
import { ObjectiveKCLData } from "../../data/ObjectiveKCLData";
import { Outlet } from "react-router-dom";
const ObjectivesPage = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex w-full py-6 px-6 border-b border-b-border border-opacity-20 items-center ">
        <h1 className="w-1/4 px-6">Key Changes</h1>
        <h1 className="w-3/4 text-primary-500">Objectives</h1>
      </div>
      <div className="flex w-full h-[84%] ">
        <div className="w-1/4 border-r border-r-border border-opacity-20">
          <KeyChangeList data={ObjectiveKCLData} />
        </div>
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ObjectivesPage;
