import React, { useEffect, useState } from "react";
import AddDecNum from "../AddDecNum";
import "./index.css";

function InputC(props) {
    const { label, text, setText, type, size, addntlBtns, disabled } = props;
    const [adults, setAdults] = useState(0);
    const [child, setChild] = useState(0);

    useEffect(() => {
        setText(adults + child);
    }, [adults, child]);

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
                    <AddDecNum text={"Adults"} set={setAdults} />
                    <AddDecNum text={"Child"} set={setChild} />
                </div>
            )}
        </div>
    );
}

export default InputC;
