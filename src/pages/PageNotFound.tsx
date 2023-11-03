import {JSX} from "react";
import PageNav from "../components/PageNav.tsx";
import {NavLink} from "react-router-dom";

export default function PageNotFound(): JSX.Element {
    return <div>
        <PageNav />
        PAGE_NOT_FOUND ☹️😔😔
        <NavLink to={"/"}>Go back to the app</NavLink>
    </div>
}