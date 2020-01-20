import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';


//Declaração de animações
const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const zoomOut = {
  0: {
    opacity: 1,
    scale: 1,
  },
  0.5: {
    opacity: 1,
    scale: 0.3,
  },
  1: {
    opacity: 0,
    scale: 0,
  },
};

export default class App extends Component {
  
  state = {
    fontSize: 20,
  }



  render() {
    return (
      <View style={styles.container}>
        {/* animações lotie */}
        {/* <LottieView source={ require('./src/animations/14345-vy-spravilis.json')} autoPlay loop /> */}

        {/* animações da dependencia react-native-animatable */}
        <Text style={styles.welcome}> React Native!</Text>
        <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
        <Animatable.Text animation="slideInDown" iterationCount={Infinity} direction="alternate">Up and down you go</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center', fontSize: 30}}>❤️</Animatable.Text>
        <TouchableOpacity onPress={() => this.setState({fontSize: (this.state.fontSize || 10) + 5 })} style={styles.crescentButton}>
          <Animatable.Text transition="fontSize" style={{fontSize: this.state.fontSize || 10}}>Clique Aqui</Animatable.Text>
        </TouchableOpacity>

        <Animatable.Text animation={fadeIn} duration={5000} >Fade me in</Animatable.Text>
        <Animatable.Text animation={zoomOut} duration={5000} >Zoom me out</Animatable.Text>
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
  crescentButton:{
    backgroundColor: '#29a38f',
    borderRadius: 10,
    padding: 5,
    color: '#FFF'
  }
});
