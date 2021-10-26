import React from 'react';
import Home from 'components/Index';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from 'components/login/Login';
import User from 'components/user/Index' 





const DashBoards = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/user/index" component={User}/>
        </Switch>
    )
}




function mainRoutes() {
    return (
        <Router>
            <DashBoards />
        </Router>
    )
}

export default mainRoutes;
