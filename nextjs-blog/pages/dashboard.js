import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);

    //client side rendering
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:4000/dashboard");
            const data = await response.json();
            setDashboardData(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <h2>Loading....</h2>;
    }

    return (
        <>
            <h2>Dashboard</h2>
            <h2>Posts = {dashboardData.posts}</h2>
            <h2>Likes = {dashboardData.likes}</h2>
            <h2>Followers = {dashboardData.followers}</h2>
            <h2>Following = {dashboardData.following}</h2>
        </>
    );
};

export default Dashboard;
