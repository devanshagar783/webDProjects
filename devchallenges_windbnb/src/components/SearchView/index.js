import { Search } from "@mui/icons-material";
import React from "react";
import "./index.css";

function SearchView() {
    return (
        <div className="search_container">
            <div className="search_container1">
                SearchView
                <div>location</div>
                <div>guests</div>
                <div>
                    <Search type="buttom" />
                </div>
            </div>
        </div>
    );
}

export default SearchView;
