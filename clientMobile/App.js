import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import React, {useEffect} from 'react';
import Router from './App/routes/index';
import {Provider} from 'react-redux';
import configureStore from './App/redux/store/configureStore';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
        <Router />
      </TailwindProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
