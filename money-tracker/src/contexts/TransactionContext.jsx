import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    transactions: []
};

const TransactionContext = createContext(initialState);

const transactionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            };
        default:
            return state;
    }
};

export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initialState);

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    };

    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    };

    return (
        <TransactionContext.Provider value={{ 
            transactions: state.transactions, 
            addTransaction, 
            deleteTransaction 
        }}>
            {children}
        </TransactionContext.Provider>
    );
};

// Custom hook to use the TransactionContext
export const useTransactions = () => {
    return useContext(TransactionContext);
};