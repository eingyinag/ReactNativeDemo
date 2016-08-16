import React, {Component} from 'React';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';

class Forecast extends Component {
    render() {
        var iconName = this.props.iconName;
        var iconNo = iconName.substring(0,iconName.length - 1);
        	return (
               <View>
                    <Text>{this.props.city}</Text>
                    <Text style={styles.bigText}>
                        {this.props.main}
                    </Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={styles.bigText}>
                            Day
                        </Text>
                        <Image source={{uri: 'http://openweathermap.org/img/w/' + iconNo + 'd.png'}} style={styles.weatherIcon}/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={styles.bigText}>
                            Night
                        </Text>
                        <Image source={{uri: 'http://openweathermap.org/img/w/' + iconNo + 'n.png'}} style={styles.weatherIcon}/>
                    </View>
                    <Text style={styles.mainText}>
                        Current conditions: {this.props.description}
                    </Text>
                    <Text style={styles.bigText}>
                        {this.props.temp}°F
                    </Text>
               </View>
            );
        }
}
var styles = StyleSheet.create({
    bigText: {
//        flex: 1,
        fontSize: 15,
        textAlign: 'left',
        margin: 10,
        color: 'blue'
    },
    mainText: {
//        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color: 'blue'
    },
    weatherIcon: {
        width: 100,
        height: 100,
    }
});
module.exports = Forecast;