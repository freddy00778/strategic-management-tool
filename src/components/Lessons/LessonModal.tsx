import { FC } from "react";
import CustomModal from "../CustomModal";
import LessonModalForm from "./LessonModalForm";

import { DataType } from "../../../types";

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  cancel?: string;
  width?: number;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  division: string;
  setDivision: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  addData: (newData: DataType) => void;
  dataLength: number;
}

const LessonModal: FC<LessonModalProps> = ({
  isOpen,
  onClose,
  className,
  cancel,
  width,
  category,
  setCategory,
  division,
  setDivision,
  text,
  setText,
  addData,
  dataLength,
}) => {
  return (
    <CustomModal
      isOpen={isOpen}
      size="lg"
      onClose={onClose}
      className={` ${className}`}
      cancel={cancel}
      width={width}
    >
      <LessonModalForm
        category={category}
        setCategory={setCategory}
        division={division}
        setDivision={setDivision}
        text={text}
        setText={setText}
        addData={addData}
        dataLength={dataLength}
        onClose={onClose}
      />
    </CustomModal>
  );
};

export default LessonModal;
