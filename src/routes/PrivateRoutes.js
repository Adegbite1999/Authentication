import { useAuth } from 'context/AuthContext'
import React from 'react'
import { Route, Redirect } from 'react-router'

function PrivateRoutes({ component: Component, ...rest }) {
    const { currentUser } = useAuth()
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
        >

        </Route>
    )
}

export default PrivateRoutes
