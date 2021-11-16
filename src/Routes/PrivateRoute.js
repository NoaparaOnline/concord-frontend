// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// // import {  useSelector } from "react-redux";

// const PrivateRoute = ({component: Component, ...rest}) => {
//     // const userred = useSelector((state) => state?.logIn?.user);
    
//     return (


//         <Route {...rest} render={props => (
//             localStorage.getItem('userConcord') ?
//                 <Component {...props} />
//             : <Redirect to={{pathname: "/", state: {
//                 from: props.location
//               }
        
//         }} />
//         )} />
//     );
// };

// export default PrivateRoute;


import React from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ component: Component, routelink, ...rest }) => {
  const user = localStorage.getItem("userConcord");
  const userRole = JSON.parse(localStorage.getItem("userRoleConcord"));
  return (
    <Route
      {...rest}
      render={(props) =>
        user && routelink === userRole ? (
          <Component {...props} />
        ) : (
          <>
           { toast.error("Unauthorized Access")}
            <Redirect to="/" />
          </>
        )
      }
    />
  );
};

export default PrivateRoute;
