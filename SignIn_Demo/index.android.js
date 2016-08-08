/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var LoginView = require("./LoginView");

class SignIn_Demo extends Component {
  render() {
    return (
       <Navigator
          style={styles.navigationContainer}
          initialRoute={{title: "Navigation Example", component: LoginView}}
          renderScene={this.renderScene.bind(this)}
        />
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
  
});

AppRegistry.registerComponent('SignIn_Demo', () => SignIn_Demo);
