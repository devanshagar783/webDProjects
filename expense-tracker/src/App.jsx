import "./App.css";
import Navbar from "./components/Navbar";
import Transactions from "./containers/Transactions";
import 'material-icons/iconfont/material-icons.css';

function App() {
    return (
        // <div className="bg-[#FFFFFF]">
        <div className="">
            <Navbar />
            <Transactions />
        </div>
    );
}

export default App;
