import classNames from "classnames";
import React, { useState } from "react";

import styles from "./Misc.module.css";

export default function Quantity({value, onIncrease, onDecrease}) {
    const [val, setVal] = useState(1);

    const handleQuantity = (event) => {
        const number = event.target.value;
        if (val < 1 || isNaN(val)) {
            setVal(0);
        }
        setVal(number);
    };

    const handleOnChange = (event) => {
        setVal(event.target.value);
    };
    return (
        <>
            <div className={styles.quantityBox}>
                <button
                    className={styles.decrease}
                    onClick={() => onDecrease()}
                    disabled={value < 1}
                >
                    <i
                        className={classNames("fa-solid fa-minus", styles.icon)}
                    ></i>
                </button>
                <input
                    type="number"
                    value={value}
                    onChange={handleOnChange}
                    onFocus={(e) => e.target.select()}
                    onBlur={handleQuantity}
                    min="1"
                    max="99"
                    disabled
                />
                <button
                    className={styles.increase}
                    onClick={onIncrease}
                    disabled={value > 98}
                >
                    <i
                        className={classNames("fa-solid fa-plus", styles.icon)}
                    ></i>
                </button>
            </div>
        </>
    );
}
