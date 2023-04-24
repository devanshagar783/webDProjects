import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OTP from "./Pages/OTP";
// import Proj3 from "./Pages/ContextApi";
import TodoApp from "./Pages/TodoApp";
import ContextApi from "./Pages/ContextApi";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/todo"} element={<TodoApp />} />
                <Route path={"/otp"} element={<OTP />} />
                <Route path={'/context'} element={<ContextApi />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
