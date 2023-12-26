import MaterialIconsReact, { colorPalette } from "material-icons-react";
import React from "react";

const Text = ({ icon, text, orientation, iconColor }) => {
    console.log("dev, ", iconColor);
    return (
        <div
            className={`flex ${
                orientation == "reverse" ? "flex-row-reverse" : "flex-row"
            } gap-2 `}
        >
            {/* <img src={icon} alt="" /> */}
            <MaterialIconsReact
                icon={icon}
                color={colorPalette?.[iconColor]?._700}
            />
            <p>{text}</p>
        </div>
    );
};

export default Text;
