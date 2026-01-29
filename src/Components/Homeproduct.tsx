// import React from "react";
import CoffeeClassic from "../assets/images/Coffee-Classic.png";
import CoffeeBlack from "../assets/images/Coffee-Black.png";
import CoffeeStrong from "../assets/images/Coffee-Strong.png";
import ArrowDown from "../assets/images/Arrow-downproduct.png";
import { Link } from "react-router-dom";
const Homeproduct = () => {
  const Product = [
    {
      src: CoffeeClassic,
      text: "Classic Coffee",
      price: "$17.90",
    },
    {
      src: CoffeeBlack,
      text: "Black Coffee",
      price: "$24.90",
    },
    {
      src: CoffeeStrong,
      text: "Strong Coffee",
      price: "$32.90",
    },
  ];
  return (
     <section className="bg-[#492D26] rounded-t-[56px] mt-[-200px] lg:rounded-t-[100px] lg:px-12 pt-24 pb-40 xl:px-40">
      <div className="flex flex-col gap-14 items-center justify-center lg:flex-row lg:gap-40 text-white">
        
        <div className="flex flex-col lg:w-md">
          <Link to="/Products">
            <button className="flex bg-[#2B1712] py-4 px-7 text-base font-medium items-center gap-2 rounded-full mb-8 mx-auto lg:mx-0">
              View Product
              <img src={ArrowDown} alt="" />
            </button>
          </Link>

          <p className="text-sm text-center lg:text-base lg:text-left font-light">
           We strive to form deep partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect.
          </p>
        </div>

        <div className="flex gap-5 justify-center flex-wrap md:gap-20 lg:flex-nowrap">
          {Product.map((item, index) => (
            <div key={index} className="text-center pacifco">
              <img src={item.src} alt={item.text} />
              <p className="text-xl">{item.text}</p>
              <p className="text-xl">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homeproduct;
