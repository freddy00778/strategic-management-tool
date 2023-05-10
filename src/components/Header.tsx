import InputField from "./InputField";
import notification from "../assets/images/notification.svg";
import { useState } from "react";
import down from "../assets/images/down.svg";

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
}

const Header: React.FC<HeaderProps> = ({
  className,
  children,
  backgroundImage,
}) => {
  const [counter, setCounter] = useState(0);

  // function counter
  const handleNotificationClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="w-full flex h-[100px] items-center border-b border-b-zinc-100">
      <div className="flex w-full items-center px-7">
        <div
          className={`flex space-x-2  w-2/4 font-medium text-[18px] ${className}`}
        >
          {children}
        </div>
        <div className="w-2/4 flex items-center justify-between space-x-8">
          <InputField
            id="search"
            type="search"
            placeholder="Search..."
            onChange={(e) => console.log("Search:", e.target.value)}
            className="w-full mb-0"
          />
          <div className="w-1/4 flex items-center space-x-6">
            <div onClick={handleNotificationClick} className="relative ">
              <img src={notification} alt="" className="inline-block" />
              <div className="absolute top-[-4px] right-[-5px] bg-[#EF8B89] flex items-center justify-center rounded-full w-[15px] h-[15px] text-white text-[10px]">
                {counter}
              </div>
            </div>
            <div className="flex space-x-2 items-center ">
              <div
                className={`flex w-12 h-12 rounded-lg bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              <img src={down} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
