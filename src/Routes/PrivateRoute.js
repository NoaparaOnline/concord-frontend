import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {  useSelector } from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
    const use1r = useSelector((state) => state?.logIn?.user);
    const user = localStorage.getItem('user');
    return (


        <Route {...rest} render={props => (
            user ?
                <Component {...props} />
            : <Redirect to={{pathname: "/", state: {
                from: props.location
              }
        
        }} />
        )} />
    );
};

export default PrivateRoute;