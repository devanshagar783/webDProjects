import React from "react";
import "./index.css";
import Button from "../Button";

function ButtonPage() {
    return (
        <div className="btnpage_container">
            <h2>Buttons</h2>
            <div className="btnpage_btn_demo">
                <p>{"<Button />"}</p>
                <Button text="Default" color="primary" endIcon="local_grocery_store"/>
            </div>
        </div>
    );
}

export default ButtonPage;
