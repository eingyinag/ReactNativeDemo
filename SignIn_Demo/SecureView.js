"use strict";

import React, {Component} from 'React';
import {
	StyleSheet,
	Text,
    View
} from 'react-native';

class SecureView extends Component {
	constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            password: this.props.password
        };
    }

    render() {
    	return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Welcome {this.state.username}!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
        padding: 30,
        marginTop: 65,
        alignItems: "center"
    },
    heading: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: "center",
        color: "#656565"
    }
});

module.exports = SecureView;