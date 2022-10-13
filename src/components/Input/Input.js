import classNames from "classnames";
import React from "react";
import styles from "./Input.module.css";

export default function Input({ value, name, placeholder, rounded }) {
    return (
        <>
            <label className={styles.label} htmlFor={name} >{name}</label>
            <input
                className={classNames(
                    styles.input,
                    rounded ? styles.rounded : null
                )}
                value={value}
                name={name}
                placeholder={placeholder}
            />
        </>
    );
}
