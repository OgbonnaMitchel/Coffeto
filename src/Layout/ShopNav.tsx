import { Link } from "react-router-dom"
import ShopIcon from "../Components/Shop/ChartIcon"
import UserIcon from "../Components/user/UserIcon"
import Logo from "../assets/images/Header logo.png"

const ShopNav = () => {
  return (
    <div className="flex bg-linear-to-r from-[#6b4238] to-[#36211c] items-center justify-between px-40 py-5">
        <Link to="/">
<img src={Logo} alt="Coffeto Logo" />
        </Link>
<div className="flex items-center gap-6">
<ShopIcon />
<UserIcon/>
</div>
    </div>
  )
}

export default ShopNav