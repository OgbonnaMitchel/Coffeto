// import React from "react";
import HomeCoffee from "../assets/images/Home-Coffee.png";
import Coffeeimg from "../assets/images/home-coffee-title.png";
import Arrowright from "../assets/images/Arrow-Right.png";
import { Link } from "react-router-dom";

const Homegroup = () => {
  return (
    <div className="bg-linear-to-r from-[#6b4238] to-[#36211c] px-6 lg:px-30 pt-15 pb-75 text-white">
     <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-30">
         <div>
        <img src={HomeCoffee} alt="Homecoffe-img" />
      </div>
      <div className=" text-center lg:text-left lg:w-md">
        <h2 className="text-[#DDB66F] font-medium mb-4 text-base ">EXCEPTIONAL QUALITY</h2>
        <h1 className="text-5xl pacifco mb-4 lg:text-6xl">It's time for a good <span className="inline-flex items-center"> coffee <img src={Coffeeimg} alt="coffee-img" className="w-20"/></span></h1>
        <p className="text-base lg:text-lg font-normal">Each select coffee bean reflects our commitment to Peruvian coffee growers, who bring the best select coffee to your table.</p>

        <Link to="/shop"> <button className="flex rounded-full bg-[#DDB66F] text-[#2E2624] text-base font-medium items-center gap-2 py-4 px-8 mt-8 mx-auto lg:mx-0 ">Shop now <span><img src={Arrowright} alt="arrow-right" /></span></button></Link>
      </div>
     </div>
    </div>
  );
};

export default Homegroup;
