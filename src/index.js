/*
 *  IMPORT REACT, REDUX
 */

// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import react-router
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

// import redux
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// import redux middleware
import ReduxThunk from 'redux-thunk';

/*
 *  IMPORT FEATURES
 */
const features = [];

// feature-auth
import authStore from './feature-auth/authStore';
import authReducer from './feature-auth/authReducer';
import authActions from './feature-auth/authActions';

// add to features list
features.push({
    store: { authStore, },
    reducer: { authStore: authReducer, },
    actions: { authActions, }
});

/*
 *  CREATE STORE, REDUCER
 */
const {initialStore, reducersList, actionsList} = features.reduce((hash, currFeature) => {
    hash.initialStore = Object.assign(hash.initialStore, currFeature.store);
    hash.reducersList = Object.assign(hash.reducersList, currFeature.reducer);
    hash.actionsList = Object.assign(hash.actionsList, currFeature.actions);

    return hash;
}, {initialStore: {}, reducersList: {}, actionsList: {}});

/*
 *  CREATE REDUCER
 */
const appReducer = combineReducers(reducersList);

/*
 *  CREATE STORE 
 */
const appStore = createStore(
    appReducer,
    initialStore,
    applyMiddleware(ReduxThunk)
);

// import root app
import App from './components/app';

/*
 * LINK APP WITH STORE 
 */
const ReduxApp = connect((state) => {
    console.log(state);
    return state.authStore;
})(App);

/*
 *  BUILD
 */

// import top level components
import Test from './components/test';

// props passer utility
const throwProps = (Component, additionalProps) => (props) => (<Component {...props} {...additionalProps} />);

ReactDOM.render(<Provider store={appStore}>
    <Router history={browserHistory}>
        <Route path="/" component={throwProps(ReduxApp, {actions: actionsList})}>
		    <Route path="/test" component={throwProps(Test, {actions: actionsList})} />	
        </Route>
    </Router>
</Provider>, document.querySelector('.container'));
