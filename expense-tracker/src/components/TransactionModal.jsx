import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import "dayjs/locale/en-in";
import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";

const TransactionModal = ({ closeModal }) => {

    const [date, setDate] = useState((new Date()).toISOString().split('T')[0])

    return (
        <div className=" fixed left-0 right-0 bottom-0 top-0 bg-[#BDBDBD]/70">
            <div className="fixed flex flex-col w-max top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 border-black border-2 rounded-md px-5 py-2 border-solid">
                <p className=" text-black">New Transaction</p>
                {/* amount container */}
                <div className=" my-5 flex text-3xl overflow-hidden justify-center gap-2">
                    <p>₹</p>
                    <input placeholder="00.00" className="w-[150px] bg-transparent" />
                </div>
                {/* Date picker */}
                <div>
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale={"en-in"}
                    >
                        <DemoContainer components={["DatePicker"]} className="">
                            <DatePicker label="Date" value={dayjs(date)} onChange={setDate} />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                <div className=" my-2">
                <Tabs />
                </div>
                <button onClick={closeModal}>Done</button>
            </div>
        </div>
    );
};

export default TransactionModal;
