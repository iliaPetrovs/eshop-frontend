import classNames from "classnames";
import React from "react";
import Link from "next/link";
import Button from "../Button/Button";

import styles from "./CTAImage.module.css";

export default function CTAImage({ title, subtitle, body, link, image }) {
    return (
        <div className={classNames("", styles.container)}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className={styles.image}>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex">
                    <div className={styles.content}>
                        <div className={styles.headers}>
                            <h3>{subtitle}</h3>
                            <h1>{title}</h1>
                        </div>
                        <p>{body}</p>
                        <div className={styles.cta}>
                            <Link href={link}>
                                <Button value="Click here" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CTAImage.defaultProps = {
    title: "Title",
    subtitle: "Subtitle",
    body: "Body",
    link: "/hello",
    image: "https://i.etsystatic.com/22179317/r/il/c593b0/4233377459/il_680x540.4233377459_jyfc.jpg",
};
