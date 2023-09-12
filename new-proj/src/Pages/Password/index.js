import React, { useEffect, useMemo, useState } from "react";
import "./index.css";
import { Done, Circle } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";

const Password = () => {
    const [pass, setPass] = useState("");
    const [list, setList] = useState([
        { text: "Contains a uppercase letter", state: false },
        { text: "Contains a number", state: false },
        { text: "Contains a special character", state: false },
        { text: "Is greater than 6 characters", state: false },
        { text: "Contains a lowercase letter", state: false },
    ]);
    const [strength, setStrength] = useState(0);
    const [color, setColor] = useState("error");
    const updateStrength = useMemo(() => {
        let strength = 0;
        list.forEach((item) => {
            if (item.state) strength++;
        });
        if (strength === 5) setColor("success");
        else if (strength >= 3) setColor("warning");
        else setColor("error");
        setStrength(strength * 20);
    }, [list]);

    useEffect(() => {
        list[0].state = /[A-Z]/g.test(pass);
        list[1].state = /[0-9]/g.test(pass);
        list[2].state = /[^A-Za-z0-9]/g.test(pass);
        list[3].state = /.{6,}/g.test(pass);
        list[4].state = /[a-z]/g.test(pass);
        setList([...list]);
    }, [pass]);

    const updatePass = (e) => {
        setPass(e.target.value);
    };

    const isBtnDisabled = () => {
        return strength < 100;
    };

    return (
        <div className="pass-container">
            <div className="pass-box-container">
                Enter Password
                <input type="password" value={pass} onChange={updatePass} />
                <div>
                    Make sure your password :
                    {list.map((item, index) => (
                        <li key={index} className="list-item">
                            {item.state ? (
                                <Done className="done" />
                            ) : (
                                <Circle className="circle" />
                            )}
                            {item.text}
                        </li>
                    ))}
                </div>
                <LinearProgress
                    variant="determinate"
                    value={strength}
                    color={color}
                />
                <button disabled={isBtnDisabled()}>Submit</button>
            </div>
        </div>
    );
};

export default Password;
