import { useState } from "react";
import "./App.css";
import BnbView from "./components/BnbView";
import Navbar from "./components/NavBar";
import { AppContext } from "./contexts/AppContext";
import stays from "./stays.json";

function App() {
    const [guests, setGuests] = useState(0);
    const [results, setResults] = useState(stays);
    const [location, setLocation] = useState(`${results[0].city}, ${results[0].country}`);

    // useEffect(()=>{
    //     stays.forEach(item => {
    //         console.log("hello   ",item.beds)
    //     })
    // },[guests])

    return (
        <div className="App">
            <AppContext.Provider value={{location, setLocation, guests, setGuests}}>
                <div className="App_main_container App_margin">
                    <Navbar
                        setResults={setResults}
                    />
                    <div className="App_stays_container">
                        <div className="App_stays_view_header">
                            <h1>Stays in {location}</h1>
                            <span>{results?.length > 12 ? "12+" : (results?.length > 2 ? `${results?.length}+` : results?.length)} stays</span>
                        </div>
                        <div className="App_bnb_container">
                            {results.map((item, index) => {
                                return <BnbView data={item} key={index} />;
                            })}
                        </div>
                    </div>
                </div>
            </AppContext.Provider>
        </div>
    );
}

export default App;
