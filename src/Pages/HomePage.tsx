import Homegroup from "../Components/Homegroup";
import Homeproduct from "../Components/Homeproduct";
import AboutComponent from "./AboutComponent";
import StepsComponents from "./StepsComponents";
import TestimonialComponent from "./TestimonialComponent";

const HomePage = () => {
  return (
    <>
      <section id="home">
        <Homegroup />
      </section>

      <section>
        <Homeproduct />
      </section>

      <section id="about">
        <AboutComponent />
      </section>

      <section id="steps">
        <StepsComponents />
      </section>

      <section id="testimonials">
        <TestimonialComponent/>
      </section>
    </>
  );
};

export default HomePage;
