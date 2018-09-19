import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Home from './app/components/Home';

import reducers from './app/reducers';
const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (      
      <Provider store={store}>
        <Home />
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
