  import Home from "../assets/images/Home.png"
  import Shop from "../assets/images/Shop.png"
  import About from "../assets/images/About.png"
  import Steps from "../assets/images/Steps.png"
  import Message from "../assets/images/Message.png"
import { HashLink } from "react-router-hash-link"
  const MobileNav = () => {

    type NavItems = {
      src:string,
      alt:string,
      text:string,
      link:string
    }
    const NavHashlink: NavItems[] = [
      {
        src:About,
        alt: "about-image",
        text:"About",
        link:"/#about"
      },
      {
        src:Steps,
        alt: "Steps-image",
        text:"Steps",
        link:"/#steps"

      },
      {
        src:Home,
        alt: "home-image",
        text:"Coffeto",
        link:"/#home"    },
      {
        src:Message,
        alt: "testomonial-image",
        text:"Testimonials",
       link:"/#testimonials"
      },
      {
        src:Shop,
        alt: "Shop-image",
        text:"Shop",
        link:"/#shop"
      }
    ]
    return (
      <div className=' max-w-3xl mx-auto bg-linear-to-r from-[#6b4238] to-[#36211c] rounded-t-[56px] shadow-2xl shadow-amber-50'>
          <div className='flex items-center justify-between px-8 py-6 text-white pacifco text-xs font-normal '>
              {NavHashlink.map((item,index) => (
                  <div key={index} className='flex flex-col items-center gap-1'>
                      <img src={item.src} alt={item.alt} />
                      <HashLink smooth to={item.link} className="hover:text-[#DDB66F]">{item.text}</HashLink>
                  </div>
              ))}
          </div>
      </div>
    )
  }

  export default MobileNav