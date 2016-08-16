import React, {Component} from 'React';
import {
	SwitchAndroid,
} from 'react-native';

var Switch = React.createClass({
    getInitialState() {
    return {value: false};
},

_onValueChange(value) {
    this.setState({value: value});
    if (this.props.onValueChange) {
        this.props.onValueChange(value);
        console.log(value);
    }
},

render() {
    return (
        <SwitchAndroid
            onValueChange={this._onValueChange}
            value={this.state.value}/>
    );
}
});
module.exports = Switch;