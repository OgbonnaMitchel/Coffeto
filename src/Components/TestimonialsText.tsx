import { useEffect, useState } from "react";
import { testimonialData } from "../data/testimonialData";

const TestimonialsText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === testimonialData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonialData[index];

  return (
    <div className="max-w-xl mx-auto text-center lg:text-left transition-all duration-500">
      <p className="pacifco text-3xl md:text-3xl lg:text-5xl/tight mb-12 text-[#2E2624]">
        “{testimonial.text}”
      </p>
      <span className="lg:text-lg text-base font-medium text-[#5B4C48]">
        {testimonial.user}
      </span>
    </div>
  );
};

export default TestimonialsText;
