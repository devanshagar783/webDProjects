import { createContext, useState } from "react"

export const ExpenseContext = createContext({
    totalExpense: 0,
    onExpenseChange: (exp) => {},
})

export const ExpenseContextProvider = ({children}) => {
    const [expense, setExpense] = useState(0);

    const handleExpenseChange = (e) => {
        setExpense(e);
    }

    const contextValue = {
        totalExpense: expense,
        onExpenseChange: handleExpenseChange,
    }

    return <ExpenseContext.Provider value={contextValue}>
        {children}
    </ExpenseContext.Provider>
}