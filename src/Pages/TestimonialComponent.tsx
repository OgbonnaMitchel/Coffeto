import React from "react";
import Testiomonialstext from "../Components/TestimonialsText";
import TestimonialCoffee from "../assets/images/Testimonial-Coffee.png";

const TestimonialComponent = () => {
  return (
    <section className="pt-16 rounded-t-[56px] px-4 md:px-8 pb-20 mt-[-100px] lg:rounded-t-[100px] bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div>
          <Testiomonialstext />
        </div>
        <div>
          <img src={TestimonialCoffee} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
