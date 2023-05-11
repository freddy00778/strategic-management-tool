import InputField from "./InputField";
import { useState } from "react";
import InputDropdown from "./InputDropdown";
import DisplayValuesComponent from "./DisplayValuesComponent";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface ProjectInfoFormProps {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ProjectInfoForm: React.FC<ProjectInfoFormProps> = ({ onChange }) => {
  const [category, setCategory] = useState("");
  const [division, setDivision] = useState("");
  const [sponsor, setSponsor] = useState("");
  const [manager, setManager] = useState("");
  const [champion, setChampion] = useState("");
  const [change, setChange] = useState("");
  const [change2, setChange2] = useState("");
  const [initiative, setInitiative] = useState("");
  const [term, setTerm] = useState("");
  const [term1, setTerm1] = useState("");
  const [term2, setTerm2] = useState("");
  const [term3, setTerm3] = useState("");
  const [term4, setTerm4] = useState("");
  const [term5, setTerm5] = useState("");
  const [term6, setTerm6] = useState("");
  const [term7, setTerm7] = useState("");
  const [term8, setTerm8] = useState("");
  const [term9, setTerm9] = useState("");
  const options = [
    "Select",
    "Strategic Change",
    "BAU Change",
    "Annual Corporate Initiative",
  ];
  const options1 = [
    "Select",
    "Strategic Change",
    "Start-Up",
    "Implementation",
    "Anchoring",
    "Benefits",
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [displayValues, setDisplayValues] = useState<string[]>([]);
  const [displayValues1, setDisplayValues1] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const handleKeyPress = (value: string) => {
    setDisplayValues([...displayValues, value]);
    setInputValue("");
  };

  const handleDeleteValue = (index: number) => {
    const newValues = [...displayValues];
    newValues.splice(index, 1);
    setDisplayValues(newValues);
  };

  const handleInputChange1 = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue1(e.target.value);
    onChange?.(e);
  };

  const handleKeyPress1 = (value: string) => {
    setDisplayValues1([...displayValues1, value]);
    setInputValue1("");
  };

  const handleDeleteValue1 = (index: number) => {
    const newValues = [...displayValues1];
    newValues.splice(index, 1);
    setDisplayValues1(newValues);
  };

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };
  const handleOptionSelected1 = (option1: string) => {
    setSelectedOption1(option1);
  };

  const handleSave = () => {
    navigate("/project/dashboard/scope");
  };

  return (
    <form className="flex flex-col w-full h-screen my-10 overflow-y-auto max-h-[10000px] space-y-20 scrollbar-thin scrollbar-thumb-zinc-200">
      <div className="space-y-10">
        <div className="flex w-full space-x-20 px-20 items-center">
          <InputDropdown
            id="dropdown"
            header="Category"
            label={`${selectedOption}`}
            options={options}
            onOptionSelected={handleOptionSelected}
            className=" w-full m-0"
          />
          <InputField
            id="email"
            label="Project Name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Enter the project name"
            required
            className="w-full m-0"
          />
        </div>
        {/* first section */}
        <div className="flex w-full h-full space-x-20 px-20 items-start justify-between">
          <div className="flex flex-col w-2/4 space-y-10 ">
            <InputField
              id="email"
              label="Initiating Division/Department/Unit"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              type="text"
              placeholder="Enter the department name"
              required
              className="w-full m-0"
            />
            <InputField
              id="email"
              label="Project Sponsor"
              value={sponsor}
              onChange={(e) => setSponsor(e.target.value)}
              type="text"
              placeholder="Enter the project sponsor name"
              required
              className="w-full m-0"
            />
            <InputField
              id="email"
              label="Project Manager"
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              type="text"
              placeholder="Enter the project manager name"
              required
              className="w-full m-0"
            />
            <InputField
              id="email"
              label="Project Champion"
              value={champion}
              onChange={(e) => setChampion(e.target.value)}
              type="text"
              placeholder="Enter the project champion name"
              required
              className="w-full m-0"
            />
            <InputField
              id="email"
              label="Change Manager"
              value={change}
              onChange={(e) => setChange(e.target.value)}
              type="text"
              placeholder="Enter the change manager name"
              required
              className="w-full m-0"
            />
            <InputDropdown
              id="dropdown"
              header="Change State of the Initiative"
              label={`${selectedOption1}`}
              options={options1}
              onOptionSelected={handleOptionSelected1}
              className=" w-full m-0"
            />
          </div>
          <div className="flex flex-col w-2/4 h-full space-y-10">
            <InputField
              id="email"
              label="Main Objective of the Initiative"
              value={inputValue}
              onChange={handleInputChange}
              onEnterPress={handleKeyPress}
              type="textarea"
              placeholder="Describe the main objectives"
              required
              className="w-full mb-2"
            />
            <div>
              <DisplayValuesComponent
                displayValues={displayValues}
                handleDeleteValue={handleDeleteValue}
              />
            </div>

            <InputField
              id="user-name"
              label="Initiative Date"
              value={initiative}
              onChange={(e) => setInitiative(e.target.value)}
              type="datepicker"
              className="w-full"
            />
            <InputField
              id="user-name"
              label="Technical Initiative End Date"
              value={initiative}
              onChange={(e) => setInitiative(e.target.value)}
              type="datepicker"
              className="w-full"
            />
            <InputField
              id="user-name"
              label="Change Initiative End Date"
              value={initiative}
              onChange={(e) => setInitiative(e.target.value)}
              type="datepicker"
              className="w-full"
            />
            <InputField
              id="user-name"
              label="Final Benefits Realization Date"
              value={initiative}
              onChange={(e) => setInitiative(e.target.value)}
              type="datepicker"
              className="w-full"
            />
          </div>
        </div>
        {/* end of first section */}
      </div>
      <div className="space-y-10">
        <div className="flex flex-col w-full px-20  space-y-16   ">
          <div className="w-full flex items-center border-b border-b-border py-4">
            <h1 className="text-[22px] text-black">
              What do you want to change? Describe the Change
            </h1>
          </div>
          <div className="flex flex-col w-full space-y-24">
            <InputField
              id="user-name"
              label="The IT Department wants to :"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="Provide the necessary information"
            />
            <InputField
              id="user-name"
              label="Why the change?"
              value={change2}
              onChange={(e) => setChange2(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="Provide the necessary information"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
          <div className="w-full flex items-center border-b border-b-border py-4">
            <h1 className="text-[22px] text-black">
              Forces driving the change
            </h1>
          </div>
          <div className="flex flex-col w-full space-y-24">
            <InputField
              id="user-name"
              label="What factors are/will motivate, drive and /or support the reason to make the change :"
              value={term1}
              onChange={(e) => setTerm1(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="Provide the necessary information"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
          <div className="w-full flex items-center border-b border-b-border py-4">
            <h1 className="text-[22px] text-black">
              Forces restraining the change
            </h1>
          </div>
          <div className="flex flex-col w-full space-y-24">
            <InputField
              id="user-name"
              label="What factors are/will prevent, oppose and/or block this change from happening :"
              value={term2}
              onChange={(e) => setTerm2(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="Provide the necessary information"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-20 py-10  space-y-16  ">
          <div className="w-full flex items-center border-b border-b-border py-4">
            <h1 className="text-[24px] text-[#000] font-semibold">Scope</h1>
          </div>
          <div className="flex flex-col w-full space-y-24">
            <InputField
              id="email"
              label="List the activities that are in scope :"
              value={inputValue1}
              onChange={handleInputChange1}
              onEnterPress={handleKeyPress1}
              type="textarea"
              placeholder="List the activities"
              required
              className="w-full h-[200px] "
            />
            <div>
              <DisplayValuesComponent
                displayValues={displayValues1}
                handleDeleteValue={handleDeleteValue1}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
          <div className="w-full flex items-center border-b border-b-border py-4">
            <h1 className="text-[22px] text-black">
              When will the change be implemented?
            </h1>
          </div>
          <div className="flex flex-col w-full space-y-24">
            <InputField
              id="user-name"
              label="The Type Name will be implemented on"
              value={term2}
              onChange={(e) => setTerm2(e.target.value)}
              type="datepicker"
              className="w-[600px] "
              placeholder="Provide the necessary information"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
          <div className="w-full flex items-center border-b border-b-border py-4">
            <h1 className="text-[22px] text-black">
              Who will be impacted by the change?
            </h1>
          </div>
          <div className="flex flex-col w-full space-y-24">
            <InputField
              id="user-name"
              label="Type the name of the stakeholders/stakeholder group that will be affected by the change :"
              value={term3}
              onChange={(e) => setTerm3(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="The change will impact"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
          <div className="w-full flex items-center border-b border-b-border py-4">
            <h1 className="text-[22px] text-black">
              Who will help and/or be consulted?
            </h1>
          </div>
          <h1>
            Type the name of the stakeholders/stakeholder groups that will
            assist or be consulted to prepare for, and implement the change.
          </h1>
          <div className="flex flex-col w-full space-y-24">
            <InputField
              id="user-name"
              label="We will be relying on .... to assist us with the implementing the change successfully"
              value={term4}
              onChange={(e) => setTerm4(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="Enter the name of the engineers, accountants and contractors"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
          <div className="w-full flex items-center border-b border-b-border py-4">
            <h1 className="text-[22px] text-black">
              What area of work, behavior, business will be most affected(be
              different or changed) by the change?
            </h1>
          </div>

          <div className="flex flex-col w-full space-y-24">
            <InputField
              id="user-name"
              label="The biggest effect of the change will be on :"
              value={term5}
              onChange={(e) => setTerm5(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="Type your answer"
            />
          </div>
        </div>
        <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
          <div className="w-full flex items-center border-b border-b-border py-4">
            <h1 className="text-[22px] text-black">How will it be done?</h1>
          </div>
          <h1>4 High level actions in the plan to implement the change</h1>
          <div className="flex flex-col w-full space-y-24">
            <InputField
              id="user-name"
              label="1st step in the High Level plan. Complete the sentence: “We will start ...”"
              value={term6}
              onChange={(e) => setTerm6(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="Type in your response"
            />
            <InputField
              id="user-name"
              label="2nd step in the High Level plan. Complete the sentence: “The second ...”"
              value={term7}
              onChange={(e) => setTerm7(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="Type in your response"
            />
            <InputField
              id="user-name"
              label="3rd step in the High Level plan. Complete the sentence: “This will be ...”"
              value={term8}
              onChange={(e) => setTerm8(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="Type in your response"
            />
            <InputField
              id="user-name"
              label="4th step in the High Level plan. Complete the sentence: “Finally, we ...”"
              value={term9}
              onChange={(e) => setTerm9(e.target.value)}
              type="textarea"
              className="w-full h-[200px] "
              placeholder="Type in your response"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full h-full space-x-20 px-20 pb-10 items-end justify-end">
        <Button
          variant="primary"
          size="lg"
          onClick={handleSave}
          className="rounded-lg w-[40%]"
          type="button"
        >
          Save & Continue
        </Button>
      </div>
    </form>
  );
};

export default ProjectInfoForm;
