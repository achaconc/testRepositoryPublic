import React from "react";
import styles from "./words.module.sass";

export const Words: React.FC<{ words: string[] }> = (props) => (
    <div>
        {props.words?.map((word, index) => (
            <div
                className={styles.wordsComponentBox}
                key={index}
            >
                {word}
            </div>
        ))}
    </div>
)