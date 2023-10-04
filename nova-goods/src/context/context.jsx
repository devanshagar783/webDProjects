import { createContext, useState } from "react";

export const AppContext = createContext({
    name: "",
    handleNameChange: (name) => {},
    productsList: [],
    onProductsChange: (list) => {},
    cartList: [],
    onCartChange: (list) => {},
});

export const AppContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [productsList, setProductsList] = useState([]);
    const [cartList, setCartList] = useState([]);

    const handleNameChange = (name) => {
        setName(name);
    };

    const handleProductsChange = (list) => {
        setProductsList(list);
    };

    const handleCartChange = (list) => {
        setCartList(list);
    };

    const contextValue = {
        name,
        onNameChange: handleNameChange,
        productsList,
        onProductsChange: handleProductsChange,
        cartList,
        onCartChange: handleCartChange,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
