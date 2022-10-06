import React, { useState } from "react";

import styles from "./Misc.module.css";

export default function Quantity() {
    const [val, setVal] = useState(1);

    const handleQuantity = (event) => {
        const number = event.target.value;
        console.log(number);
        if (val < 1 || isNaN(val)) {
            setVal(0);
        }
        setVal(number);
    };

    const handleOnChange = (event) => {
        setVal(event.target.value);
    };

    const handleDecrease = () => {
        if (val <= 1) {
            setVal(0);
            return;
        }
        setVal(val - 1);
    };

    return (
        <>
            <div className={styles.quantityBox}>
                <button
                    className={styles.decrease}
                    onClick={() => handleDecrease()}
                >
                    <span>-</span>
                </button>
                <input
                    type="number"
                    value={val}
                    onChange={handleOnChange}
                    onFocus={(e) => e.target.select()}
                    onBlur={handleQuantity}
                    min="1"
                    max="99"
                />
                <button
                    className={styles.increase}
                    onClick={() => setVal(Number(val) + 1)}
                >
                    <span>+</span>
                </button>
            </div>
        </>
    );
}
