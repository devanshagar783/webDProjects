import { AppContextProvider } from "./context/context";
import Temp from "./pages/Temp";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <AppContextProvider>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Temp />} />
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
}

export default App;
