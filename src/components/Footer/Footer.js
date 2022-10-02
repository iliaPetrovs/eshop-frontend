import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Socials from "../Socials/Socials";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.links}>
                <h4>More links</h4>
                <div>
                    <div>
                        <span>
                            <a href="/">Home</a>
                        </span>
                        <span>
                            <a href="/">About</a>
                        </span>
                        <span>
                            <a href="/about">About</a>
                        </span>
                    </div>
                    <div>
                        <span>
                            <a href="/">All products</a>
                        </span>
                        <span>
                            <a href="/">Contact us</a>
                        </span>
                        <span>
                            <a href="/">About</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.newsletter}>
                <h4>Newsletter</h4>
                <p>Receive a voucher for a 10% discount when you sign up.</p>
                <div className={styles.signupContainer}>
                    <div className={styles.input}>
                        <Input
                            name="email"
                            placeholder="Give us your email ;)"
                        />
                    </div>
                    <div className={styles.button}>
                        <Button
                            value="SIGN UP"
                            colour="black"
                            rounded={false}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.socials}>
                <h4>Socials</h4>
                <Socials />
            </div>
        </div>
    );
}
