/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.judul}>
          Biodata
        </Text>
        <Text style={styles.welcome}>
          DZUHRI ANDIKA PUTRA SUSANTO
        </Text>
        <Text style={styles.instructions}>
          Kelas XI RPL3
        </Text>
        <Text style={styles.instructions}>
          No.Absen 17
        </Text>
        <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://avatars3.githubusercontent.com/u/41560305?s=400&u=cd75039e1f145bda4c62c8a188c2ba4aafdd5378&v=4'}}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  judul:{
    color: "#939b99",
    fontSize: 60,
    fontWeight: 'bold'
  }
});
