import React, { useEffect, useState } from 'react'

const Summary = ({ data }) => {
    const [expense, setExpense] = useState({
        remaining: 0,
        income: 0,
        expense: 0,
        investment: 0,
    })

    useEffect(() => {
        let remaining = 0, income = 0, expense = 0, investment = 0;
        data.forEach((item) => {
            switch (item.type) {
                case "Income":
                    income += parseInt(item.amount)
                    remaining += parseInt(item.amount)
                    break;
                case "Expense":
                    expense += parseInt(item.amount)
                    remaining -= parseInt(item.amount)
                    break;
                case "Investment":
                    investment += parseInt(item.amount)
                    remaining -= parseInt(item.amount)
                    break;
            }
        })
        setExpense({ remaining, income, expense, investment })
    }, [data])

    const ExpenseView = ({ title, amount, color }) => {
        const textColor = `text-${color}-500`
        return <div className='flex flex-col py-2'>
            <div className={`${textColor}`}>
                {title}
            </div>
            <p className='text-3xl'>₹ {amount}</p>
        </div>
    }

    return (
        <div className='flex flex-col w-full'>
            Summary
            <ExpenseView title="Net Remaning" amount={expense.remaining} color="gray" />
            <div className='flex w-full justify-between'>
                <ExpenseView title="Income" amount={expense.income} color="green" />
                <ExpenseView title="Expenses" amount={expense.expense} color="red" />
                <ExpenseView title="Investments" amount={expense.investment} color="blue" />
            </div>
        </div>
    )
}

export default Summary