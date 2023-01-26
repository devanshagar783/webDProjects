import React from "react";
import "./index.css";
import { Star } from "@mui/icons-material";

const BnbView = ({ data }) => {
    if (!data)
        return <p>Error in reading data. Please try again after some time.</p>;
    else {
        return (
            <div className="bnb_container">
                <img src={data?.photo} alt="" />
                <div className="bnb_info">
                    <div className="bnb_details">
                        <div className="bnb_location_type">
                            <p className="bnb_host">SUPER HOST</p>
                            <div className="bnb_beds_info">
                                {data?.type}
                                {data?.beds && ` , ${data?.beds} beds`}
                            </div>
                        </div>
                        <div className="bnb_rating">
                            <div className="bnb_star">
                                <Star height="16px" />
                            </div>
                            <p>{data?.rating}</p>
                        </div>
                    </div>
                    <div className="bnb_title">{data?.title}</div>
                </div>
            </div>
        );
    }
};

export default BnbView;
