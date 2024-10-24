import MaterialIconsReact from "material-icons-react";
import React from "react";

const TransactionItem = (transaction) => {
    const { category, title, date, amount } = transaction;
    return <div className="flex gap-4">
        <MaterialIconsReact
            icon={category}
            size={48}
        />
        <div className="flex flex-col gap-3">
            <div>{title}</div>
            <div>{date}</div>
        </div>
        <div className="text-xl font-bold">
            {amount}
        </div>
    </div>
};

export default TransactionItem;
