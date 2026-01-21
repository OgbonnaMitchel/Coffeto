// import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
import Logo from "../assets/images/Header logo.png";

const Signup = () => {
  return (
    <div className="bg-[#2B1712] w-full min-h-screen bg-cover">
      <div className="py-20">
        <Link to="/"> 
        <img src={Logo} alt="Coffeto Logo" className="mx-auto mb-4" />
        </Link>
        <div className="mx-auto">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
