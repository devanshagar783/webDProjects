import MaterialIconsReact, { colorPalette } from "material-icons-react";
import React from "react";

const AmountContainer = ({ icon, iconColor, amount, title }) => {

    return (
        <div className="flex flex-col">
            <MaterialIconsReact
                icon={icon || "arrow_up"}
                color={colorPalette?.[iconColor]?._700 || "#FFFFFF"}
            />
            <div className=" font-bold  text-xl">{amount}</div>
            <div className={`text-${iconColor}-500 font-bold text-sm`}>{title}</div>
        </div>
    );
};

export default AmountContainer;
