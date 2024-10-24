import React, { useRef, useState } from "react";
import AmountContainer from "../components/AmountContainer";
import { tabItems } from "../constants/TransactionTypes";
import { useTransactions } from "../contexts/TransactionContext";
import TransactionModal from "../components/TransactionModal";
import MaterialIconsReact from "material-icons-react";
import TransactionItem from "../components/TransactionItem";


const Dashboard = () => {
    const { addTransaction, transactions } = useTransactions();
    const dialogRef = useRef(null)
    const Aaaa = "AcUnitOutlinedIcon"

    const handleAddTransaction = (e) => {
        dialogRef.current.showModal()
    };

    return (
        <div className="mx-auto py-5 flex flex-row mt-3 max-w-max gap-4">
            <div className="bg-white padding-10 rounded-xl p-6">
                <div className="flex">
                    {tabItems.map((item, index) => {
                        return (
                            <div className="min-w-[150px]" key={index}>
                                <AmountContainer
                                    title={item.text}
                                    icon={item.icon}
                                    iconColor={item.iconColor}
                                    amount={"₹1000"}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between gap-4">
                    <p className="text-xl">Your Transactions</p>
                    <div
                        className="cursor-pointer py-1 px-3 border border-1 border-black border-solid rounded-full w-200"
                        onClick={handleAddTransaction}
                    >
                        + Add
                    </div>
                </div>
                {transactions.map((item, index) => {
                    if(index <= 3) return <TransactionItem key={index} transaction={item} />
                })}
            </div>
            <TransactionModal dRef={dialogRef} />
        </div>
    );
};

export default Dashboard;
