import InputField from "../InputField";
import Button from "../Button";

interface BAUProjectProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
const BAUProjects: React.FC<BAUProjectProps> = ({
  date,
  setDate,
  text,
  setText,
}) => {
  return (
    <div className="flex-col w-full h-full space-y-10  overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 max-h-[210px]">
      <div className="flex h-full w-full space-x-8">
        <InputField
          id="change"
          label="Initiative Start Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
        <InputField
          id="change"
          label="Technical Initiative End Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
      </div>
      <InputField
        id="change"
        label="Change Initiative End Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="datepicker"
        className="w-2/4 m-0"
      />
      <h1 className="text-2xl">Project Milestone</h1>
      <div className="flex h-full w-full space-x-8">
        <InputField
          id="change"
          label="Strategic Project Approval"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Provide Details"
          type="text"
          className="w-full m-0"
        />
        <InputField
          id="change"
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
      </div>
      <div className="flex h-full w-full space-x-8">
        <InputField
          id="change"
          label="Project & CM Plan Approved"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Provide Details"
          type="text"
          className="w-full m-0"
        />
        <InputField
          id="change"
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
      </div>
      <div className="flex h-full w-full space-x-8">
        <InputField
          id="change"
          label="Project Launch"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Provide Details"
          type="text"
          className="w-full m-0"
        />
        <InputField
          id="change"
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
      </div>
      <div className="flex h-full w-full space-x-8">
        <InputField
          id="change"
          label="Go-Live Date"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Provide Details"
          type="text"
          className="w-full m-0"
        />
        <InputField
          id="change"
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
      </div>
      <div className="flex h-full w-full space-x-8">
        <InputField
          id="change"
          label="Hand-over Date"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Provide Details"
          type="text"
          className="w-full m-0"
        />
        <InputField
          id="change"
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
      </div>
      <div className="border-b py-2 border-border border-opacity-20">
        <h1>Benefit Realization Phase</h1>
      </div>
      <div className="flex h-full w-full space-x-8">
        <InputField
          id="change"
          label="Start Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
        <InputField
          id="change"
          label="End Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="datepicker"
          className="w-full m-0"
        />
      </div>
      <div className="flex w-full items-center justify-between border-b py-2 border-border border-opacity-20">
        <h1>Benefit</h1>
        <Button
          size="md"
          variant="primary"
          onClick={() => alert("Realization Phase")}
          type="submit"
          className="w-[25%] m-0 bg-primary-500 rounded-lg"
        >
          Add Benefit
        </Button>
      </div>
      <div className="flex h-full w-full space-x-8">
        <InputField
          id="change"
          label="Benefit"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Provide Details"
          type="text"
          className="w-full m-0"
        />
        <div className="flex items-center w-full space-x-6">
          <InputField
            id="change"
            label="Start Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="datepicker"
            className="w-full m-0"
          />
          <InputField
            id="change"
            label="End Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="datepicker"
            className="w-full m-0"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-between border-b py-2 border-border border-opacity-20">
        <h1>Others</h1>
        <Button
          size="md"
          variant="primary"
          onClick={() => alert("Realization Phase")}
          type="submit"
          className="w-[25%] m-0 bg-primary-500 rounded-lg"
        >
          Add
        </Button>
      </div>
      <div className="flex h-full w-full space-x-8">
        <InputField
          id="change"
          label="Key Milestone"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Provide Details"
          type="text"
          className="w-full m-0"
        />
        <div className="flex items-center w-full space-x-6">
          <InputField
            id="change"
            label="Start Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="datepicker"
            className="w-full m-0"
          />
          <InputField
            id="change"
            label="End Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="datepicker"
            className="w-full m-0"
          />
        </div>
      </div>
      <h1 className="text-2xl">Key Project Activities</h1>
      <div className="flex w-full items-center justify-between border-b py-2 border-border border-opacity-20">
        <h1>Key Activity</h1>
        <Button
          size="md"
          variant="primary"
          onClick={() => alert("Realization Phase")}
          type="submit"
          className="w-[25%] m-0 bg-primary-500 rounded-lg"
        >
          Add
        </Button>
      </div>
      <div className="flex h-full w-full space-x-8">
        <InputField
          id="change"
          label="Key Milestone"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Provide Details"
          type="text"
          className="w-full m-0"
        />
        <div className="flex items-center w-full space-x-6">
          <InputField
            id="change"
            label="Start Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="datepicker"
            className="w-full m-0"
          />
          <InputField
            id="change"
            label="End Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="datepicker"
            className="w-full m-0"
          />
        </div>
      </div>
    </div>
  );
};

export default BAUProjects;
