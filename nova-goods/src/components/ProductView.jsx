import React from "react";

const ProductView = ({product}) => {
    return (
        <div className="flex flex-col items-center gap-2 w-[300px] text-center border-2 border-black rounded-md p-3">
            <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 object-contain"
            />
            <div className="text-lg font-bold">{product.title}</div>
            <div className="text-lg font-bold">${product.price}</div>
        </div>
    );
};

export default ProductView;
