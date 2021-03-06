import React, {Component} from 'react';
import './App.css'
import Context from "./Work/context";
import Login from "./Work/Login";
import Register from "./Work/Register";
import {BrowserRouter, Route, Redirect} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/register" component={Register}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/context" component={Context}/>
                    <Redirect to="/Login"/>
                </div>
                </BrowserRouter>
        );
    }
}

export default App;