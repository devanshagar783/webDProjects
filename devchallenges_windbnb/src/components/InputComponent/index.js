import React from "react";
import "./index.css";

function InputC(props) {
    const { label, text, setText, size } = props;

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
                />
            </div>
        </div>
    );
}

export default InputC;
