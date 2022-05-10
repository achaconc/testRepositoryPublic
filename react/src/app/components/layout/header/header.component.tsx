import React from "react";
import styles from './header.module.sass';
import logo from '../../../assets/images/langai-logo.svg';
import {Link} from "react-router-dom";

export const Header: React.FunctionComponent = () => {
    
    return (
        <header className={styles.header}>
            <div className={styles.logoBox}>
                <Link to='/'>
                    <img
                        alt='logo'
                        className={styles.logo}
                        src={logo}
                    />
                </Link>
            </div>
        </header>
    )
}