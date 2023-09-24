import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="shadow-md">
            <div className="max-w-[1300px] mx-auto flex justify-between items-center py-6 px-5">
            <div>
                <h2 className="text-xl font-semibold">Phone Shop</h2>
            </div>
            <ul className="flex gap-5">
                <li><NavLink to={"/"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400" : ""}>Home</NavLink></li>

                <li><NavLink to={"/favourites"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-green-400" : ""}>Fovourites</NavLink></li>

                <li><NavLink to={"login"} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-gray-400" : ""}>Login</NavLink></li>
            </ul>
        </div>
        </div>
    );
};

export default Navbar;