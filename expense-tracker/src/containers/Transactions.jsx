import React, { useRef, useState } from "react";
import TransactionModal from "../components/TransactionModal";
import { expenseCategories } from "../constants/DropdownItems";
import Summary from "./Summary";

const Transactions = () => {
    const [showModal, setShowModal] = useState(false);
    const [transactionData, setTransactionData] = useState(JSON.parse(localStorage.getItem("transactions")) || []);
    const modalRef = useRef(null);

    const outsideClickHandler = (e) => {
        if (e.target == modalRef.current)
            onClose()
    }

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
        <div className="mx-auto py-5 flex flex-col mt-3 max-w-2xl">
            <Summary data={transactionData} />
            <div className=" w-[300px] mt-8 " onClick={outsideClickHandler}>
                {showModal && <TransactionModal onClose={onClose} ref={modalRef} />}
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
                    <div key={index} className="flex w-full gap-2 items-center">
                        {transaction.categories && <img src={expenseCategories[transaction.categories[0]].icon || ""} alt="" className="h-[16px] w-[16px]" />}
                        <p className="flex-1">
                            {transaction.description}
                        </p>
                        <div className={`${transaction.type == 'Income' ? "text-green-600" : ""} flex`}>
                            {transaction.type == 'Income' ? "+ ₹ " : "- ₹ "}
                            <p>{transaction.amount}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transactions;
