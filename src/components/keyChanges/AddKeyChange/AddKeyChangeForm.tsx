import { useState } from "react";
import KeyChangeModal from "./KeyChangeModal";
import { DataType } from "../../../../types";
import dots from "../../../assets/images/dots.svg";
import view from "../../../assets/images/view.svg";
import edit from "../../../assets/images/edit.svg";
import trash from "../../../assets/images/delete.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface AddKeyChangeFormProps {
  isOpen: boolean;
  onClose: () => void;
  addData: (newData: DataType) => void;
}

const AddKeyChangeForm: React.FC<AddKeyChangeFormProps> = ({
  isOpen,
  onClose,
  addData,
}) => {
  const [title, setTitle] = useState("");
  const [change, setChange] = useState("");
  const [asIs, setAsIs] = useState("");
  const [toBe, setToBe] = useState("");
  const [dataEntries, setDataEntries] = useState<DataType[]>([]);

  const handleAddData = () => {
    const newData: DataType = {
      title,
      change,
      asIs,
      toBe,
    };
    addData(newData);
    setDataEntries((prevDataEntries) => [...prevDataEntries, newData]);
    setTitle("");
    setChange("");
    setAsIs("");
    setToBe("");
  };

  return (
    <div className=" h-full w-full max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 ">
      <KeyChangeModal
        isOpen={isOpen}
        title={title}
        setTitle={setTitle}
        change={change}
        setChange={setChange}
        asIs={asIs}
        setAsIs={setAsIs}
        toBe={toBe}
        setToBe={setToBe}
        onClose={onClose}
        addData={handleAddData}
        className=" absolute" // Call the handleAddData function
      />
      <div className="flex flex-wrap gap-7  py-2  ">
        {dataEntries.map((entry, index) => (
          <div
            key={index}
            className=" shadow-md w-64 py-4 px-4 rounded-lg space-y-2"
          >
            <div className="flex w-full items-center justify-between py-2">
              <h1 className=" text-lg">{entry.title}</h1>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="border border-border px-1 py-1 rounded-md">
                    <img src={dots} alt="" />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className=" shadow-md bg-white  space-y-3 px-2 py-4 rounded-lg"
                    sideOffset={5}
                  >
                    <DropdownMenu.Item className="flex items-center justify-between space-x-6 py-1 px-2 hover:bg-primary-50 hover:text-primary-500 hover: rounded cursor-pointer">
                      <img src={view} alt="" width={16} />
                      <h1 className=" text-sm">View</h1>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex items-center justify-between space-x-2 py-1 px-2 hover:bg-primary-50 hover:text-primary-500 hover:rounded cursor-pointer">
                      <img src={edit} alt="" width={13} />
                      <h1 className=" text-sm">Edit</h1>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex items-center justify-between space-x-4 py-1 px-2 hover:bg-primary-50 hover:text-primary-500 hover:rounded cursor-pointer">
                      <img src={trash} alt="" width={16} />
                      <h1 className=" text-sm">Delete</h1>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>

            <div className="space-y-1">
              <p className="text-primary-400 text-xs font-medium">As-Is</p>
              <p className=" text-label text-sm">{entry.asIs}</p>
            </div>
            <div className=" space-y-1">
              <p className="text-primary-400 text-xs font-medium">To-Be</p>
              <p className="text-label text-sm">{entry.toBe}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddKeyChangeForm;
