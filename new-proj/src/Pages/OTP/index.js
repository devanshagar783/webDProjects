import React, { useEffect, useState } from "react";
import "./index.css";
import PrivacyTip from "@mui/icons-material/PrivacyTip";
// import OtpInput from "react-otp-input";

const OTP = () => {
    const [otp, setOtp] = useState(0);
    const [error, setError] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setError(false);
        }, 2500)
    },[error])
    
    const onProceedClick = () => {
        if(otp!==2222){
            setError(true);
        }
    }

    return (
        <div className="otp_app">
            <div className="otp_container">
                <PrivacyTip fontSize="large" />
                <div className="otp_header">OPT Verification</div>
                {/* <OtpInput
                    value={otp}
                    onChange={setOtp}
                    hasErrored={error}
                    numInputs={4}
                    focusStyle={'otp_focusst'}
                    errorStyle={"otp_error"}
                    separator={<span>--</span>}
                /> */}
                <button className="opt_submit_btn" onClick={onProceedClick}>Proceed</button>
            </div>
        </div>
    );
};

export default OTP;
