import React from "react";

const NavItem = ({ icon, text, bubble }) => {
    return (
        <div className="cursor-pointer relative flex flex-row items-center px-3 py-2 rounded-md hover:bg-slate-300 gap-3 sm:border-black sm:border-solid sm:border-2">
            {icon && <img src={icon} alt={text} className="h-4" />}
            <div className="">{text}</div>
            {bubble && (
                <div className="absolute bg-red-500 h-5 w-5 rounded-full top-[-10px] right-[-8px] text-3 p-0 m-0 text-xs">
                    <p className="absolute left-[6px] top-[1px] text-white">
                        {bubble}
                    </p>
                </div>
            )}
        </div>
    );
};

export default NavItem;
