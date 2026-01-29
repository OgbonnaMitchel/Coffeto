import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import { HashLink } from "react-router-hash-link";
import Logo from "../../src/assets/images/Header logo.png";
import SignUpButton from "../Components/SignUpButton";

const Navbar = () => {
  const NavLink = [
    {
      name: "Home",
      link: "/#home",
      type: "hash",
    },
    {
      name: "About",
      link: "/#about",
      type: "hash",
    },
    {
      name: "Steps",
      link: "/#steps",
      type: "hash",
    },
    {
      name: "Testimonials",
      link: "/#testimonials",
      type: "hash",
    },
    {
      name: "Shop",
      link: "/shop",
      type: "route",
    },
  ];
  return (
    <div className="flex px-10 py-5 bg-linear-to-r from-[#6b4238] to-[#36211c] items-center border-b-2 border-dashed border-[#847571] lg:px-30 justify-between ">
      <img src={Logo} alt="Coffeto logo " />
      <div className="list-none gap-8 pacifco text-white font-light hidden lg:flex">
        {NavLink.map((item, index) => (
          <li key={index}>
            {item.type === "hash" ? (
              <HashLink smooth to={item.link} className="hover:text-[#DDB66F]">
                {item.name}
              </HashLink>
            ) : (
              <Link to={item.link} className="hover:text-[#DDB66F]">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </div>
      <SignUpButton/>
    </div>
  );
};

export default Navbar;
