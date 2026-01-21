import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignUpLogo from "../assets/images/SignUpLogo.png";
import Visible from "../assets/images/Visible.png";
import Invisible from "../assets/images/InVisible.png";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login")
  };
  return (
    <div className="bg-white w-80 border text-black rounded-xl  px-6 py-8 mx-auto">
      <h1 className="font-medium text-center text-[#6B4238] text-3xl pacifco ">Create an account </h1>
      <p className="text-xs font-semibold text-center text-[#6B4238] ">Get started with <span className="pacifco italic font-semibold ">Coffeto</span></p>
      <form onSubmit={handleSubmit} className="mt-6 mb-2">
        <div className="flex flex-col mb-3">
          <label className="text-xs font-medium text-[#6b4238] mb-1 ">Name:</label>
          <input className="border-[#DDB66F] border rounded-lg py-1 px-3 text-xs outline-0 " type="text" placeholder="Joe Doe" required />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-xs font-medium text-[#6b4238] mb-1 ">Email:</label>
          <input className="border-[#DDB66F] border rounded-lg py-1 px-3 text-xs outline-0" type="text" placeholder="example@email.com" required />
        </div>
        <div className="flex flex-col mb-3">
                  <label className="text-xs font-medium text-[#6b4238] mb-1 ">Password:</label>
                  <div className="flex border-[#DDB66F] border rounded-lg pl-3 justify-between ">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password" className="outline-0 text-xs p-0" required
            />
            <span onClick={() => setShowPassword(!showPassword)} className=" bg-[#DDB66F] py-1 px-3 rounded-r-md">
              <img
                src={showPassword ? Visible : Invisible}
                alt="Visible icon" className= "w-4"
              />
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium text-[#6b4238] mb-1 ">Confirm Password:</label> 
          <div className="flex border-[#DDB66F] border rounded-lg pl-3 justify-between">
            <input 
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password" className="outline-0 text-xs p-0" required
            />
            <span onClick={() => setConfirmShowPassword(!showConfirmPassword)} className=" bg-[#DDB66F] py-1 px-3 rounded-r-md">
              <img
                src={showConfirmPassword ? Visible : Invisible}
                alt="Visible icon" className= "w-4"
              />
            </span>
          </div>
        </div>
        <button type="submit" className="flex rounded-lg bg-[#DDB66F] mt-7 items-center gap-1 font-bold text-[#2B1712] px-24 py-1.5 text-sm">
          SignUp
          <span>
            <img src={SignUpLogo} alt="Signuplogo" className="w-[16px] h-[16px]" />
          </span>
        </button>
      </form>
      <p className="text-xs text-center">Already have an account? <Link to="/login" className="text-[#6b4238] font-bold">Login</Link></p>
    </div>
  );
};

export default SignUpForm;
