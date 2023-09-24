import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="py-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;