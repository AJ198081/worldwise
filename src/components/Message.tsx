import {JSX} from "react";
import styles from './Message.module.css';

export default function Message({message}: {message: string}): JSX.Element {
    return (
        <p className={styles.message}>
            <span role="img">👋</span> {message}
        </p>
    );
}