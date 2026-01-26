
import { Link } from "react-router-dom"
import Logo from "../../src/assets/images/Header logo.png"

const Navbar = () => {

  const NavLink = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Steps",
      link: "/steps"
    },
    {
      name: "Testimonials",
      link: "/testimonials"
    },
    {
      name: "Shop",
      link: "/shop"
    }
  ]
  return (
      <div className="flex px-10 py-5 bg-linear-to-r from-[#6b4238] to-[#36211c] items-center border-b-2 border-dashed border-[#847571] lg:px-30 justify-between " >
          <img src={Logo } alt="Coffeto logo " />
          <div className="list-none gap-8 pacifco text-white font-light hidden lg:flex">
              {
                  NavLink.map((item, index) => (
                      <li key={index}>
                          <Link to={item.link} className="hover:text-[#DDB66F] ">{item.name}</Link>
                      </li>
                  ))
              }
          </div>
      <button className="bg-[#DDB66F] px-6 py-2 rounded-xl font-semibold text-xs text-[#492D26] border hover:bg-transparent hover:text-white border-[#DDB66F]">
        <Link to="/signup">Sign-Up</Link>
          </button>
    </div>
  )
}

export default Navbar