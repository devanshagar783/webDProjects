import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import "dayjs/locale/en-in";
import React, { useState } from "react";
import Tabs from "./Tabs";
import InputC from "./Input";

const TransactionModal = ({ onClose }) => {
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [selected, setSelected] = useState(0);

    const tabs = [
        {
            text: "Expense",
            icon: "north_east",
            iconColor: "red",
        },
        {
            text: "Income",
            icon: "south_west",
            iconColor: "green",
        },
        {
            text: "Investment",
            icon: "trending_up",
            iconColor: "blue",
        },
    ];

    const onModalClose = () => {
        onClose({
            amount,
            date,
            description,
            type: tabs[selected].text,
        });
    };

    return (
        <div className=" fixed left-0 right-0 bottom-0 top-0 bg-[#BDBDBD]/70">
            <div className="fixed flex flex-col w-max top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 border-black border-2 rounded-md px-5 py-2 border-solid">
                <p className=" text-black">New Transaction</p>
                {/* amount container */}
                <div className=" my-5 flex text-3xl overflow-hidden justify-center gap-2">
                    <p>₹</p>
                    <input
                        placeholder="00.00"
                        className="w-[150px] bg-transparent"
                        value={amount}
                        onChange={setAmount}
                    />
                </div>
                {/* Date picker */}
                <div>
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        adapterLocale={"en-in"}
                    >
                        <DemoContainer components={["DatePicker"]} className="">
                            <DatePicker
                                label="Date"
                                value={dayjs(date)}
                                onChange={(e) => setDate(e)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
                {/* Transactino Type */}
                <div className="my-2">
                    <Tabs
                        data={tabs}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </div>
                {/* Description */}
                <InputC
                    icon="north_east"
                    value={description}
                    bgColor="bg-gray-500"
                    className="placeholder:"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description of Transaction"
                    title="Description"
                />
                <button
                    className="w-[200px] self-center bg-black py-3 mt-5 rounded-full"
                    onClick={onModalClose}
                >
                    Add Transaction
                </button>
            </div>
        </div>
    );
};

export default TransactionModal;
