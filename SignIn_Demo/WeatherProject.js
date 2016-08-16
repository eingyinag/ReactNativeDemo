import React, {Component} from 'React';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image
} from 'react-native';

const API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
var Forecast = require("./Forecast");

class WeatherProject extends Component {

    constructor(props) {
        		super(props);
        		this.state = {
        		    zip: '',
                    forecast: null
        		};
        	}

    _handleTextChange(event) {
            var zip = event.nativeEvent.text;
            this.setState({zip: zip});

            fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&units=imperial&APPID=' + API_KEY)
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(responseJSON);
                    this.setState({
                        forecast: {
                            city: responseJSON.name,
                            main: responseJSON.weather[0].main,
                            description: responseJSON.weather[0].description,
                            temp: responseJSON.main.temp,
                            iconName: responseJSON.weather[0].icon
                        }
                    });
                })
            .catch((error) => {
                console.warn(error);
            })
        }


    render() {
            var content = null;
            if (this.state.forecast !== null) {
                content = <Forecast
                                city={this.state.forecast.city}
                                main={this.state.forecast.main}
                                description={this.state.forecast.description}
                                temp={this.state.forecast.temp}
                                iconName={this.state.forecast.iconName}/>;
            }
        return(
        <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.mainText}>
                        Current weather for
                    </Text>
                        <TextInput
                            style={[styles.zipCode, styles.input]}
                            returnKeyType='none'
//                            onSubmitEditing={(event) => this._handleTextChange(event)}
                            onChange={(event) => this._handleTextChange(event)}
                            value={this.state.zip}
                        />
                </View>
                {content}
        </View>
        );
    }
}

var baseFontSize = 16;
var styles = StyleSheet.create({
   container: {
//        flex: 1,
        alignItems: 'stretch',
        paddingTop: 30,
        paddingTop: 5,
        backgroundColor: '#DADDDF',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center'
   },
   backdrop: {
//        flex: 1,
        flexDirection: 'column'
   },

   row: {
        flex: 1,
        flexDirection: 'row',
//        flexWrap: 'nowrap',
//        alignItems: 'flex-start',
//        padding: 25
   },
   zipContainer: {
//        flex: 1,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3
   },
   zipCode: {
        width: 60,
        height: baseFontSize,
   },
   mainText: {
//        flex: 1,
//        flexDirection: 'row',
        alignItems: 'center',
        fontSize: baseFontSize,
        color: '#000000',
        textAlign: 'left',
        margin: 10,
   },
   input: {
        fontSize: baseFontSize,
        height: 40,
//        padding: 10,
//        marginLeft: 5,
//        marginRight: 50,
//        marginBottom: 5,
//        marginTop: 5,
//        flex: 1,
//        fontSize: 18,
        width: 150,
        borderWidth: 1,
        borderColor: "#555555",
//        borderRadius: 8,
        color: "#555555"
   }
   });

module.exports = WeatherProject