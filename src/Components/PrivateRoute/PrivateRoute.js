import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import { userContext } from "../../App";
function PrivateRoute({ children, ...rest }) {
    const { allUsers} = useContext(userContext)
    const [users] = allUsers;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                users.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
export default PrivateRoute;