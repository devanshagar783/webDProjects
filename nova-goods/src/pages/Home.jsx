import React, { useContext } from "react";
import { AppContext } from "../context/context";

const Home = () => {
    const { name } = useContext(AppContext);
    return <div>hello world {name}</div>;
};

export default Home;
