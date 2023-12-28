import MaterialIconsReact from "material-icons-react";
import React, { useState } from "react";
import DropdownList from "./DropdownList";

const Dropdown = ({
    title,
    icon,
    bgColor,
    className,
    placeholder,
    value,
    onChange,
}) => {

    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className="w-full">
            {title}
            <div className={`rounded-md flex ${bgColor} items-center pr-3 h-9`} onClick={() => { setIsClicked(true) }}>
                <div
                    className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ${className} ${bgColor} focus:border-none focus:outline-none`}
                // value={value}
                // onChange={onChange}
                >

                </div>
                <MaterialIconsReact icon={icon} color={"#000000"} />
            </div>
            {isClicked && <div>
                <DropdownList />
            </div>}
        </div>
    );
};

export default Dropdown;
