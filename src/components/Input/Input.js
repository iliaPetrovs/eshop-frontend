import classNames from "classnames";
import React from "react";
import styles from "./Input.module.css";

export default function Input({ name, placeholder, rounded }) {
    return (
        <>
            <label htmlFor={name} />
            <input
                className={classNames(
                    styles.input,
                    rounded ? styles.rounded : null
                )}
                name={name}
                placeholder={placeholder}
            />
        </>
    );
}
