import { useState } from "react";
import KeyChangeModal from "./KeyChangeModal";
import { DataType } from "../../../../types";

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
  const [dataEntries, setDataEntries] = useState<DataType[]>([]); // Here is the array that will store all entries

  return (
    <>
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
        addData={addData}
      />
      {/* Below is a simple representation of the added data. You might want to change this to suit your needs */}
      {dataEntries.map((entry, index) => (
        <div key={index}>
          <h2>{entry.title}</h2>
          <p>{entry.change}</p>
          <p>{entry.asIs}</p>
          <p>{entry.toBe}</p>
        </div>
      ))}
    </>
  );
};

export default AddKeyChangeForm;
