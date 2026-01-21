// import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../../src/assets/images/Header logo.png"

const Navbar = () => {
  return (
      <div className="flex justify-between px-30 py-5 bg-[#492D26] items-center ">
          <img src={Logo } alt="Coffeto logo " />
          <div className="flex list-none gap-8 pacifco text-white font-light ">
              <li className=" hover:text-[#DDB66F]">Home</li>
              <li className=" hover:text-[#DDB66F]">About</li>
              <li className=" hover:text-[#DDB66F]">Steps</li>
              <li className=" hover:text-[#DDB66F]">Testimonials</li>
              <li className=" hover:text-[#DDB66F]">Shop</li>
          </div>
      <button className="bg-[#DDB66F] px-6 py-2 rounded-xl font-semibold text-xs text-[#492D26] border hover:bg-transparent hover:text-white border-[#DDB66F] ">
        <Link to="/signup">Sign-Up</Link>
          </button>
    </div>
  )
}

export default Navbar