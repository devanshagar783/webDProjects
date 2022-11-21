import React, { useState } from "react";
import "./index.css";

function AddDecNum({ text, set }) {
    const [num, setNum] = useState(0);

    const changeNum = (val) => {
        if (val < 0) return;
        setNum(val);
        set(val);
    };

    return (
        <div className="modify_container">
            <p className="">{`${text} : `}</p>
            <span className="input_edit_btn" onClick={() => changeNum(num + 1)}>
                +
            </span>
            <input
                className="input_modifier"
                type="number"
                maxLength={3}
                value={num}
                onChange={(e) => setNum(e.target.value)}
                disabled
            />
            <span
                className="input_edit_btn"
                onClick={(e) => changeNum(num - 1)}
            >
                -
            </span>
        </div>
    );
}

export default AddDecNum;
