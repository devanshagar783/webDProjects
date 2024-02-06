import React, { useRef, useState } from "react";
import TransactionModal from "../components/TransactionModal";
import { expenseCategories } from "../constants/DropdownItems";
import Summary from "./Summary";
import MaterialIcon, { colorPalette } from "material-icons-react";
import bill from "../assets/bill.png";
import OutsideModalClick from "../components/OutsideModalClick";

const Transactions = () => {
    const [showModal, setShowModal] = useState(false);
    const [transactionData, setTransactionData] = useState(
        JSON.parse(localStorage.getItem("transactions")) || []
    );
    const [tranData, setTranData] = useState(null);

    const addTransaction = () => {
        setShowModal(true);
    };

    const onClose = (transaction) => {
        if (transaction?.amount > 0) {
            if (transaction?.id > -1) {
                let tempTransactions = [...transactionData];
                tempTransactions[transaction.id - 1] = transaction;
                setTransactionData(tempTransactions);
                localStorage.setItem(
                    "transactions",
                    JSON.stringify([...tempTransactions])
                );
            } else {
                transaction.id = transactionData?.length + 1;
                setTransactionData((prev) => [...prev, transaction]);
                localStorage.setItem(
                    "transactions",
                    JSON.stringify([...transactionData, transaction])
                );
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
                            className="flex w-full gap-2 items-center border-b "
                        >
                            {transaction.categories && (
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
                                <MaterialIcon
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
