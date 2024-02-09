import MaterialIconsReact from "material-icons-react";
import React, { useState } from "react";
import { expenseCategories } from "../constants/DropdownItems";
import { tabItems } from "../constants/TransactionTypes";
import Dropdown from "./Dropdown";
import InputC from "./Input";
import OutsideModalClick from "./OutsideModalClick";
import Tabs from "./Tabs";

const TransactionModal = (props) => {
    const { onClose, transaction, isOpen } = props;

    if (!isOpen) return null;

    const [date, setDate] = useState(
        transaction?.date || new Date().toISOString().split("T")[0]
    );
    const [description, setDescription] = useState(
        transaction?.description || ""
    );
    const [amount, setAmount] = useState(transaction?.amount || "");
    const [selected, setSelected] = useState(transaction?.typeIndex || 0);
    const [categories, setCategories] = useState(transaction?.categories || []);

    const onModalClose = () => {
        if (amount && date && description)
            onClose({
                id: transaction?.id,
                amount,
                date,
                description,
                type: tabItems[selected].text,
                typeIndex: selected,
                categories,
            });
        else onClose();
    };

    return (
        <div className=" fixed left-0 right-0 bottom-0 top-0 bg-[#BDBDBD]/70">
            <OutsideModalClick onClose={onClose}>
                <div className="fixed flex flex-col w-max top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 border-black border-2 rounded-md px-5 py-2 border-solid bg-[#BDBDBD]">
                    <div className="flex justify-between">
                        <p className=" text-black">New Transaction</p>
                        <div className="cursor-pointer" onClick={onClose}>
                            <MaterialIconsReact icon="close" />
                        </div>
                    </div>
                    {/* amount container */}
                    <div className=" my-5 flex text-3xl overflow-hidden justify-center gap-2">
                        <p>₹</p>
                        <input
                            type="number"
                            placeholder="00.00"
                            className="w-[150px] bg-transparent focus:outline-none"
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
            </OutsideModalClick>
        </div>
    );
};

export default TransactionModal;
