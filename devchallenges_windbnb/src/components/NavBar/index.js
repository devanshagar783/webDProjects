import React, { useContext, useState } from "react";
import "./index.css";
// import { Search } from "@mui/material";
import { Search } from "@mui/icons-material";

import Logo from "../../assets/logo.png";
import SearchView from "../SearchView";
import { AppContext } from "../../contexts/AppContext";
import stays from "../../stays.json";

function Navbar(props) {
    const { location, guests, setResults } = useContext(AppContext);
    // const { setResullts } = props;
    const [search, setSearch] = useState(false);

    const handleClick = () => {
        setSearch(!search);
        if(search){
            setResults(stays.filter(item => {
                if(location.split(", ")[0] === item.city){
                    return item;
                }
                if(guests > 0 && guests <= item.maxGuests){
                    return item;
                }
                return null;
            }))
        }
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
