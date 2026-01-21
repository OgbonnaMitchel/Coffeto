import Facebook from "../assets/images/Facebook.png";
import Twitter from "../assets/images/Twitter.png";
import Instagram from "../assets/images/Instagram.png";
import Arrowright from "../assets/images/Arrow-Down.png";
import Logo from "../assets/images/Header logo.png";
import Footerbg from "../assets/images/Footer-Coffee-Bg.png"

const Footer = () => {
  return (
    <div className="bg-[#492D26] rounded-t-[60px] text-white px-45 pt-24 pb-12 "  style={{ backgroundImage: `url(${Footerbg})`}}>
      <div className="flex justify-between  ">
        <div>
          <img src={Logo} alt="CoffeeLogo" className="mb-4"/>
          <p className= "text-2xl font-medium pacifco">Sign up for our newsletter</p>
        </div>
        <div>
          <form action="">
            <input type="email" placeholder="Enter e-mail address" />
            <button>
              Subscribe
              <span>
                <img src={Arrowright} alt="right-arrow" />
              </span>
            </button>
            <p>We care about your data. Read our <span>Privacy Policy</span> </p>
          </form>
              </div>
      </div>
              <div>
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
              <div>
                <p>Copyright Coffeto.com. All rights reserved</p>
              </div>
    </div>
  );
};

export default Footer;
