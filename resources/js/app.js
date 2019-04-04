import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from "./components/index";
import store from "./store";
import {Provider,connect} from "react-redux";
const AppWrapper = connect(
    function mapStateToProps(state) {
        return {
            popup: state.popup
        };
    },
)(Index);
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <AppWrapper/>
                </BrowserRouter>
            </Provider>
        )
    }
}
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
export default App
