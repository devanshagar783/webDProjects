import MaterialIconsReact, { colorPalette } from "material-icons-react";
import React, { useEffect, useState } from "react";
import bill from "../assets/bill.png";
import TransactionModal from "../components/TransactionModal";
import { expenseCategories } from "../constants/DropdownItems";
import Summary from "./Summary";

const Transactions = () => {
    const [showModal, setShowModal] = useState(false);
    const [transactionData, setTransactionData] = useState(
        JSON.parse(localStorage.getItem("transactions")) || []
    );
    const [tranData, setTranData] = useState(null);

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactionData));
    }, [transactionData]);

    const addTransaction = () => {
        setShowModal(true);
    };

    const removeTransactionItem = (removeItem) => {
        const t = transactionData.filter((item) => item.id !== removeItem.id);
        setTransactionData(t);
    };

    const onClose = (transaction) => {
        if (transaction?.amount > 0) {
            if (transaction?.id > -1) {
                let tempTransactions = [...transactionData];
                const index = tempTransactions.findIndex(item => item.id === transaction.id);
                tempTransactions[index] = transaction
                setTransactionData(tempTransactions);
            } else {
                transaction.id = Date.now();
                setTransactionData((prev) => [...prev, transaction]);
            }
        }
        setShowModal(false);
    };

    return (
        <div className="mx-auto py-5 flex flex-col mt-3 max-w-2xl">
            <Summary data={transactionData} />
            <div className=" w-[300px] mt-8 ">
                <TransactionModal
                    isOpen={showModal}
                    transaction={tranData}
                    onClose={onClose}
                />
                {/* </OutsideModalClick> */}
                <div className="flex items-center w-full justify-between mb-5">
                    <h1>Transactions</h1>
                    <button
                        className="border border-1 border-black p-1 ml-2 rounded-full py-2 px-4"
                        onClick={addTransaction}
                    >
                        Add
                    </button>
                </div>
                <div className="flex flex-col gap-1">
                    {transactionData.map((transaction, index) => (
                        <div
                            key={index}
                            className="group flex w-full gap-2 items-center border-b"
                        >
                            <div className="absolute ml-[-30px] mt-[0px]">
                                <span
                                    className="material-icons text-[#9c3030] cursor-pointer pr-[30px] hidden group-hover:block"
                                    onClick={() =>
                                        removeTransactionItem(transaction)
                                    }
                                >
                                    delete
                                </span>
                            </div>
                            {transaction?.categories && (
                                <img
                                    src={
                                        transaction.categories[0] > -1
                                            ? expenseCategories[
                                                  transaction.categories[0]
                                              ].icon
                                            : bill
                                    }
                                    alt=""
                                    className="h-[16px] w-[16px]"
                                />
                            )}
                            <p className="flex-1">{transaction.description}</p>
                            <div
                                className={`${
                                    transaction.type == "Income"
                                        ? "text-green-600"
                                        : ""
                                } flex`}
                            >
                                {transaction.type == "Income" ? "+ ₹ " : "- ₹ "}
                                <p>{transaction.amount}</p>
                            </div>
                            <div
                                className=" cursor-pointer"
                                onClick={() => {
                                    setTranData(transaction);
                                    setShowModal(true);
                                }}
                            >
                                <MaterialIconsReact
                                    icon="edit"
                                    color={colorPalette.white}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Transactions;
