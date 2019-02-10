/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

export default class HomeScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen1')} style={styles.buttonStyle}>
          <Text> Screen 1 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen2')} style={styles.buttonStyle}>
          <Text> Screen 2 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen3')} style={styles.buttonStyle}>
          <Text> Screen 3 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen4')} style={styles.buttonStyle}>
          <Text> Screen 4 </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#365C80',
    borderRadius:5,
    borderWidth:1,
    marginLeft:'5%',
    marginRight:'5%',
    justifyContent: 'center',
    height: 40
  }
});
