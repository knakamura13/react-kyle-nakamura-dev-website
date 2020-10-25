import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PeopleCounter from "./components/PeopleCounter";
import Error from "./components/Error";

/****************
 Component Class
*****************/

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/people-counter" component={PeopleCounter} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}
