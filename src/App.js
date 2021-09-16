import React, {Component} from 'react';

import './App.css'
import Context from "./Work/context";
import Login from "./Work/Login";
import {BrowserRouter,Route,Redirect} from "react-router-dom";
class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>

                    <Route path="/Login" component={Login}/>
                    <Route path="/context" component={Context}/>
                    <Redirect to="/Login"/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;