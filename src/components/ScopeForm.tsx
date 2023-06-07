import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ScopeForm = () => {
  return (
    <form className="flex flex-col w-full h-screen overflow-y-auto max-h-[10000px]  scrollbar-none my-10 space-y-20 ">
      <div className="flex w-full h-full   px-20 items-start justify-between space-x-6">
        <div className="w-2/4 h-full space-y-6">
          <h1>Drag a scope item into the box </h1>
          <div className="w-full flex border-border border rounded-xl h-[85%]"></div>
        </div>
        <div className="w-2/4 h-full space-y-6">
          <h1 className="text-center">Scope List</h1>
          <div className="w-full h-full">
            <ul>
              <li className="flex w-full rounded-lg items-center mt-2 px-6 py-4 bg-primary-50 justify-between bg-opacity-50">
                <h1>I want to build a flat in Accra</h1>
                <button
                  type="button"
                  onClick={() => alert("Deleted text")}
                  className="text-red-500"
                >
                  {}
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
              <li className="flex w-full rounded-lg items-center mt-2 px-6 py-4 bg-primary-50 justify-between bg-opacity-50">
                <h1>I want to build a flat in Accra</h1>
                <button
                  type="button"
                  onClick={() => alert("Deleted text")}
                  className="text-red-500"
                >
                  {}
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
              <li className="flex w-full rounded-lg items-center mt-2 px-6 py-4 bg-primary-50 justify-between bg-opacity-50">
                <h1>I want to build a flat in Accra</h1>
                <button
                  type="button"
                  onClick={() => alert("Deleted text")}
                  className="text-red-500"
                >
                  {}
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
              <li className="flex w-full rounded-lg items-center mt-2 px-6 py-4 bg-primary-50 justify-between bg-opacity-50">
                <h1>I want to build a flat in Accra</h1>
                <button
                  type="button"
                  onClick={() => alert("Deleted text")}
                  className="text-red-500"
                >
                  {}
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ScopeForm;
