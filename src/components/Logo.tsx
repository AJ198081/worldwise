import {JSX} from "react";
import styles from './Logo.module.css';
import logo from '../logo.png'
import {Link} from "react-router-dom";

export default function Logo(): JSX.Element {
    return (
        <Link to={'/'}><img src={logo} alt="WorldWise logo" className={styles.logo}/></Link>
    )
}