import MaterialIconsReact, { colorPalette } from "material-icons-react";
import React from "react";

const TextComponent = ({ icon, text, orientation, iconColor, iconType, iconClassName }) => {
    return (
        <div
            className={`flex ${orientation == "reverse" ? "flex-row-reverse" : "flex-row"
                } gap-2 `}
        >
            {iconType !== 'material' ? <img src={icon} alt="" className={iconClassName} /> :
                <MaterialIconsReact
                    icon={icon || "arrow_up"}
                    color={colorPalette?.[iconColor]?._700 || "#FFFFFF"}
                />}
            <p>{text}</p>
        </div>
    );
};

export default TextComponent;
