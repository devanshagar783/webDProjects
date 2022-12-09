import React, { useEffect, useState } from "react";
import AddDecNum from "../AddDecNum";
import "./index.css";

function InputC(props) {
    const { label, text, setText, type, size, ad, setAd, ch, setCh, disabled } = props;

    useEffect(() => {
        if(type==="guest")
            setText(ad + ch);
    }, [ad, ch]);

    const changeText = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="input_container">
            <div className="input_container_box">
                <p className="input_label">{label}</p>
                <input
                    className="input_text"
                    type="text"
                    value={text}
                    onChange={changeText}
                    maxLength={size}
                    disabled={disabled}
                />
            </div>
            {type === "guest" && (
                <div>
                    <AddDecNum text={"Adults"} set={setAd} value={ad} />
                    <AddDecNum text={"Child"} set={setCh} value={ch} />
                </div>
            )}
        </div>
    );
}

export default InputC;
