import MaterialIconsReact from "material-icons-react";
import React, { useEffect, useRef, useState } from "react";
import DropdownList from "./DropdownList";
import TextComponent from "./TextComponent";
import { expenseCategories } from "../constants/DropdownItems";

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
    const ref = useRef(null);

    useEffect(() => {
        function handleClick(e) {
            if (!ref.current?.contains(e.target))
                setIsClicked(false)
        }
        document.addEventListener("mousedown", handleClick)

        return (() => {
            document.removeEventListener("mousedown", handleClick)
        })
    }, [])

    return (
        <div className="w-full" ref={ref}>
            {title}
            <div className={`rounded-md flex ${bgColor} items-center pr-3 w-[400px] min-h-[35px]`} onClick={() => { setIsClicked(!isClicked) }}>
                <div className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ${className} ${bgColor} focus:border-none focus:outline-none flex flex-wrap`}>
                    {selected.map((item, index) => {
                        return <div
                            key={index}
                            className={`py-1 px-2 border-solid border-[1px] rounded-full border-green-500 mb-1 mr-1 text-sm`}
                        >
                            <TextComponent text={expenseCategories[item].text} icon={expenseCategories[item].icon} iconClassName={"h-[16px] w-[16px]"} />
                        </div>
                    })}
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
