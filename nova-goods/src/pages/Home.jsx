import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import { Link } from "react-router-dom";

const Home = () => {
    const { name, productsList, onProductsChange } = useContext(AppContext);

    useEffect(() => {
        if (productsList.length === 0) {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((data) => {
                    onProductsChange(data);
                });
        }
    }, []);

    return (
        <>
            <div className="flex flex-col items-center mb-3">
                <div className="text-2xl font-bold mt-5">Welcome {name}</div>
                <div className="flex flex-wrap justify-center gap-5 mt-5">
                    {productsList.map((product) => (
                        <Link to={`product/${product.id}`} key={product.id}>
                            <div className="flex flex-col items-center gap-2 w-[300px] text-center border-2 border-black rounded-md p-3">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-40 h-40 object-contain"
                                />
                                <div className="text-lg font-bold">
                                    {product.title}
                                </div>
                                <div className="text-lg font-bold">
                                    ${product.price}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
