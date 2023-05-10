import fav from "../assets/images/fav.svg";
import InputField from "./InputField";
import { useState } from "react";
import Button from "./Button";

const ResetForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col w-full px-36 space-y-10">
      <a href="/">
        <img src={fav} alt="" />
      </a>
      <form action="submit" className=" space-y-8">
        <div className="space-y-4 mb-12">
          <h1 className="text-[#000] font-medium text-3xl">Password Reset</h1>
          <p className="text-black">Create a new password</p>
        </div>
        <InputField
          id="email"
          label="Create A New Password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="password"
          placeholder="Create your password"
          required
          className=" mb-4 w-full"
        />
        <InputField
          id="password"
          label="Confirm New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Confirm your new password"
          required
          className=" mb-4 w-full"
        />

        <Button
          variant="primary"
          size="lg"
          onClick={() => alert("Please enter your")}
          className="rounded-lg w-full"
          type="button"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ResetForm;
