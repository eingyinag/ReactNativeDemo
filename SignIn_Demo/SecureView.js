"use strict";

import React, {Component} from 'React';
import {
	StyleSheet,
	Text,
    View,
    BackAndroid,
    Image,
} from 'react-native';

var WeatherProject = require("./WeatherProject");

class SecureView extends Component {
	constructor(props) {
    		super(props);
    		this.state = {
    			username: this.props.username,
    		};
    	}

    render() {
    	return (
    	<View style={styles.container}>
            <View >
                <Text style={styles.heading}>
                    Welcome {this.props.username}!
                </Text>
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>

            </View>
            <View>
                <WeatherProject/>
            </View>
        </View>
        );
    }
}

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (this.props.navigator.getCurrentRoutes().length === 1) {
    return false;
  }

  this.props.navigator.pop();
  return true;
})

const styles = StyleSheet.create({
  container: {
        padding: 50,
        marginTop: 65,
        alignItems: "center"
    },
    heading: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: "center",
        color: "#656565"
    }
});

module.exports = SecureView;