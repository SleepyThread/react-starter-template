import {isLoggedIn} from '../helper/Autentication';
import {Redirect, Route} from "react-router-dom";
import React from "react";


export const AppRoute = ({component, path, isPrivate, key}) => {

    if(isPrivate && !isLoggedIn()) {
        return <Redirect to="/login" />;
    } else {
        return <Route path={path} component={component} key={key}/>;
    }
};