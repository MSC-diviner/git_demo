
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
var my = '12345上山打老虎';
var Main = require("./component/Main");
export default class DouBanDemo extends Component {
  render() {
    return (
        <Main/>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('DouBanDemo', () => DouBanDemo);
