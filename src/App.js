import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";

console.log("App.js");

/****************
 Component Class
*****************/

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        console.log("App.js constructor()");
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}
