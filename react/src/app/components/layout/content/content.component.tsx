import React from "react";
import styles from './content.module.sass';

export const Content: React.FunctionComponent = (
    {
        children
    }
) => (
    <div className={styles.content}>
        {
            children
        }
    </div>
)