import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Post from './pages/post';

const Routes = () =>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/post" component={Post} />

    </Switch>
    </BrowserRouter>
);

export default Routes;