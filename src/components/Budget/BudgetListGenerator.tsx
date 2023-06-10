import BudgetDropdown from "./BudgetDropdown";
import { BudgetListData } from "../../data/BudgetListData";
import { DropdownOption } from "./BudgetDropdown";

interface BudgetListGeneratorProps {
  onSelectionChange: (options: DropdownOption[]) => void;
}

const BudgetListGenerator: React.FC<BudgetListGeneratorProps> = ({
  onSelectionChange,
}) => {
  return (
    <div className="flex flex-col w-full h-full items-center py-4 ">
      <BudgetDropdown
        options={BudgetListData}
        onSelectionChange={onSelectionChange}
      />
    </div>
  );
};

export default BudgetListGenerator;
