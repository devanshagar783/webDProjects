import React from "react";
import TextComponent from "./TextComponent";

const DropdownList = ({ data, onItemSelection, selected }) => {
    const onItemClick = (index) => {
        onItemSelection((prev) => {
            if (prev.includes(index)) {
                return prev.filter((item) => item != index);
            }
            return [...prev, index];
        });
    };

    return (
        <div className="flex flex-wrap">
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`py-1 px-2 mr-1 border-solid border-[1px] rounded-full ${
                            selected.includes(index)
                                ? "border-green-500"
                                : "border-black"
                        } mb-1 mr-1 text-sm`}
                        onClick={() => {
                            onItemClick(index);
                        }}
                    >
                        <TextComponent
                            text={item.text}
                            icon={item.icon}
                            iconClassName={"h-[16px] w-[16px]"}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default DropdownList;
