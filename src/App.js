import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import fbConfig from './config/fbConfig'

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    UNSAFE_componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(fbConfig);
        }
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        )
    }
}

export default App