import Navbar from "./components/Navbar";
import { TransactionProvider } from "./contexts/TransactionContext";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <div className="bg-[#f0f1f6]">
            <TransactionProvider>
                <Navbar />
                <Dashboard />
            </TransactionProvider>
        </div>
    );
}

export default App;
