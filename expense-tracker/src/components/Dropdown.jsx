import MaterialIconsReact from "material-icons-react";
import React, { useEffect, useState } from "react";
import DropdownList from "./DropdownList";

const Dropdown = ({
    title,
    icon,
    bgColor,
    className,
    data,
    selected,
    onItemSelection,
}) => {

    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className="w-full">
            {title}
            <div className={`rounded-md flex ${bgColor} items-center pr-3 h-9`} onClick={() => { setIsClicked(prev => !prev) }}>
                <div className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ${className} ${bgColor} focus:border-none focus:outline-none`}>
                </div>
                <MaterialIconsReact icon={icon} color={"#000000"} />
            </div>
            {isClicked && <div className="absolute mt-1 py-2 px-3 border-solid border-2 border-black  bg-gray-500 rounded-b-xl w-[400px]">
                <DropdownList data={data} selected={selected} onItemSelection={onItemSelection} />
            </div>}
        </div>
    );
};

export default Dropdown;
