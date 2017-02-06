
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logLastAction from './middleware/log-last-action';
import combinedReducer from './reducers/index';

const store = createStore(combinedReducer, compose(
    applyMiddleware(thunk, logLastAction),

    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension() : (f) => f
));

export default store;