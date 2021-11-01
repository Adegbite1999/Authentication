import React from 'react';
import Home from 'components/Index';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from 'components/login/Login';
import User from 'components/user/Index';
import EditProfile from 'components/user/EditProfile';


function mainRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/user/profile" component={User} />
                <Route exact path="/user/profile/edit" component={EditProfile} />
            </Switch>
        </Router>
    )
}

export default mainRoutes;
