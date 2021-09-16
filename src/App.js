import React, {Component} from 'react';

import './App.css'
import Contest from './Work/Contest'
import Submit from "./Work/Submit";
import moment from "moment";
class App extends Component {

    render() {
        return (
            <div>
                <Contest/>
                <p>{moment().format('YYYY-MM-DD HH:mm:ss')}</p>
                <Submit />
            </div>
        );
    }
}

export default App;