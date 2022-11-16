import React from "react";
import './index.css'
import Reviews from "../Reviews";
import image from '../../assets/Hero Image.png'

function Home() {
    return (
        <div className="home_container">
            <div className="home_intro">
                <p className="welcoome_text">OnDeck is your remote <span>conference calling tool</span></p>
                <p>
                    On deck is a service that allows you to create beatutiful,
                    online, and encrypted video calls for your remote team.
                </p>
                <button type="button">Try for free</button>
                <Reviews />
            </div>
            <div className="image_container"> 
                <img src={image} />
            </div>
        </div>
    );
}

export default Home;
