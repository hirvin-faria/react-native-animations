import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> React Native!</Text>
        <LottieView source={ require('./src/animations/14345-vy-spravilis.json')} autoPlay loop />
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
});
