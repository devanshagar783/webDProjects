import React, { useState } from "react";
import TransactionModal from "../components/TransactionModal";

const Transactions = () => {
    const [showModal, setShowModal] = useState(false);
    const [transactionData, setTransactionData] = useState([]);

    const addTransaction = () => {
        setShowModal(true);
    };

    const onClose = (transaction) => {
        setTransactionData((prev) => [...prev, transaction]);
        setShowModal(false);
    };

    return (
        <div>
            <h1>Transactions</h1>
            <br />
            <button
                className="border border-1 border-black p-1 ml-2"
                onClick={addTransaction}
            >
                Add Transaction
            </button>
            {showModal && <TransactionModal onClose={onClose} />}
            {transactionData.map((transaction, index) => (
                <div key={index}>{transaction.description}</div>
            ))}
        </div>
    );
};

export default Transactions;
