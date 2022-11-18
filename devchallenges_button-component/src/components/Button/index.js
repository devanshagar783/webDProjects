import React, { useEffect, useState } from "react";
import "./index.css";
import { LocalGroceryStore } from "@mui/icons-material";

function Button(props) {
    const {
        variant,
        disableShadow,
        disabled,
        startIcon,
        endIcon,
        size,
        color,
        text,
    } = props;

    console.log("propspsp hello ", startIcon);
    
    const Image = () => {
        return startIcon && startIcon === "local_grocery_store" ?
            <LocalGroceryStore /> : (
            endIcon && endIcon === "local_grocery_store" ? <LocalGroceryStore /> :'' )
    }

    // const className= `${variant === "outline" ? "btn_outline " : ''}
    //                     variant === "text" ? "btn_noOutline " : "" &&
    //                     disableShadow ? "btn_noShadow " : "" &&
    //                     disabled ? "btn_disabled " : ''
    //                     `

    const className = `${variant === "outline" ? "btn_outline" : ""} 
                        ${variant === "text" ? "btn_no_outline" : ""}
                        ${disableShadow ? "no_shadow" : ""}
                        ${disabled ? "btn_disabled" : ""}
                        ${
                            size === "sm"
                                ? "btn_sm"
                                : size === "md"
                                ? "btn_md"
                                : size === "lg"
                                ? "btn_lg"
                                : ""
                        }
                        ${startIcon ? "btn_flex" : ""}
                        ${endIcon ? "btn_flex flex_rev" : ""}
                        ${color === "primary"?"blue" : (color === "secondary" ? "black" : (color === "danger" ? 'red' : ""))}`;

    console.log("hellooo", className);
    return (
        <div className={`button_component ${className}`}>
            <Image />
            <p>{text}</p>
        </div>
    );
}

export default Button;
