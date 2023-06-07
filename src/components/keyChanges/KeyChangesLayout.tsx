import { Outlet } from "react-router-dom";
import KeyChangesHeader from "./KeyChangesHeader";
const KeyChangesLayout = () => {
  return (
    <div className="border border-border border-opacity-20  rounded-2xl w-full h-full">
      <div className=" h-[16%]">
        <KeyChangesHeader />
      </div>
      <div className=" h-[84%]">
        <Outlet />
      </div>
    </div>
  );
};

export default KeyChangesLayout;
