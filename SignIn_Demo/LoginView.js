"use strict";

import React, {Component} from 'React';
import {
	StyleSheet,
	Text,
	TextInput,
	Navigator,
    TouchableHighlight,
    View,
    Alert,
} from 'react-native';

//import SecureView from './SecureView';

var SecureView = require("./SecureView");

class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            nextField: "",
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Sign In
                </Text>
                <View>
                    <TextInput
                        ref="1"
                        placeholder="Username"
                        returnKeyType="next"
//                      onChange={(event) => this.setState({username: event.nativeEvent.text})}
                        onSubmitEditing={(event) => this.onSubmitName(event)}
                        style={styles.formInput}
                        /*value={this.state.username}*/ />
                    <TextInput
                        ref="2"
                        placeholder="Password"
                        secureTextEntry={true}
                        onChange={(event) => this.setState({password: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.password} />
                    <TouchableHighlight
                        ref="touchBtn"
                        onPress={(this.onSubmitPressed.bind(this))} style={styles.button}
                        onLongPress={this._onLongPress}>
                            <Text style={styles.buttonText}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    onSubmitPressed() {
        this.props.navigator.push({
            title: "Secure Page",
            component: SecureView,
            passProps: {username: this.state.username, password: this.state.password}
        });
    }

    onSubmitName(event) {
        this.setState({username: event.nativeEvent.text});
        this.refs[2].focus();
    }

    _onLongPress() {
        Alert.alert(
                    'LongPress Alert!',
                    // this.state.username,
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed!')},
//                      {text: 'OK', onPress: () => {this.onSubmitPressed()}},
                    ]
                   );
    }
};

var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
//        alignItems: "stretch"
    },
    title: {
        fontSize: 18,
        marginBottom: 10
    },
    formInput: {
        height: 50,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 8,
        color: "#555555"
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
});

module.exports = LoginView;
