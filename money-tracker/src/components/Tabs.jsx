import React from "react";
import TextComponent from "./TextComponent";

const Tabs = ({ data, selected, setSelected }) => {
    return (
        <div className="flex w-full rounded-md bg-gray-500 h-10 justify-center items-center px-[2px]">
            {data.map((tab, index) => {
                return (
                    <div
                        key={index}
                        className={`h-9 ${
                            selected == index
                                ? "bg-white text-black rounded-md"
                                : "grayscale"
                        } cursor-pointer`}
                        onClick={() => {
                            setSelected(index);
                        }}
                    >
                        <Tab tabVal={tab} />
                    </div>
                );
            })}
        </div>
    );
};

const Tab = ({ tabVal }) => (
    <div className="py-[6px] px-4">
        <TextComponent
            text={tabVal.text}
            icon={tabVal.icon}
            iconColor={tabVal.iconColor}
            iconType="material"
        />
    </div>
);

export default Tabs;
