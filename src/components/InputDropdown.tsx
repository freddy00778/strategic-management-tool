import React, { useState } from "react";
import drop from "../assets/images/dropdown.svg";

interface DropdownProps {
  label: string;
  options: string[];
  onOptionSelected: (option: string) => void;
  id: string;
  header?: string;
  className?: string;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
}

const InputDropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onOptionSelected,
  id,
  header,
  className,
  fontSize,
  color,
  fontWeight,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
    onOptionSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block w-full text-left my-6 ${className}`}>
      <div className="w-full flex flex-col">
        <label
          htmlFor={id}
          className="block text-black font-book mb-4 text-sm"
          style={{
            fontSize: `${fontSize}px`,
            color: `${color}`,
            fontWeight: `${fontWeight}`,
          }}
        >
          {header}
        </label>
        <button
          type="button"
          className={`flex justify-between w-full items-center rounded-xl border border-border border-stroke shadow-sm px-4 py-5 bg-white text-sm font-book text-placeholder  hover:bg-gray-50 focus:outline-none ${className}`}
          onClick={handleToggle}
        >
          {selectedOption}
          <img src={drop} alt="Toggle Dropdown" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute z-10 right-0 mt-2 w-full py-4 px-4 rounded-xl shadow-lg bg-white ring-1 ring-primary-200 ring-opacity-40 overflow-y-auto max-h-[280px] scrollbar-thin scrollbar-thumb-zinc-200">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                className={`block px-4 py-4 mb-4 text-sm text-placeholder hover:bg-primary-50 rounded-lg w-full text-left ${
                  option === selectedOption
                    ? "bg-primary-50 bg-opacity-50 text-placeholder"
                    : ""
                }`}
                role="menuitem"
                onClick={() => handleOptionSelected(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
