import React, {JSX} from "react";
import styles from './Button.module.css';

interface ButtonProps {

    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    type: "primary" | "back"
}

export default function Button({children, onClick, type}: ButtonProps): JSX.Element {

    return <button className={`${styles.btn} ${styles[type]}`} onClick={onClick} type={"button"}>
        {children}
    </button>
}

