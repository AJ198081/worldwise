import {JSX} from "react";
import styles from "./CityList.module.css";
import {CitiesProp} from "../App.tsx";
import Spinner from "./Spinner.tsx";
import Message from "./Message.tsx";
import CityItem from "./CityItem.tsx";

export default function CityList({cities, isLoading}: {cities: CitiesProp[], isLoading: boolean;}): JSX.Element {
    if (isLoading) return <Spinner/>;

    if (!cities.length) {
        return (
            <Message message={"Add your first city by clicking on a city on the map"} />
        )
    }

    return <ul className={styles.cityList}>
        {cities.map(city => <CityItem city={city} key={city.id}/>)}
    </ul>;
}