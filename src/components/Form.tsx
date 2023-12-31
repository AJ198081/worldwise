import React, { useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button.tsx";
import {useNavigate} from "react-router-dom";

export function convertToEmoji(countryCode: string) {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

function Form() {
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState<string>("");
    const [date, setDate] = useState<Date>(new Date());
    const [notes, setNotes] = useState("");

    const navigate = useNavigate();

    const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.target.innerText);

    }

    return (
        <form className={styles.form}>
            <div className={styles.row}>
                <label htmlFor="cityName">City name</label>
                <input
                    id="cityName"
                    onChange={(e) => setCityName(e.target.value)}
                    value={cityName}
                />
                {/* <span className={styles.flag}>{emoji}</span> */}
            </div>

            <div className={styles.row}>
                <label htmlFor="date">When did you go to {cityName}?</label>
                <input
                    id="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date.toLocaleDateString()}
                />
            </div>

            <div className={styles.row}>
                <label htmlFor="notes">Notes about your trip to {cityName}</label>
                <textarea
                    id="notes"
                    onChange={(e) => setNotes(e.target.value)}
                    value={notes}
                />
            </div>

            <div className={styles.buttons}>
                <Button onClick={buttonClickHandler} type={"primary"}>add</Button>
                <Button onClick={() => navigate(-1)} type={"back"}>&larr; Back</Button>
            </div>
        </form>
    );
}

export default Form;