import {JSX} from "react";
import Spinner from "./Spinner.tsx";
import Message from "./Message.tsx";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem.tsx";
import {CitiesProp} from "../App.tsx";

export interface Country {
    id: number;
    name: string;
    emoji: string;
}

export default function CountryList({cities, isLoading}: { cities: CitiesProp[]; isLoading: boolean; }): JSX.Element {

    const countries = cities.map(city => {
        return {id: city.id, name: city.country, emoji: city.emoji} as Country
    });

    // const uniqueCountriesList = countries.filter((value, index) => countries.indexOf(value) === index);

/*    const uniqueCounties = countries.reduce((previousValue, currentValue) => {
            return previousValue.includes(currentValue) ? previousValue : previousValue.push(currentValue)
        },
        [] as Country[]);*/

    if (isLoading) return <Spinner/>;

    if (!countries.length) {
        return (
            <Message message={"Add your first city/country by clicking on a city/country on the map"}/>
        )
    }

    return <ul className={styles.countryList}>
        {countries.map(city => <CountryItem country={city}
                                                  key={city.id}/>)}
    </ul>;
}