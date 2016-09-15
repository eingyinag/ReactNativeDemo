/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// Import React-Native Modules
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ListView,
} from 'react-native';

var LoginView = require("./LoginView");

class SignIn_Demo extends Component {

  constructor(props) {
      super(props);
      this.state = {
        result: '',
        status: 'Initialized',
      };
  }


  render() {
    return (
       // Render something here
    );
  }

  renderScene (route, navigator) {
    return <route.component navigator={navigator}/>
  }
}

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    },
    heading: {
            fontSize: 20,
            margin: 10,
            textAlign: 'center'
        },
        button: {
            borderWidth: 1,
            borderColor: '#ccc',
            margin: 5,
            padding: 5
        },
        status: {
            marginTop: 30,
            textAlign: 'center'
        },
        result: {
            backgroundColor: '#000000',
            color: '#FFFFFF',
            fontFamily: 'courier',
            fontSize: 16,
            fontWeight: 'bold',
            margin: 10,
            padding: 20
        },
});

AppRegistry.registerComponent('SignIn_Demo', () => SignIn_Demo);
