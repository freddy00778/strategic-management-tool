import fav from "../assets/images/fav.svg";
import InputField from "./InputField";
import { useState } from "react";
import Button from "./Button";
import { CustomCheckbox } from "./CustomCheckBox";
import SuccessModal from "./SuccessModal";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const navigate = useNavigate();

  //   functions
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleDashboardChange = () => {
    setSecondModalOpen(true);

    setTimeout(() => {
      setSecondModalOpen(false);
      navigate("/project/dashboard");
    }, 4000);
  };
  return (
    <div className="flex flex-col w-full  px-36">
      <div className="flex flex-col w-full  space-y-10">
        <a href="/">
          <img src={fav} alt="" />
        </a>
        <form action="submit" className=" space-y-8">
          <div className="space-y-4 mb-12">
            <h1 className="text-[#000] font-medium text-3xl">
              Sign in to Change Verve
            </h1>
            <p className="text-black">Enter your details below</p>
          </div>
          <InputField
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your full name"
            required
            className=" mb-4 w-full"
          />
          <InputField
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            required
            className=" mb-4 w-full"
          />
          <div className="flex flex-row items-center justify-between pb-4">
            <CustomCheckbox
              id="exampleCheckbox"
              label="Remember Me"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <a
              href="/instruction"
              className=" text-primary-500 font-semibold text-lg"
            >
              Forgot Password?
            </a>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={handleDashboardChange}
            className="rounded-lg w-full"
            type="button"
          >
            Log in
          </Button>
        </form>
      </div>
      <SuccessModal
        isOpen={secondModalOpen}
        onClose={() => setSecondModalOpen(false)}
      />
    </div>
  );
};

export default LoginForm;
