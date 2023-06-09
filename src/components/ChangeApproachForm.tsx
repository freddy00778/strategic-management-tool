import { useState } from "react";
import RadioButton from "./RadioButton";
import ChangeReadiness from "../assets/images/change-readiness.svg";
import GearAnalysis from "../assets/images/gear-analysis.svg";
import InputField from "./InputField";
import Table from "./Table";
import AddButton from "./AddButton";

interface DataType {
  [key: string]: string | number | React.ReactNode;
}

const ChangeApproachForm = () => {
  const [data, setData] = useState<DataType[]>([
    {
      Title: "Gear Choice",
      "Strategic Change Planning": 4,
      "Change Planning": 3,
      Implementation: 1,
    },
    {
      Title: (
        <p>
          Reason for final <br /> choice of gear
        </p>
      ),
      "Strategic Change Planning": <AddButton />,
      "Change Planning": <AddButton />,
      Implementation: <AddButton />,
    },
  ]);
  const [startUp, setStartUp] = useState("");
  const [implement, setImplement] = useState("");
  const [anchor, setAnchor] = useState("");
  const [selectedValue, setSelectedValue] = useState<string | null>("option1");
  const [selectedValue1, setSelectedValue1] = useState<string | null>(
    "optionA"
  );
  const addData = (newData: DataType) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <form className="flex flex-col px-16 py-12 h-screen overflow-y-auto max-h-[10000px]  scrollbar-thin scrollbar-thumb-zinc-200">
      <h1 className="text-[26px] py-6">What type of change is this?</h1>
      <div className="flex w-full space-x-32">
        <RadioButton
          content="Change occurs over a period of time in incremental stages. Lots of small changes as a business operates and develops."
          title="Incremental Change"
          name="walletAmount"
          value="option1"
          selected={selectedValue === "option1"}
          onChange={(value) => setSelectedValue(value)}
          className="flex w-full"
        />
        <RadioButton
          content={
            "Occurs rapidly. Dramatic or radical change in one fell swoop. Major alteration to the business. High Risk, but essential. "
          }
          title="Step Change"
          name="walletAmount"
          value="option2"
          selected={selectedValue === "option2"}
          onChange={(value) => setSelectedValue(value)}
          className="flex w-full"
        />
      </div>
      <div className="py-12">
        <h1 className="text-[26px] py-6">Complexity of Change (Select)</h1>
        <div className="flex w-full space-x-12">
          <RadioButton
            content={
              <ul className="flex flex-col space-y-3 mt-2">
                <li>Sense</li>
                <li>Categorize</li>
                <li>Response</li>
                <li className="text-[#01A386] font-medium">Best Practice</li>
              </ul>
            }
            title="Simple"
            name="walletAmount"
            value="optionD"
            selected={selectedValue1 === "optionD"}
            onChange={(value) => setSelectedValue1(value)}
            className="flex w-full "
          />
          <RadioButton
            content={
              <ul className="flex flex-col space-y-3 mt-2">
                <li>Probe</li>
                <li>Sense</li>
                <li>Response</li>
                <li className="text-[#01A386] font-medium">Emergent</li>
              </ul>
            }
            title="Complex"
            name="walletAmount"
            value="optionA"
            selected={selectedValue1 === "optionA"}
            onChange={(value) => setSelectedValue1(value)}
            className="flex w-full "
          />
          <RadioButton
            content={
              <ul className="flex flex-col space-y-3 mt-2">
                <li>Sense</li>
                <li>Analyze</li>
                <li>Response</li>
                <li className="text-[#01A386] font-medium">Good Practice</li>
              </ul>
            }
            title="Complicated"
            name="walletAmount"
            value="optionB"
            selected={selectedValue1 === "optionB"}
            onChange={(value) => setSelectedValue1(value)}
            className="flex w-full"
          />
          <RadioButton
            content={
              <ul className="flex flex-col space-y-3 mt-2">
                <li>Act</li>
                <li>Sense</li>
                <li>Response</li>
                <li className="text-[#01A386] font-medium">Novel</li>
              </ul>
            }
            title="Chaotic"
            name="walletAmount"
            value="optionC"
            selected={selectedValue1 === "optionC"}
            onChange={(value) => setSelectedValue1(value)}
            className="flex w-full"
          />
        </div>
      </div>
      <div className="py-8">
        <h1 className="text-[26px] py-6">Change Readiness Calculation</h1>
        <div className="w-full mt-4">
          <img src={ChangeReadiness} alt="" />
        </div>
      </div>
      <div className="py-8 w-full">
        <h1 className="text-[26px] py-6">Change Readiness</h1>
        <form action="submit" className="w-full space-y-10 ">
          <div className="flex items-center justify-between w-full space-x-10">
            <InputField
              id="text"
              label="Start-Up"
              value={startUp}
              onChange={(e) => setStartUp(e.target.value)}
              type="text"
              placeholder="Provide Details"
              required
              className="w-full m-0 "
            />
            <InputField
              id="text"
              label="Implementation"
              value={implement}
              onChange={(e) => setImplement(e.target.value)}
              type="text"
              placeholder="Provide Details"
              required
              className="w-full m-0"
            />
          </div>
          <div className="mt-8">
            <InputField
              id="text"
              label="Anchoring"
              value={anchor}
              onChange={(e) => setAnchor(e.target.value)}
              type="text"
              placeholder="Provide Details"
              required
              className="w-2/4 m-0 "
            />
          </div>
        </form>
      </div>
      <div className="py-8">
        <h1 className="text-[26px] py-6">Start-Up Change Gear Analysis</h1>
        <div className="w-full mt-4 h-full">
          <img src={GearAnalysis} alt="" />
        </div>
      </div>
      <div className="py-8">
        <Table
          headings={[
            "Title",
            "Strategic Change Planning",
            "Change Planning",
            "Implementation",
          ]}
          data={data}
          addData={addData}
          className="h-[500px]"
        />
      </div>
    </form>
  );
};

export default ChangeApproachForm;
