import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import SightingsPage from "./pages/sightings_page";
import LogIn from "./pages/login_page";
import CasesPage from "./pages/cases_page";
import DetailsPage from "./pages/details_page";
import AddCasePageOne from "./pages/add_case_pages/add_case_page_1";
import AddCasePageTwo from "./pages/add_case_pages/add_case_page_2";
import AddCasePageThree from "./pages/add_case_pages/add_case_page_3";

import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LogIn} />
                    <Route path="/cases" component={CasesPage} />
                    <Route path="/sightings" component={SightingsPage} />
                    <Route path="/details" component={DetailsPage} />
                    <Route path="/add_case_personal" component={AddCasePageOne} />
                    <Route path="/add_case_additional" component={AddCasePageTwo} />
                    <Route path="/add_case_finish" component={AddCasePageThree} />
                </Switch>
            </Router>
        )
    }
}