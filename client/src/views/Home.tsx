import React, {FC} from "react";
import {Redirect} from "react-router-dom";
import {store} from "../index";
import {LOGIN_ROUTE} from "../utils/consts";

export const Home: FC = () => {
    if (!(store.isAuth)) {
        return <Redirect to={LOGIN_ROUTE} />;
    }
    return (
        <>
            <h1>Home</h1>
        </>
    );
}