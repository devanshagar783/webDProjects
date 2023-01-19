import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OTP from "./Pages/OTP";
import TodoApp from "./Pages/TodoApp";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/todo"} element={<TodoApp />} />
                <Route path={"/otp"} element={<OTP />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
