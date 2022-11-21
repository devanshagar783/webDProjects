import { Search } from "@mui/icons-material";
import React from "react";
import InputC from "../InputComponent";
import "./index.css";

function SearchView(props) {
    const { location, setLocation, guests, setGuests, setResullts } = props;

    return (
        <div className="search_container">
            <div className="search_container1">
                <div className="search_box">
                    <InputC
                        label="LOCATION"
                        text={location}
                        setText={setLocation}
                        type="location"
                    />
                </div>
                <div className="search_box">
                    <InputC
                        label="GUESTS"
                        text={guests}
                        setText={setGuests}
                        type="guest"
                        size={3}
                        addntlBtns
                        disabled
                    />
                </div>
                <div className="search_box search_button">
                    <Search />
                    <p>Search</p>
                </div>
            </div>
        </div>
    );
}

export default SearchView;
