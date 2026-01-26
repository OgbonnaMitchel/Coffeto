import Facebook from "../assets/images/Facebook.png";
import Twitter from "../assets/images/Twitter.png";
import Instagram from "../assets/images/Instagram.png";
import Arrowright from "../assets/images/Arrow-Down.png";
import Logo from "../assets/images/Header logo.png";
import Footerbg from "../assets/images/Footer-Coffee-Bg.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#2B1712] absolute left-0 right-0 top-[2170px] rounded-t-[56px] px-6 pt-12 pb-8  lg:rounded-t-[100px] lg:px-20 text-white xl:px-30 xl:pt-24 xl:pb-12"  style={{ backgroundImage: `url(${Footerbg})`}}>
      <div className="flex  flex-col items-center lg:flex-row justify-between ">
        <div className="text-center lg:text-left">
          <Link to="/"><img src={Logo} alt="CoffeeLogo" className="mb-4 mx-auto lg:mx-0"/> </Link>
          <p className= "text-3xl font-medium pacifco mb-12 lg:text-4xl ">Sign up for our newsletter</p>
        </div>
        <div>
          <form action="" className="flex flex-col gap-4 text-center items-center">
            <input type="email" placeholder="Enter e-mail address" className="border-2 border-[#5B4C48] rounded-[64px] outline-0 text-[#847571] font-medium text-sm w-2xs py-4 px-6 lg:w-xs " />
            <button className=" flex items-center gap-2 w-2xs bg-[#DDB66F] justify-center px-4 py-4 rounded-[64px] font-semibold text-sm text-black lg:w-xs ">
              Subscribe
              <span>
                <img src={Arrowright} alt="right-arrow" />
              </span>
            </button>
            <p className="text-xs font-normal ">We care about your data. Read our <span className="text-[#DDB66F] ">Privacy Policy</span> </p>
          </form>
              </div>
      </div>
              <div className="flex justify-center gap-8 my-20">
                  <a href="www.facebook.com">
                  <img src={Facebook} alt="facebook icon" />
                  </a>
                  <a href="www.instagram.com">
                  <img src={Instagram} alt="instagram icon" />
                  </a>
                  <a href="www.x.com">
                  <img src={Twitter} alt="" />  
                  </a>
              </div>
              <div className="text-center text-xs text-[#847571] ">
                <p> &copy; Copyright Coffeto.com. All rights reserved</p>
              </div>
    </div>
  );
};

export default Footer;
