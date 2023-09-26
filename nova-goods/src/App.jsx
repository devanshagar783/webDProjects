import { useContext, useEffect } from "react"
import { AppContext, AppContextProvider } from "./context/context"
import Temp from "./Temp"
import Home from "./Home"

function App() {


  return (
    <AppContextProvider>
        <Home />
        <Temp />
    </AppContextProvider>
  )
}

export default App
