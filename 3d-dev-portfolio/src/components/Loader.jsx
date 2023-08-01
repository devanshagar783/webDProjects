import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className="canvas-loader"></span>
            <p
                className="mt-[40px]"
                style={{ fontSize: 14, color: "f1f1f1", fontWeight: 800 }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

export default Loader;
