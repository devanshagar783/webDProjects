import React, { useState } from "react";
import TransactionModal from "../components/TransactionModal";

const Transactions = () => {
    const [showModal, setShowModal] = useState(false);
    const [transactionData, setTransactionData] = useState(JSON.parse(localStorage.getItem("transactions")) || []);

    const addTransaction = () => {
        setShowModal(true);
    };

    const onClose = (transaction) => {
        if (transaction) {
            setTransactionData((prev) => [...prev, transaction]);
            localStorage.setItem("transactions", JSON.stringify([...transactionData, transaction]))
        }
        setShowModal(false);
    };

    return (
        <div className="px-10 py-5  w-[300px] ">
            {showModal && <TransactionModal onClose={onClose} />}
            <div className="flex items-center w-full justify-between mb-5">
                <h1>Transactions</h1>
                <button
                    className="border border-1 border-black p-1 ml-2 rounded-full py-2 px-4"
                    onClick={addTransaction}
                >
                    Add
                </button>
            </div>
            {transactionData.map((transaction, index) => (
                <div key={index} className="flex w-full justify-between">
                    <p>
                        {transaction.description}
                    </p>
                    <div className={`${transaction.type == 'Income' ? "text-green-600" : ""} flex`}>
                        {transaction.type == 'Income' ? "+ ₹" : "- ₹"}
                        <p>{transaction.amount}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Transactions;
