import { Outlet } from "react-router-dom";
import KeyChangeList from "../keyChanges/KeyChangeList";
import { IssueKeyChangeListData } from "../../data/IssueKeyChangeListData";
const IssueRegisterLayout = () => {
  return (
    <div className=" w-full h-full space-y-6">
      <div className="">
        <h1>Change Management Issue Summary</h1>
      </div>
      <div className="border border-border border-opacity-20  rounded-2xl w-full h-[90%]">
        <div className=" h-[16%] px-8 space-x-32 py-6 border-b border-b-border border-opacity-20">
          <span>Key Changes</span>
          <span className=" text-primary-500">
            List of Issues per key change
          </span>
        </div>
        <div className="flex h-[84%] w-full">
          <div className="w-1/4 border-r border-border border-opacity-20">
            <KeyChangeList data={IssueKeyChangeListData} text="Key" />
          </div>
          <div className="w-3/4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueRegisterLayout;
