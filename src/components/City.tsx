import {JSX} from "react";
import styles from "./City.module.css";
import Button from "./Button.tsx";
import {CitiesProp} from "../App.tsx";
import {useParams, useSearchParams} from "react-router-dom";

const formatDate = (date: string | null) => {

    if(date === null){
        return '';
    }

    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    }).format(new Date(date))
};

export default function City({city}: {city: CitiesProp}): JSX.Element {

    /*const currentCity = {
        cityName: "Lisbon",
        emoji: "🇵🇹",
        date: "2027-10-31T15:59:59.138Z",
        notes: "My favorite city so far!",
    };*/

    // const {cityName, emoji, date, notes} = currentCity;

    const {id, name} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(`Id: ${id}, Name: ${name}`);

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
        <div className={styles.city}>
            <div className={styles.row}>
                <h6>{city.cityName}</h6>
                <h3>
                    <span>{city.emoji}</span>
                </h3>
                <h6>Located at {lat} : {lng}</h6>
            </div>

            <div className={styles.row}>
                <h6>You went to {city.cityName} on</h6>
                <p>{formatDate(city.date || null)}</p>
            </div>

            {city.notes && (
                <div className={styles.row}>
                    <h6>Your notes</h6>
                    <p>{city.notes}</p>
                </div>
            )}

            <div className={styles.row}>
                <h6>Learn more</h6>
                <a
                    href={`https://en.wikipedia.org/wiki/${city.cityName}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Check out {city.cityName} on Wikipedia &rarr;
                </a>
            </div>

            <div>
                <button onClick={() => {setSearchParams({lat: "23", lng: "45"})}}>Change Position</button>
                <Button/>
            </div>
        </div>
    );
}