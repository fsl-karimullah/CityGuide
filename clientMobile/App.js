import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import Login from './components/Auth/Login';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <Login />
    </TailwindProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
