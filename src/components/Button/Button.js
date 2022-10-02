import classNames from "classnames";
import React from "react";
import styles from "./Button.module.css";

export default function Button({ colour, value, rounded }) {
    const getColour = () => {
        switch (colour) {
            case "primary":
                return styles.primary;
            default:
                return styles.black;
        }
    };
    return (
        <button className={classNames(styles.button, getColour(), rounded ? styles.rounded : null)}>
            {value}
        </button>
    );
}
