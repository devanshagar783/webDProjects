import React, { useState } from "react";
import Text from "./Text";

const Tabs = () => {
    const tabs = [
        {
            text: "Expense",
            icon: "north_east",
        },
        {
            text: "Income",
            icon: "south_west",
        },
        {
            text: "Investment",
            icon: "trending_up",
        },
    ];
    const [selected, setSelected] = useState(0)


    return (
        <div className="flex w-full rounded-md bg-gray-500 h-10 justify-center items-center px-[2px]">
            {tabs.map((tab, index) => {
                return (
                    <div key={index} className={`h-9 ${selected == index ? "bg-white text-black rounded-md" : ""}`}>
                        <Tab tabVal={tab} />
                    </div>
                );
            })}
        </div>
    );
};

const Tab = ({ tabVal }) => (
    <div className="py-[6px] px-4">
        <Text text={tabVal.text} icon={tabVal.icon} />
    </div>
);

export default Tabs;
