import React, {useState} from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import Main from './components/MainScreen';
import Home from './components/HomeScreen';
import Cadastro from './components/RegistScreen';


const Routes = () => ( 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path='/home' component={Home} />
            <Route path="/cadastro" component={Cadastro} />
        </Switch>
    </BrowserRouter>
);

export default Routes;