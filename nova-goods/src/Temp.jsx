import React, { useContext } from "react";
import { AppContext } from "./context/context";

const Temp = () => {
    const { onNameChange } = useContext(AppContext);
    return (
        <button onClick={() => onNameChange("devansh")}>
            Change user name
        </button>
    );
};

export default Temp;
