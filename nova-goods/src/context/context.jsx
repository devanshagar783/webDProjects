import { createContext, useState } from "react";

export const AppContext = createContext({
    name,
    handleNameChange: (name) => {}
})

export const AppContextProvider = ({children}) => {
    const [name, setName] = useState("")

    const handleNameChange = (name) => {
        console.log("this called",name)
        setName(name)
    }

    const contextValue = {
        name,
        onNameChange: handleNameChange,
    }

    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
}