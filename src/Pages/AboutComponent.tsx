import React from 'react'
import Aboutimage from '../assets/images/about-coffee.png'

const AboutComponent = () => {
  return (
    <section className="bg-white rounded-t-[56px] mt-[-100px] px-4 md:px-6 lg:rounded-t-[100px] pt-24 pb-24">
      <div className="flex flex-col-reverse gap-20 lg:flex-row items-center justify-center">
        <img src={Aboutimage} alt="About coffee" />

        <div className="lg:w-md">
          <h1 className="pacifco text-5xl text-[#2E2624] mb-6 text-center lg:text-left">
            Our History
          </h1>
          <p className="text-[#5B4C48] text-sm lg:text-base text-center lg:text-left">
            We make and grow the best coffee in Peru, accompanying families since 1930, with professional workers who harvest, collect and select the coffee with quality work, thus providing exquisite coffee to enjoy together as a family.
          </p>
        </div>
      </div>
    </section>

  )
}

export default AboutComponent