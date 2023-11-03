import {JSX} from "react";
import styles from './AppLayout.module.css';
import Sidebar from "../components/Sidebar.tsx";
import User from "../components/User.tsx";
import Map from "../components/Map.tsx";

export default function AppLayout(): JSX.Element {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
            <User />
        </div>
    );
}