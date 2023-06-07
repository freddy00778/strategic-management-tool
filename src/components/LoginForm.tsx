import fav from "../assets/images/fav.svg";
import InputField from "./InputField";
import { useState, useEffect } from "react";
import Button from "./Button";
import { CustomCheckbox } from "./CustomCheckBox";
import SuccessModal from "./SuccessModal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAsync } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { AppDispatch } from "../app/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // prevent form submission

    dispatch(loginAsync({ email, password }))
      .unwrap()
      .then(() => {
        // Login successful, show success toast
        handleSuccessToast();
        setTimeout(() => {
          // Open the modal after the toast is displayed
          setSecondModalOpen(true);
          setTimeout(() => {
            // Navigate to dashboard after a delay
            setSecondModalOpen(false);
            navigate("/project/dashboard");
          }, 3000);
        }, 1000);
      })
      .catch((err) => {
        // Login failed, handle error here
        console.error(err.message);
        handleErrorToast(err.message);
      });
  };

  // Functions
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    if (isChecked) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }
  }, [isChecked, email, password]);

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setIsChecked(true);
    }
  }, []);

  const handleSuccessToast = () => {
    toast.success("Login successful!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Auto-close the toast after 3 seconds
    });
  };

  const handleErrorToast = (errorMessage: string) => {
    toast.error("Error: " + errorMessage, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Auto-close the toast after 3 seconds
    });
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
          {authState.error && <ToastContainer />}
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
            onClick={handleLogin}
            className="rounded-lg w-full"
            type="button"
            disabled={authState.isLoading}
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
