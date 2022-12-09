import { Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import InputC from "../InputComponent";
import "./index.css";

function SearchView(props) {
    const { location, setLocation, guests, setGuests, setResullts, onClick } =
        props;
    const [adults, setAdults] = useState(0);
    const [child, setChild] = useState(0);

    const areEqual = (prevProps, nextProps) => {

        console.log("hel;llfdaof",nextProps,prevProps)
        if (prevProps.location === nextProps.location) {
          return true                                    // donot re-render
        }
        return false                                     // will re-render
      }

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
                        ad={adults}
                        setAd={setAdults}
                        ch={child}
                        setCh={setChild}
                        disabled
                    />
                </div>
                <div className="search_box search_button" onClick={onClick}>
                    <Search />
                    <p>Search</p>
                </div>
            </div>
        </div>
    );
}

export default React.memo(SearchView);
