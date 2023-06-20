import React, { ChangeEventHandler } from "react";
import InputField from "./InputField";

interface DynamicFieldProps {
  data: any[];
  setData: (newData: any[]) => void;
  dataStructure: Record<
    string,
    | "text"
    | "password"
    | "email"
    | "number"
    | "textarea"
    | "search"
    | "datepicker"
  >; // changed string to the specified types
  idBase: string;
  labels: Record<string, string>;
}

const DynamicFieldSet: React.FC<DynamicFieldProps> = ({
  data,
  setData,
  dataStructure,
  idBase,
  labels,
}) => {
  const handleDataChange = (index: number, field: string, value: string) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const index = Number(e.target.id.split("_")[2]);
    const field = e.target.id.split("_")[1];
    handleDataChange(index, field, e.target.value);
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex h-full w-full space-x-8">
          {Object.keys(dataStructure).map((field, fieldIndex) => (
            <div
              key={fieldIndex}
              className="flex items-center w-full space-x-6"
            >
              <InputField
                id={`${idBase}_${field}_${index}`}
                label={labels[field]}
                value={item[field]}
                onChange={handleChange} // modified
                type={dataStructure[field]}
                className="w-full m-0"
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default DynamicFieldSet;
