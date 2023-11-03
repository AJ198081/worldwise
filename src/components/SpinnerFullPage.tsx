import {JSX} from "react";
import Spinner from "./Spinner.tsx";
import styles from './SpinnerFullPage.module.css';

export default function SpinnerFullPage(): JSX.Element {
    return (
        <div className={styles.spinnerFullpage}>
            <Spinner/>
        </div>
    );
}