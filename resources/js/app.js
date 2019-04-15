import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router} from 'react-router-dom';
import Index from "./components/index";
import store from "./events";
import {Provider, connect} from "react-redux";
import { createBrowserHistory } from 'history';
import EventBus from './lib/utill/eventbus';

const ChatWapper = connect(
    function mapStateToProps(state) {
        return{
            popup: state.popup
        };
    },
    function mapDispatchToProps(dispatch) {
		const zdispatch = (evt, reduxOnly) => {			
			dispatch(evt);

			// migrating to another event system.
			if (!reduxOnly)
				EventBus.send(evt.type, evt.payload);
        }
		return {
			dispatch: zdispatch
		};
	}   
)(Index);


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={createBrowserHistory()}>
                    <BrowserRouter basename='/blog/public'>
                        <ChatWapper/>
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