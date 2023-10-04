import React, { useState } from "react";
import Search from "./Search";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" h-[70px] py-3 px-5 flex justify-between items-center">
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
                        isOpen ? "top-[60px]" : "hidden sm:flex"
                    } bg-red-50 flex flex-col sm:flex-row items-center p-3 border-solid border-black sm:border-none sm:gap-10 border-2 z-1 right-3`}
                >
                    <div className=" cursor-pointer hover:opacity-[0.3]">Cart</div>
                    <div className=" cursor-pointer hover:opacity-[0.3]">Login</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
