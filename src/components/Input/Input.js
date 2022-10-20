import classNames from "classnames";
import React from "react";
import styles from "./Input.module.css";

export default function Input({
    value,
    name,
    placeholder,
    rounded,
    hideLabel,
    onChange,
    disabled,
    type
}) {
    return (
        <>
            <label className={styles.label} htmlFor={name}>
                {hideLabel ? "" : name}
            </label>
            <input
                className={classNames(
                    styles.input,
                    rounded ? styles.rounded : null
                )}
                value={value}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                type={type}
            />
        </>
    );
}

Input.defaultProps = {
    hideLabel: false,
    disabled: false,
};
