import {JSX} from "react";
import styles from "./CountryItem.module.css";
import {Country} from "./CountryList.tsx";

export default function CountryItem({country}: {country: Country}): JSX.Element {
    return (
        <li className={styles.countryItem}>
            <span>{country.emoji}</span>
            <span>{country.name} </span>
        </li>
    );
}