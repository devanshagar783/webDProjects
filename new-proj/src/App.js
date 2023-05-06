import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OTP from "./Pages/OTP";
// import Proj3 from "./Pages/ContextApi";
import TodoApp from "./Pages/TodoApp";
import ContextApi from "./Pages/ContextApi";
import SwiperJS from "./Pages/Swiper";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/todo"} element={<TodoApp />} />
                <Route path={"/otp"} element={<OTP />} />
                <Route path={'/context'} element={<ContextApi />} />
                <Route path={"/swiper"} element={<SwiperJS />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
