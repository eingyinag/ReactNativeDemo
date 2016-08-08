"use strict";

import React, {Component} from 'React';
import {
	StyleSheet,
	Text,
	TextInput,
	Navigator,
    TouchableHighlight,
    View
} from 'react-native';

var SecureView = require("./SecureView");

class LoginView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}> Sign_In </Text>

				<View>
					<TextInput
						placeholder="Username"
						placeholderTextColor="blue"
						style={styles.formInput}
						onChange={(event) => this.setState({username: event.nativeEvent.text})}
						value={this.state.username}
						/>
					<TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        onChange={(event) => this.setState({password: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.password} />
					<TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.button}>
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
}

const styles = StyleSheet.create({
  container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch"
    },
    title: {
        fontSize: 18,
        marginBottom: 10
    },
    formInput: {
        height: 36,
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
    }
});

module.exports = LoginView;