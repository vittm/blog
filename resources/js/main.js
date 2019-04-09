import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom';
import Index from "./components/index";
import store from "./store";
import {Provider} from "react-redux";
import { createBrowserHistory } from 'history';

require('./bootstrap');

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={createBrowserHistory()}>
                    <BrowserRouter basename='/blog/public'>
                        <Index/>
                    </BrowserRouter>
                </Router>
            </Provider>
        )
    }
}
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
export default App