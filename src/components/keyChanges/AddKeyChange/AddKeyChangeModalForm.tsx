import InputField from "../../InputField";

import Button from "../../Button";
import { DataType } from "../../../../types";

interface AddKeyChangeFormProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  change: string;
  setChange: React.Dispatch<React.SetStateAction<string>>;
  asIs: string;
  setAsIs: React.Dispatch<React.SetStateAction<string>>;
  toBe: string;
  setToBe: React.Dispatch<React.SetStateAction<string>>;
  addData: (newData: DataType) => void;
  onClose: () => void;
}
const AddKeyChangeModalForm: React.FC<AddKeyChangeFormProps> = ({
  title,
  setTitle,
  change,
  setChange,
  asIs,
  setAsIs,
  toBe,
  setToBe,
  onClose,
  addData,
}) => {
  const handleSave = () => {
    addData({
      title: title,
      change: change,
      asIs: asIs,
      toBe: toBe,
    });
    onClose();
  };
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <InputField
          id="change"
          label="Key Change Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter the title of the change"
          required
          className="w-full m-0"
        />
        <InputField
          id="change"
          label="Key Change"
          value={change}
          onChange={(e) => setChange(e.target.value)}
          type="text"
          placeholder="What will change?"
          required
          className="w-full m-0"
        />
      </div>
      <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">
            Only complete this if relevant- What would you like to say to manage
            these expectations?
          </h1>
        </div>
        <h1>
          Complete the sentence “ With regards to we would like to ...(i.e.
          confirm that ... OR point out that ... Mention that ... )
        </h1>
        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            //   label="We will be relying on .... to assist us with the implementing the change successfully"
            value={asIs}
            onChange={(e) => setAsIs(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="Type in your response"
            characterLimit={120}
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">
            Only complete this if relevant- What would you like to say to manage
            these expectations?
          </h1>
        </div>
        <h1>
          Complete the sentence “ With regards to we would like to ...(i.e.
          confirm that ... OR point out that ... Mention that ... )
        </h1>
        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            //   label="We will be relying on .... to assist us with the implementing the change successfully"
            value={toBe}
            onChange={(e) => setToBe(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="Type in your response"
            characterLimit={120}
          />
        </div>
      </div>
      <div className="flex w-full h-[20%] items-end justify-end ">
        <Button
          variant="primary"
          size="lg"
          onClick={handleSave}
          className="rounded-lg w-[30%] mt-6"
          type="button"
        >
          Add A Decision
        </Button>
      </div>
    </div>
  );
};

export default AddKeyChangeModalForm;
