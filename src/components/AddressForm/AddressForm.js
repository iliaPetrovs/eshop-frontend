import classNames from "classnames";
import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./AddressForm.module.css";

export default function AddressForm({ handleBack, handleSubmit }) {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div>
                    <h4>Contact details</h4>
                    <div className={styles.input}>
                        <Input
                            value=""
                            name="Email"
                            placeholder="example@email.com"
                        />
                    </div>
                </div>
                <div>
                    <h4>Address</h4>
                    <div className={styles.input}>
                        <Input
                            value=""
                            name="Country"
                            placeholder="United Kingdom"
                        />
                    </div>
                    <div className={styles.input}>
                        <Input
                            value=""
                            name="Full Name"
                            placeholder="Bean Poot"
                        />
                    </div>
                    <div className={styles.input}>
                        <Input
                            value=""
                            name="Street Address"
                            placeholder="123 The Street"
                        />
                    </div>
                    <div className={classNames(styles.dualInput, styles.input)}>
                        <div>
                            <Input
                                value=""
                                name="City/State"
                                placeholder="City/State"
                            />
                        </div>
                        <div>
                            <Input
                                value=""
                                name="Postal/Zip code"
                                placeholder="Postal/Zip code"
                            />
                        </div>
                    </div>
                    <div className={styles.input}>
                        <Input
                            value=""
                            name="Phone"
                            placeholder="Telephone number"
                        />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button colour="clear" value="Back" onClick={handleBack} />
                    <Button
                        colour="primary"
                        value="Continue"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    );
}

AddressForm.defaultProps = {
    handleBack: (e) => {
        e.preventDefault();
        console.log("on back");
    },
    handleSubmit: (e) => {
        e.preventDefault();
        console.log("on submit");
    },
};
