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
var image = require('./image/weatherImage.png');
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
    	    <Image source={image}
    	           resizeMode='cover'
                   style={styles.backdrop}>
            <View >
                <Text style={styles.heading}>
                    Welcome {this.props.username}!
                </Text>
            </View>
            <View>
                <WeatherProject/>
            </View>
            </Image>
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
//        padding: 10,
//        marginTop: 5,
        alignItems: "center"
    },
    heading: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: "center",
        color: "#656565"
    },
    stretch: {
        flex: 1,
        flexDirection: 'column',
    }
});

module.exports = SecureView;