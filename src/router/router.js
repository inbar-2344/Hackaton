import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Nav from '../navbar/Navbar';
import OfriPage from '../pages/ofri/page'
import YuvalPage from '../pages/yuval/page'
import InbarPage from '../pages/inbar/page'

export default function ApplicationRouter() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact component={OfriPage} path="/" />
                <Route exact component={YuvalPage} path="/page1" />
                <Route exact component={InbarPage} path="/page1" />
            </Switch>
        </BrowserRouter>
    )
}