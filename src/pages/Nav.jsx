import { Link } from "react-router-dom";
import logo from '.././assets/logo/logo.png';


const Nav = () => {
    return (
        <div className="container mx-auto flex justify-around h-14 items-center">
            <div>
                <img className="color-logo" src={logo} alt="" />
            </div>
            <div>
                <input className="border-2 border-green-600" type="search" name="" id="" placeholder="Search your Destination..." />
            </div>
            <Link >News</Link>
            <Link >Destination</Link>
            <Link >Blog</Link>
            <Link >Contact</Link>
            <Link to='/login' className="bg-yellow-500 p-2 rounded-lg">Login</Link>
        </div>
    );
};

export default Nav;