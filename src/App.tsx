import React, {JSX, SetStateAction, useEffect, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Product from "./pages/Product.tsx";
import Pricing from "./pages/Pricing.tsx";
import Home from "./pages/Home.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Login from "./pages/Login.tsx";
import AppLayout from "./pages/AppLayout.tsx";
import CityList from "./components/CityList.tsx";
import CountryList from "./components/CountryList.tsx";
import City from "./components/City.tsx";
import Form from "./components/Form.tsx";

export interface CitiesProp {
    "cityName": string,
    "country": string,
    "emoji": string,
    "date": string,
    "notes": string,
    "position": {
        "lat": number,
        "lng": number
    },
    "id": number
}

const fetchCitiesData = async (signal: AbortController['signal'], setIsLoading: React.Dispatch<SetStateAction<boolean>>) => {
    try {
        console.log(signal);
        setIsLoading(true);
        const res = await fetch(`${baseUrl}/cities`);
        const data: CitiesProp[] = await res.json();
        return data;
    } catch (e) {
        console.log("Error fetching request data");
    } finally {
        setIsLoading(false);
    }
}

const baseUrl: string = 'http://localhost:10000';
export default function App(): JSX.Element {

    const [cities, setCities] = useState<CitiesProp[]>([] as CitiesProp[]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(function () {

        const abortController = new AbortController();

        //Can use an immediately invoked function to set the cities
        /*(async () => {
            try {
                setIsLoading(true);
                const res = await fetch(`${baseUrl}/cities`);
                const data: CitiesProp = await res.json();
                setCities(data);
            } catch (e) {
                console.log("Error fetching cities data");
            } finally {
                setIsLoading(false);
            }
        })();*/

        //Alternative approach

        (async () => {
            const citiesData = await fetchCitiesData(abortController.signal, setIsLoading);
            setCities(citiesData!);
        })();

        return abortController.abort("Aborting for React Strict Mode");

    }, []);


    return <div>
        <BrowserRouter>
            <Routes>
                <Route index={true} path={"/"} element={<Home/>}/>
                <Route path={"/product"} element={<Product/>}/>
                <Route path={"/pricing"} element={<Pricing/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/app"} element={<AppLayout/>}>
                    <Route index={true} element={<Navigate to={'cities'} />}/>
                    <Route path={"cities"} element={<CityList cities={cities} isLoading={isLoading}/>}/>
                    <Route path={"cities/:id/:name"} element={<City city={cities[0]}/>}/>
                    <Route path={"countries"} element={<CountryList cities={cities} isLoading={isLoading}/>}/>
                    <Route path={"form"} element={<Form />}/>
                </Route>
                <Route path={"*"} element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>;
}

