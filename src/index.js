/*
 *  IMPORT REACT, REDUX
 */

// import react
import React from 'react';
import ReactDOM from 'react-dom';

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

// import main app
import App from './components/app';

const appStore = createStore(
    appReducer,
    initialStore,
    applyMiddleware(ReduxThunk)
);

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

ReactDOM.render(<Provider store={appStore}>
    <ReduxApp actions={actionsList} />
</Provider>, document.querySelector('.container'));
