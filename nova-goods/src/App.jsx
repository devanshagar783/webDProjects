import { AppContextProvider } from "./context/context";
import Temp from "./pages/Temp";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";

function App() {
    return (
        <AppContextProvider>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Temp />} />
                    <Route path="/product/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
}

export default App;
