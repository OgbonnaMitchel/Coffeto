import React, { useState } from "react";
import { Link } from "react-router-dom";
import Visible from "../assets/images/Visible.png";
import Invisible from "../assets/images/InVisible.png";
import Login from "../assets/images/Login.png";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate("/dashboard");
  };

  return (
    <div className="bg-white w-80 border text-black rounded-xl  px-6 py-8 mx-auto">
      <h1 className="font-medium text-center text-[#6B4238] text-3xl pacifco">
        Welcome back
      </h1>
      <p className="text-xs font-semibold text-center text-[#6B4238]">
        Enter credentials to continue access to account
      </p>

      <form onSubmit={handleSubmit} className="mt-6 mb-2">
        <div className="flex flex-col mb-3">
          <label className="text-xs font-medium text-[#6b4238] mb-1">
            Email:
          </label>
          <input
            className="border-[#DDB66F] border rounded-lg py-1 px-3 text-xs outline-0"
            type="email"
            placeholder="example@email.com"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-medium text-[#6b4238] mb-1 ">
            Password
          </label>
          <div className="flex border-[#DDB66F] border rounded-lg pl-3 justify-between">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="outline-0 text-xs p-0"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className=" bg-[#DDB66F] py-1 px-3 rounded-r-md"
            >
              <img
                src={showPassword ? Visible : Invisible}
                alt="Toggle visibility" className= "w-4"
              />
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="flex rounded-lg bg-[#DDB66F] mt-7 items-center gap-1 font-bold text-[#2B1712] px-24 py-1.5 text-sm"
        >
          Login
          <span>
            <img src={Login} alt="login icon" className="w-4 h-4" />
          </span>
        </button>
      </form>
      <p className="text-xs text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#6b4238] font-bold">
          SignUp
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
