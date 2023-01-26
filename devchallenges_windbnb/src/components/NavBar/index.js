import React, { useContext, useState } from "react";
import "./index.css";
// import { Search } from "@mui/material";
import { Search } from "@mui/icons-material";

import Logo from "../../assets/logo.png";
import SearchView from "../SearchView";
import { AppContext } from "../../contexts/AppContext";

function Navbar(props) {
    const { location, guests } = useContext(AppContext);
    // const { setResullts } = props;
    const [search, setSearch] = useState(false);

    const handleClick = () => {
        setSearch(!search);
    };

    return (
        <div className="navbar_maindiv">
            {/* {!search && ( */}
                <div className="navbar_container">
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <div className="navbar_filters">
                        <div className="search_opt" onClick={handleClick}>
                            {location}
                        </div>
                        <div
                            className="search_opt navbar_guest"
                            onClick={handleClick}
                        >
                            {guests > 0 ? `${guests}` : "Add"} Guests
                        </div>
                        <div className="search_opt search_icon">
                            <Search />
                        </div>
                    </div>
                </div>
            {/* )} */}
            {search && (
                <SearchView
                    onClick={()=>{handleClick()}}
                />
            )}
        </div>
    );
}

export default Navbar;
