import classNames from "classnames";
import React from "react";

import styles from "./Misc.module.css";

export default function Squiggle() {
    return (
        <div className={styles.squiggleHolder}>
            <div className={styles.ellipse}></div>
            <div className={classNames(styles.ellipse, styles.ellipse2)}></div>
        </div>
    );
}
