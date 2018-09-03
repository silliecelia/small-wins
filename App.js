import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View } from 'react-native';
import Home from './screens/Home.js'

export default class App extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Home></Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
