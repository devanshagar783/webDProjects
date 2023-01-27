import { useState } from "react";
import "./App.css";
import BnbView from "./components/BnbView";
import Navbar from "./components/NavBar";
import { AppContext } from "./contexts/AppContext";
import stays from "./stays.json";

function App() {
    const [guests, setGuests] = useState(0);
    const [results, setResults] = useState(stays);
    const [location, setLocation] = useState(`${stays[0].country}`);
    const locationData = [];
    stays.forEach(item => {
        if(!locationData.includes(`${item.city}, ${item.country}`))
        locationData.push(`${item.city}, ${item.country}`)
    })



    // useEffect(()=>{
    //     stays.forEach(item => {
    //         console.log("hello   ",item.beds)
    //     })
    // },[guests])

    return (
        <div className="App">
            <AppContext.Provider value={{location, setLocation, guests, setGuests, setResults, locationData}}>
                <div className="App_main_container App_margin">
                    <Navbar
                        setResults={setResults}
                    />
                    <div className="App_stays_container">
                        <div className="App_stays_view_header">
                            <h1>Stays in {location}</h1>
                            <span>{results?.length > 12 ? "12+" : results?.length} stays</span>
                        </div>
                        <div className="App_bnb_container">
                            {results && results.map((item, index) => {
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
