import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import { Link } from "react-router-dom";
import ProductView from "../components/ProductView";

const Home = () => {
    const { name, productsList, onProductsChange } = useContext(AppContext);
    const [data, setData] = useState(productsList)

    useEffect(() => {
        if (productsList.length === 0) {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((data) => {
                    onProductsChange(data);
                });
        }
    }, []);

    useEffect(() => {
        if(productsList.length > 0)
            setData(productsList)
    }, [productsList])

    return (
        <>
            <div className="flex flex-col items-center mb-3">
                <div className="text-2xl font-bold mt-5">Welcome {name}</div>
                <div className="flex flex-wrap justify-center gap-5 mt-5">
                    {data.map((product) => (
                        <Link to={`product/${product.id}`} key={product.id}>
                            <ProductView product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
