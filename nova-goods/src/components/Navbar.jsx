import React, { useState } from "react";
import Search from "./Search";
import NavItem from "./NavItem";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-[70px] py-3 px-5 flex justify-between items-center">
            <img src="/logo.png" alt="logo" className=" h-10 sm:h-14" />
            <Search />
            <div className="flex">
                <img
                    src="/menu_icon.png"
                    alt="menu"
                    className=" h-10 sm:hidden"
                    onClick={() => {
                        setIsOpen((prev) => !prev);
                    }}
                />
                <div
                    className={`absolute sm:relative ${
                        isOpen ? "top-[60px] rounded-lg" : "hidden sm:flex"
                    } bg-white flex flex-col sm:flex-row items-center p-1 border-solid border-black sm:border-none sm:gap-10 border-2 z-1 right-3`}
                >
                    <NavItem
                        text={"Cart"}
                        icon={"/public/cart.png"}
                        bubble={2}
                    />
                    <NavItem text={"Login"} icon={"/public/login.png"} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
