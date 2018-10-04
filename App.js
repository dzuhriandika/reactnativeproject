import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Components/Login';
import Biodata from './Components/Biodata';

const AppNavigator = StackNavigator({
  LoginScreen: { screen: Login },
  BiodataScreen: { screen: Biodata }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}