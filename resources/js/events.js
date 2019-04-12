
import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/store';
import perflogger from 'redux-perf-middleware';


function configureStore() {

	if (process.env.NODE_ENV === 'production') {
		const store = createStore(rootReducer);
		return store;
	}
	else {
		// Development
		const createStoreWithMiddleware = applyMiddleware(perflogger)(createStore);

		const store = createStoreWithMiddleware(rootReducer, compose(
	        // Add other middleware on this line...	        
	        window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
	    ));

	    if (module.hot) {
	    	// Enable Webpack hot module replacement for reducers
	    	module.hot.accept('./reducers/store', () => {
	    		const nextReducer = require('./reducers/store').default; // eslint-disable-line global-require
	    		store.replaceReducer(nextReducer);
	    	});
	    }
	    return store;
	}
}


const EventStore = configureStore();

export default EventStore;
