import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { Text, View} from 'react-native';
import {createStore , applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: '',
            authDomain: '',
            databaseURL: '',
            storageBucket: '',
            messagingSenderId: ''
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }

}

export default App;