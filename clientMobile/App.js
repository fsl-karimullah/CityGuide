import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import React from 'react';
import Router from './App/routes/index';
const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <Router />
    </TailwindProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
