import React from "react";
import Squiggle from "./Squiggle";

import styles from "./Misc.module.css";

export default function Header({ title }) {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <Squiggle />
        </div>
    );
}
