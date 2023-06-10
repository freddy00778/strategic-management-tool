import { FC, useState } from "react";
import { Link } from "react-router-dom";
import plus from "../../assets/images/plus.svg";
import del from "../../assets/images/delete.svg";

export interface DropdownOption {
  title: string;
  route: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelectionChange: (options: DropdownOption[]) => void;
}

const BudgetDropdown: FC<DropdownProps> = ({ options, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: DropdownOption) => {
    if (!selectedOptions.find((opt) => opt.title === option.title)) {
      setSelectedOptions((prevOptions) => {
        const newOptions = [...prevOptions, option];
        onSelectionChange(newOptions); // Notify the parent component
        return newOptions;
      });
    }
    setIsOpen(false);
  };

  const handleDelete = (option: DropdownOption) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = prevOptions.filter(
        (opt) => opt.title !== option.title
      );

      if (newOptions.length === 0) {
        onSelectionChange([]); // Notify the parent component with an empty array
      } else {
        onSelectionChange(newOptions); // Notify the parent component with the updated options
      }

      return newOptions;
    });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col w-full h-full text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="flex items-center justify-center w-full  space-x-2 rounded-lg border border-gray-300 shadow-sm px-6 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-300"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <h1 className="w-full">Add Budget Item</h1>

          <img src={plus} alt="" width={20} />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 top-12 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-y-auto max-h-[280px] scrollbar-thin scrollbar-thumb-zinc-200">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className="block px-6 py-3 w-full text-left text-sm text-gray-700 hover:bg-primary-50 hover:text-gray-900"
                role="menuitem"
                disabled={
                  !!selectedOptions.find((opt) => opt.title === option.title)
                }
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="w-full h-full py-4 overflow-y-auto max-h-[300px] scrollbar-none scrollbar-thumb-zinc-200 border-b border-border border-opacity-30">
        {selectedOptions.map((option, index) => (
          <div
            key={index}
            className="mt-6 flex w-full justify-between items-center hover:bg-primary-50 px-2 py-3 rounded-md "
          >
            <Link
              to={option.route}
              className=" hover:text-primary-500 hover:font-medium w-[80%]"
            >
              <h1 className="text-sm">{option.title}</h1>
            </Link>
            <button
              onClick={() => handleDelete(option)}
              className="text-red-500 hover:underline"
            >
              <img src={del} alt="" width={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetDropdown;
