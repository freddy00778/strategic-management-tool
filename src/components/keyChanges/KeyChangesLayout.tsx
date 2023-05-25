import { Outlet } from "react-router-dom";
import KeyChangesHeader from "./KeyChangesHeader";
const KeyChangesLayout = () => {
  return (
    <div className="border border-border border-opacity-20 space-y-6 rounded-2xl w-full h-full">
      <KeyChangesHeader />
      <Outlet />
    </div>
  );
};

export default KeyChangesLayout;
