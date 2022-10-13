import classNames from "classnames";
import React from "react";
import styles from "./Button.module.css";

export default function Button({ colour, value, rounded, onClick }) {
    const getColour = () => {
        switch (colour) {
            case "clear":
                return styles.clear;
            case "primary":
                return styles.primary;
            default:
                return styles.black;
        }
    };
    return (
        <button
            className={classNames(
                styles.button,
                getColour(),
                rounded ? styles.rounded : null
            )}
            onClick={onClick}
        >
            {value}
        </button>
    );
}

Button.defaultProps = {
    colour: "black",
    value: "Default",
    rounded: false,
    onClick: () => console.log("Default button"),
};
