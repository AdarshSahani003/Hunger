import { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import UseOnlineStatus from "../utils/UseOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

    const {loggedIn, setUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <header className="w-full bg-white shadow-md">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-2 w-4/5">
                <div className="">
                    <Link to={"/"}><img className="w-24" src={LOGO_URL} alt="Logo" /></Link>
                </div>
                <div className="mt-4 md:mt-0">
                    <ul className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-8">
                        <li className="text-xl">{UseOnlineStatus() ? "🟢" : "🔴"}</li>
                        <li>
                            <Link to={"/"} className="text-s md:text-xl">Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"} className="text-s md:text-xl">About</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} className="text-s md:text-xl">Contact Us</Link>
                        </li>
                        <li>
                            <Link to={"/cart"} className="text-s md:text-2xl">🛒<span className="text-s md:text-m">{cartItems.length}</span></Link>
                        </li>
                        <li className="text-s md:text-xl">{loggedIn}</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;