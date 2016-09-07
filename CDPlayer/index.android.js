/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://www.npmjs.com/package/react-native-player
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Switch,
  Alert,
} from 'react-native';

// Import react-native moudles
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
var Subscribable = require('Subscribable');
var RCTAudio = require('react-native-player');
var Icon = require('react-native-vector-icons/FontAwesome');
var Sound = require('react-native-sound');

var mySound = new Sound('htunkhan_lastlove.mp3', Sound.MAIN_BUNDLE, (e) => {
  if (e) {
    console.log('error', e);
  } else {
    console.log('duration', mySound.getDuration());
  }
});

var isPowerOnOff = false;
var isPlay = false;
var isPause = false;
var isStop = false;
var isForward = false;
var isBackWard = false;
var duration = null;
var playObj = null;
var hour = 0;
var minute = 0;
var second = 0;
var myInterval;
var interval;
var isLoaded;

class CDPlayer extends Component {

  constructor(props) {
      super(props);
      this.state={
         isDisc: false,
      };

      setInterval(() => {
        this.setState({
           seconds: this.state.seconds,
        });
      }, 1000);

  }

  render() {
     let insertDisc/* = this.state.isDisc ? 'LOAD' : 'NO DISC'*/;

     if (isPowerOnOff == true) {
       if (this.state.isDisc == true) {
         insertDisc = 'LOAD';
       } else {
         insertDisc = 'NO DISC';
       }
     } else {
       insertDisc = '';
     }

    if (isPlay == true && isBackWard == true) {
        second++;
    }

    return (
      <View style={styles.container}>
           <View >
              <Text style={styles.txtDuration}>
                {insertDisc}
              </Text>
           </View>

           <TouchableOpacity
            style={styles.button}
            onPress={this._powerOnOf}>
                <Icon name="power-off" style={styles.buttons}/>
           </TouchableOpacity>

           <TouchableOpacity
                style={styles.button}
                onPress={this._playpause}>
                <View style={styles.ppContainer}>
                    <Icon name="play" tyle={styles.button}/><Text>/</Text><Icon name="pause" tyle={styles.button}/>
                </View>
           </TouchableOpacity>

           <TouchableOpacity
            style={styles.button}
            onPress={this._stop}>
                <Icon name="stop" style={styles.buttons}/>
           </TouchableOpacity>

           <TouchableOpacity
           style={styles.button}
           onPressIn={this._onBackwardPressIn}
           onPressOut={this._onBackwardPressOut}>
               <Icon name="backward" style={styles.buttons}/>
          </TouchableOpacity>

           <TouchableHighlight
             style={styles.button}
             onPressIn={this._onForwardPressIn}
             onPressOut={this._onForwardPressOut}>
                <Icon name="forward" style={styles.buttons}/>
           </TouchableHighlight>

           <TouchableOpacity
             style={styles.button}
             onPress={() => {
                              mySound.stop();
                              if (isPowerOnOff == true) {
                                this.setState({isDisc: !this.state.isDisc})
                              }
                            }
                     }>
                <Icon name="eject" style={styles.buttons}/>
           </TouchableOpacity>

      </View>
    );
  }


  _powerOnOf() {
    if (isPowerOnOff == false) {
      isPowerOnOff = true;
    } else {
      // mySound.stop();
      // mySound.release();
      // Sound.enable(false);
      isPowerOnOff = false;
      this._clear;
    }
  }
  _playpause() {
     if (isPowerOnOff == true && this.state.isDisc == true) {
       if (isPlay == false) {
         playObj = mySound.play();
         isPlay = true;

       } else {
         mySound.pause();
         isPlay = false;
       }
     }
 }

   _stop() {
      mySound.stop();
      isPlay = false;
      this._clear;
  }

  _onBackwardPressIn() {
    if (isPowerOnOff == true && isPlay == true) {
      isPlay = false;
      mySound.pause();
      myInterval = setInterval(() => {
        if (second > 0) {
          second--;
        }
      }, 500);

    }
  }

  _onBackwardPressOut() {
    clearInterval(myInterval);
    mySound.setCurrentTime(second);
    mySound.play();
    isPlay = true;
    isBackWard = true;
  }

  _onForwardPressIn() {
    if (isPowerOnOff == true && isPlay == true) {
      isForward = true;
      isPlay = false;
      mySound.pause();
      myInterval = setInterval(() => {
        second++;
      }, 500);

    }
  }

  _onForwardPressOut() {
    clearInterval(myInterval);
    mySound.setCurrentTime(second);
    mySound.play();
    isForward = false;
    isPlay = true;
  }

  _clear() {
     isPowerOnOff = false;
     isPlay = false;
     isPause = false;
     isStop = false;
     isForward = false;
     isBackWard = false;
  }

  _druation() {
    if(seconds < 5) {
      seconds++;
    } else {
        seconds = 0;

        if (minutes < 5) {
          minutes++;
        } else {
          hours++;
          minutes = 0;
          seconds = 0;
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttons: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#555555",
    fontSize: 15,
    height: 36,
    padding: 5,
  },
  ppContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    height: 50,
    padding: 10,
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtDuration: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
    color: "#656565"
  }
});

AppRegistry.registerComponent('CDPlayer', () => CDPlayer);
