import React from "react";
import Squiggle from "./Squiggle";

import styles from "./Misc.module.css";

export default function Header({ title }) {
    return (
        <div className={styles.header}>
            <h2>{title}</h2>
            <Squiggle />
        </div>
    );
}
