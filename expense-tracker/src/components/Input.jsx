import MaterialIconsReact from "material-icons-react";
import React from "react";

const Input = ({
    value,
    onChange,
    placeholder,
    icon,
    title,
    className,
    bgColor,
}) => {
    return (
        <div className="w-full text-black">
            {title}
            <div className={`rounded-md flex ${bgColor} items-center pr-3`}>
                <input
                    type="text"
                    name="price"
                    id="price"
                    className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ${className} ${bgColor} focus:border-none focus:outline-none`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <MaterialIconsReact icon={icon} color={"#000000"} />
            </div>
        </div>
    );
};

export default Input;
