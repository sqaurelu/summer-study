import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated ? (
                    render ? (
                        render(props)
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect // redirect하면서 alert?
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}

export default AuthRoute;
