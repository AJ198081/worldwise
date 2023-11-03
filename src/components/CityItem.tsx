import React, {JSX} from "react";
import {CitiesProp} from "../App.tsx";
import styles from './CityItem.module.css';
import {Link} from "react-router-dom";

const formatDate = (date: string) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

export default function CityItem({city}: {city: CitiesProp}): JSX.Element {
    // const { currentCity, deleteCity } = useState<CitiesProp>({} as CitiesProp);
    const { cityName, emoji: emojiIcon, date, id, position } = city;

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        // deleteCity(id);
    }

    return (
        <li>
            {/*<Link
                className={`${styles.cityItem} ${
                    id === currentCity.id ? styles["cityItem--active"] : ""
                }`}
                to={`${id}?lat=${position.lat}&lng=${position.lng}`}
            >*/}
                <Link
                className={`${styles.cityItem}`}
                to={`${id}/${cityName}?lat=${position.lat}&lng=${position.lng}`}
            >
                {/*<span className={styles.emoji}>{emoji.getUniCode(emojiIcon)}</span>*/}
                <span className={styles.emoji}>{emojiIcon}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>({formatDate(date)})</time>
                <button className={styles.deleteBtn} onClick={handleClick}>
                    &times;
                </button>
            </Link>
        </li>
    );
}