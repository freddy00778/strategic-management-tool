import { useState } from "react";

const AddButton = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`Reason added: ${inputValue}`);
    setInputValue("");
    setShowInput(false);
  };

  return (
    <div className="flex flex-col items-center">
      {showInput && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="absolute w-full h-full bg-black opacity-50"
            onClick={() => setShowInput(false)}
          ></div>
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-white z-60 relative rounded-md"
          >
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Enter reason..."
              className="border rounded-md px-2 py-1 w-full"
            />
            <button
              type="submit"
              className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      <button
        className="border rounded-lg px-2 py-1"
        onClick={() => setShowInput(true)}
      >
        +
      </button>
      <span>Click to add</span>
    </div>
  );
};

export default AddButton;
