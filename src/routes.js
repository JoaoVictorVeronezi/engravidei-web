import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

import Main from './components/MainScreen';
import Home from './components/HomeScreen';
import Cadastro from './components/RegistScreen';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    )} />

);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <PrivateRoute path='/home' component={Home} />
            <Route path="/cadastro" component={Cadastro} />
        </Switch>
    </BrowserRouter>

);

export default Routes;