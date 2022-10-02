import React from "react";

import styles from "./Socials.module.css";

export default function Socials() {
    return (
        <>
            <div className={styles.socials}>
                <a href="https://www.facebook.com/caninearcade" target="_blank">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com/caninearcade" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/caninearcade" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/caninearcade" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <div className={styles.bottom}>
                <div>
                    <span className={styles.copyright}>Copyright 2022 FujiFox</span>
                </div>
                <div>
                    <i className="fab fa-paypal payments"></i>
                    <i className="fab fa-cc-visa payments"></i>
                    <i className="fab fa-cc-mastercard payments"></i>
                    <i className="fab fa-cc-amex payments"></i>
                </div>
            </div>
        </>
    );
}
