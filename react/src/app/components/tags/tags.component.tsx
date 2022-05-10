import React from "react";
import styles from "./tags.module.sass";

export const Tags: React.FC<{ tags: [string, number][] }> = (props) =>
(
    <div className={styles.tagsContent}>
        {props.tags.map((item, index) => (
            <div key={index} className={styles.tagsContainer}>
                <div className={styles.tagsBox}>{item[1]}</div>
                <div className={styles.tagsBox}
                    style={{ marginRight: '1rem' }}>
                    {item[0]}
                </div>
            </div>
        ))}
    </div>
)
