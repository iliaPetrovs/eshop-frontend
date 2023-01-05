import classNames from "classnames";
import React from "react";
import Link from "next/link";

import styles from "./Rows.module.css";

export default function Rows({ rows }) {
    return (
        <div className={classNames("", styles.container)}>
            <div className={classNames("row", styles.subcontainer)}>
                {rows.map((row) => (
                    <div className="col-12 col-md-3">
                        <div className={styles.content}>
                            <div className={styles.row}>
                                <img src={row.image} alt="" />
                                <h2>{row.title}</h2>
                                <p>{row.body}</p>
                                <Link className={styles.link} href={row.href}>
                                    {row.link}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Rows.defaultProps = {
    rows: [
        {
            title: "Title",
            body: "Hey there, this is the body hehe",
            image: "https://i.etsystatic.com/22179317/r/il/c593b0/4233377459/il_680x540.4233377459_jyfc.jpg",
            href: "/",
            link: "Go home"
        },
        {
            title: "Title 2",
            body: "Hey there, this is the body hehe",
            image: "https://i.etsystatic.com/22179317/r/il/c593b0/4233377459/il_680x540.4233377459_jyfc.jpg",
            href: "/hello",
            link: "Is there a hello page?"
        },
        {
            title: "Title 3",
            body: "Hey there, this is the body hehe",
            image: "https://i.etsystatic.com/22179317/r/il/c593b0/4233377459/il_680x540.4233377459_jyfc.jpg",
            href: "/test",
            link: "Test"
        },
        {
            title: "Title 4",
            body: "Hey there, this is the body hehe",
            image: "https://i.etsystatic.com/22179317/r/il/c593b0/4233377459/il_680x540.4233377459_jyfc.jpg",
            href: "/about",
            link: "About"
        },
    ],
};
