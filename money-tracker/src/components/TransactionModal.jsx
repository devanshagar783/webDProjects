import MaterialIconsReact from "material-icons-react";
import React, { useState } from "react";
import { tabItems } from "../constants/TransactionTypes";
import { expenseCategories } from "../constants/ExpenseCategories";
import Tabs from "./Tabs";
import Input from "./Input";
import Dropdown from "./Dropdown";

const TransactionModal = ({ dRef, transaction }) => {
    const [date, setDate] = useState(
        transaction?.date || new Date().toISOString().split("T")[0]
    );
    const [description, setDescription] = useState(
        transaction?.description || ""
    );
    const [amount, setAmount] = useState(transaction?.amount || "");
    const [categories, setCategories] = useState(transaction?.categories || []);
    const [transactionType, setTransactionType] = useState(transaction?.typeIndex || 0);

    const onModalClose = () => {
        dRef.current.close()
    }

    return (
        <dialog ref={dRef} className="mx-auto my-auto outline-none">
                <div className=" flex flex-col w-max border-black border-2 rounded-md px-5 py-2 border-solid bg-[#BDBDBD]">
                    <div className="flex justify-between">
                        <p className=" text-black">New Transaction</p>
                        <div className="cursor-pointer" onClick={onModalClose}>
                            <MaterialIconsReact icon="close" />
                        </div>
                    </div>
                    {/* amount container */}
                    <div className=" my-5 flex text-3xl overflow-hidden justify-center gap-2">
                        <p>₹</p>
                        <input
                            type="number"
                            placeholder="00.00"
                            className="w-[100px] bg-transparent focus:outline-none"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    {/* Date picker */}
                    <div>
                        <label
                            htmlFor="date"
                            className="absolute mt-[-10px] text-black text-sm ml-[8px] px-1 bg-[#BDBDBD]"
                        >
                            Date
                        </label>
                        <input
                            name="date"
                            type="date"
                            value={date}
                            className="px-3 py-2 rounded-md bg-[#BDBDBD] border-gray-500 border-2 text-black dark:[color-scheme:black]"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    {/* Transaction Type */}
                    <div className="my-2 w-max">
                        <Tabs
                            data={tabItems}
                            selected={transactionType}
                            setSelected={setTransactionType}
                        />
                    </div>
                    {/* Description */}
                    <Input
                        icon={""}
                        value={description}
                        bgColor="bg-gray-500"
                        className=""
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description of Transaction"
                        title="Description"
                    />
                    {/* Categories */}
                    <div className="mt-2 cursor-pointer">
                        <Dropdown
                            icon={"expand_more"}
                            title="Categories"
                            bgColor="bg-gray-500"
                            className="cursor-pointer"
                            data={expenseCategories}
                            onItemSelection={setCategories}
                            selected={categories}
                        />
                    </div>
                    <button
                        className="w-[200px] self-center bg-black py-3 mt-5 rounded-full"
                        onClick={onModalClose}
                    >
                        Add Transaction
                    </button>
                </div>
        </dialog>
    );
};

export default TransactionModal;
