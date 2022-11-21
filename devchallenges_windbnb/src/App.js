import { useState } from "react";
import "./App.css";
import BnbView from "./components/BnbView";
import Navbar from "./components/NavBar";
import stays from "./stays.json";

function App() {
    const [location, setLocation] = useState("Finland");
    const [guests, setGuests] = useState(0);
    const [results, setResults] = useState([]);

    return (
        <div className="App">
            <div className="App_main_container App_margin">
                <Navbar
                    location={location}
                    setLocation={setLocation}
                    guests={guests}
                    setGuests={setGuests}
                    setResults={setResults}
                />
                <div className="App_stays_container">
                    <div className="App_stays_view_header">
                        <h1>Stays in Finland</h1>
                        <span>12+ stays</span>
                    </div>
                    <div className="App_bnb_container">
                        {stays.map((item) => {
                            return <BnbView data={item} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
