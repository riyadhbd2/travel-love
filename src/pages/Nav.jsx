import { Link } from "react-router-dom";
import logo from '.././assets/logo/logo.png';


const Nav = () => {
    return (
        <div className="container mx-auto flex justify-around h-14 items-center">
            <div>
                <img className="color-logo" src={logo} alt="" />
            </div>
            <div>
                <input className="border-4 border-white w-60" type="search" name="" id="" placeholder="Search your Destination..." />
            </div>
            <Link className="text-white" >News</Link>
            <Link className="text-white">Destination</Link>
            <Link className="text-white">Blog</Link>
            <Link className="text-white">Contact</Link>
            <Link className="bg-yellow-500 p-2 rounded-lg">Login</Link>
        </div>
    );
};

export default Nav;