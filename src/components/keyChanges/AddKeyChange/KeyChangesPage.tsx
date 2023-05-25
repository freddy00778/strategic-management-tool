import Button from "../../Button";
import { useState } from "react";

import kc from "../../../assets/images/keyChange.svg";
import AddKeyChangeForm from "./AddKeyChangeForm";
import { DataType } from "../../../../types";

const KeyChangesPage = () => {
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [dataEntries, setDataEntries] = useState<DataType[]>([]); // Array to store all entries

  const onClose = () => {
    setSecondModalOpen(false);
  };

  const handleSave = (newData: any) => {
    setDataEntries([...dataEntries, newData]); // Append new data to the array
    setSecondModalOpen(true);
  };

  return (
    <div className="px-7 flex flex-col w-full  space-y-10">
      <div className="flex h-1/4 items-center justify-between">
        <Button
          variant="primary"
          size="lg"
          onClick={handleSave}
          className="rounded-lg w-[30%]"
          type="button"
        >
          Add Key Change
        </Button>
        <div className="flex items-center space-x-4">
          <h1 className="text-[#000] font-semibold text-[18px]">
            Number of Key Changes
          </h1>
          <div className="flex items-center justify-center px-4 py-2 border border-border rounded-xl">
            {dataEntries.length}
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        {dataEntries.length === 0 ? (
          // If there are no entries, display "No Key Change"
          <div className="flex flex-col items-center justify-center space-y-2 ">
            <img src={kc} alt="" />
            <h1 className="text-[20px]">No Key Change</h1>
          </div>
        ) : (
          // If there are entries, display AddKeyChangeForm
          <AddKeyChangeForm
            isOpen={secondModalOpen}
            onClose={onClose}
            addData={handleSave}
          />
        )}
      </div>
    </div>
  );
};

export default KeyChangesPage;
