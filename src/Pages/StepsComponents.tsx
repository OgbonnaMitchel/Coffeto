import React from "react";
import Stepone from "../assets/images/Steps circle.png";
import Steptwo from "../assets/images/Steps circle (1).png";
import Stepthree from "../assets/images/Steps circle (2).png";
import Footerbg from "../assets/images/Footer-Coffee-Bg.png";
const StepsComponents = () => {
  return (
    <section
      className="bg-[#492D26] -mt-2.5 rounded-t-[56px] px-4 pt-20 pb-60 lg:rounded-t-[100px]"
      style={{ backgroundImage: `url(${Footerbg})` }}
    >
      <div className="text-white">
        <h1 className="pacifco text-2xl md:text-5xl text-center mb-20">
          Steps of manufacturing our products
        </h1>

        <div className="flex flex-col mx-auto lg:flex-row gap-10 lg:gap-15 xl:gap-26 lg:justify-center ">
          
          <div className="flex flex-col items-start lg:items-center">
            
            <img
              src={Stepone}
              alt="step-one"
              className="w-[200px] md:w-auto"
            />
            <p className="w-60 md:w-2xs text-sm md:text-base font-light">
              Harvest occurs annually when the coffee beans reach maturity and
              are collected for processing.
            </p>
          </div>
          <div className="flex flex-col lg:flex-col-reverse items-end lg:items-center gap-8 lg:pt-35">
            
            <img
              src={Steptwo}
              alt="step-two"
              className="w-[200px] md:w-auto "
            />
            <p className="w-60 md:w-2xs text-sm md:text-base font-light text-right lg:text-left ">
              The beans are dried using a wet or dry technique, depending on the
              taste we want to obtain.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-center gap-8">
            
            <img
              src={Stepthree}
              alt="step-three"
              className="w-[200px] md:w-auto "
            />
            <p className="w-60 md:w-2xs text-sm md:text-base font-light">
              The coffee is roasted and acquires its flavor by processing the
              grain in ovens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsComponents;
