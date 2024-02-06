import React, { useEffect, useRef } from "react";

const OutsideModalClick = (props) => {
    const { onClose, children } = props;
    const ref = useRef(null);

    useEffect(() => {
        function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose && onClose();
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    if (!children) return null;
    return <div ref={ref}>{children}</div>;
};

export default OutsideModalClick;
