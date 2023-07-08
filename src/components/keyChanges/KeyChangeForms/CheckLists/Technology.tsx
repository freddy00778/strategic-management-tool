import { ChangeEvent, FC, useState } from "react";
import { CustomCheckbox } from "../../../CustomCheckBox";
import Button from "../../../Button";
import DynamicFieldSet from "../../../DynamicFieldSet";
import CustomModal from "../../../CustomModal";
import cancel from "../../../../assets/images/cancel.svg";
import InputField from "../../../InputField";
interface CheckboxState {
  [key: string]: boolean;
}

interface Division {
  text: string;
}

const defaultStructure: Record<
  string,
  | "number"
  | "text"
  | "password"
  | "email"
  | "textarea"
  | "search"
  | "datepicker"
> = {
  content: "text",
};

const characterLimits: Record<string, number> = {
  content: 120,
};
const defaultDivision: Division = {
  text: "How the change adds value",
};

const Technology: FC = () => {
  const [sponsor, setSponsor] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [divisions, setDivisions] = useState<Division[]>([defaultDivision]);
  const options = [
    "Availability",
    "User Friendliness",
    "Complexity",
    "Compatibility",
    "Data requirements",
    "Time",
    "Competencies",
    "Hardware requirements",
    "Software requirements",
    "Installation maintenance",
  ];

  const [state, setState] = useState<CheckboxState>(
    options.reduce((acc, curr) => ({ ...acc, [curr]: false }), {})
  );

  const handleCheckboxChange =
    (option: string) => (e: ChangeEvent<HTMLInputElement>) => {
      // If checkbox is checked
      if (e.target.checked) {
        setState((prevState) => ({ ...prevState, [option]: true })); // Check the checkbox
        setSelectedOption(option); // Set the selected option
        setIsModalOpen(true); // Open the modal
      } else {
        setState((prevState) => ({ ...prevState, [option]: false })); // Uncheck the checkbox
      }
    };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addDivision = () => {
    setDivisions([...divisions, defaultDivision]);
  };
  return (
    <div className="flex flex-col w-full px-10 py-10  space-y-10  ">
      <div className="w-full flex items-center border-b border-b-border py-2">
        <h1 className="text-[20px]">Technology</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full cursor-pointer ">
        {options.map((option, index) => (
          <CustomCheckbox
            key={index}
            id={`exampleCheckbox${index}`}
            label={option}
            checked={state[option]}
            onChange={handleCheckboxChange(option)}
          />
        ))}
      </div>

      <div>
        <CustomModal
          isOpen={isModalOpen}
          size="md"
          onClose={closeModal}
          cancel={cancel}
        >
          <h1 className=" text-primary-500">Add Reason</h1>
          <div className="py-8 space-y-4">
            <InputField
              id="email"
              label="Reason"
              value={sponsor}
              onChange={(e) => setSponsor(e.target.value)}
              type="text"
              placeholder="Enter the reason for selecting the impact"
              required
              className="w-full m-0"
            />
            <div className="flex flex-col w-full  py-4  space-y-6  ">
              <div className="flex w-full items-center justify-between border-b py-2 border-border border-opacity-20">
                <h1>Division/Department/Unit</h1>
                <Button
                  size="md"
                  variant="primary"
                  onClick={addDivision}
                  type="submit"
                  className="w-[25%] m-0 bg-primary-500 rounded-lg"
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-col h-full w-full space-y-8 max-h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200">
                <DynamicFieldSet
                  data={divisions}
                  setData={setDivisions}
                  dataStructure={defaultStructure}
                  idBase="benefits"
                  labels={{
                    content: "Division/Department/Unit",
                  }}
                  placeholders={{
                    content: "Enter the department name",
                  }}
                  characterLimits={characterLimits}
                  width={20}
                />
              </div>
            </div>
            <div className="flex items-center w-full justify-end">
              <Button
                size="md"
                variant="primary"
                onClick={closeModal}
                type="submit"
                className="w-[50%] m-0 bg-primary-500 rounded-lg"
              >
                Save
              </Button>
            </div>
          </div>
        </CustomModal>
      </div>
    </div>
  );
};

export default Technology;
