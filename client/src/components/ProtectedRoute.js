import React from "react";
import {Redirect, Route} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";

const ProtectedRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem("token") ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: {LOGIN_ROUTE},
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};
export default ProtectedRoute;
