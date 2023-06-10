import { Outlet, useNavigate, useLocation } from "react-router-dom";
import BudgetListGenerator from "./BudgetListGenerator";
import NoBudget from "./NoBudget";
import { useState, useEffect } from "react";

const BudgetLayout = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectionChange = (options: any) => {
    setSelectedOptions(options);
  };

  useEffect(() => {
    if (
      selectedOptions.length === 0 &&
      location.pathname !== "/project/dashboard/budget"
    ) {
      navigate("/project/dashboard/budget");
    }
  }, [selectedOptions, navigate, location]);

  return (
    <div className="w-full h-full space-y-6">
      <div>
        <h1>Budget Requirements</h1>
      </div>
      <div className="border border-border border-opacity-20 rounded-2xl w-full h-[90%]">
        <div className="flex w-full items-center h-[16%] px-10 py-6 border-b border-b-border border-opacity-20">
          <span className="flex w-1/4">Budget List</span>
          <div className="flex w-3/4 items-center justify-between">
            <span className="text-primary-500">Budget Details</span>
            <div className="flex px-6 py-3 border border-border border-opacity-40 rounded-lg items-center justify-center text-sm">
              Total Budget: 4000.00
            </div>
          </div>
        </div>
        <div className="flex h-[84%] w-full">
          <div className="w-1/4 flex flex-col items-center border-r border-border border-opacity-20 px-4">
            <BudgetListGenerator onSelectionChange={handleSelectionChange} />
          </div>
          <div className="w-3/4">
            {location.pathname === "/project/dashboard/budget" && <NoBudget />}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetLayout;
