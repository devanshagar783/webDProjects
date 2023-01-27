import React, { useEffect } from "react";
import AddDecNum from "../AddDecNum";
import "./index.css";

function InputC(props) {
    const {
        label,
        text,
        setText,
        type,
        listData,
        size,
        ad,
        setAd,
        ch,
        setCh,
        disabled,
    } = props;

    console.log("list", listData);
    useEffect(() => {
        const addTotalGuests = (val) => {
            if (type === "guest") setText(val);
        };
        addTotalGuests(ad + ch);
    }, [ad, ch, setText, type]);

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
            {listData && (
                <ul className="input_data_list">
                    {listData.map((item) => {
                        return <li className="input_list_item" onClick={()=>{setText(item)}}>{item}</li>;
                    })}
                </ul>
            )}
        </div>
    );
}

export default InputC;
