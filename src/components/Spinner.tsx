import {JSX} from "react";
import styles from './Spinner.module.css';

export default function Spinner(): JSX.Element {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
        </div>
    );
}