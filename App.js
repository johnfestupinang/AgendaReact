/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar 
} from 'react-native';


import * as firebase from 'firebase';

import Routes from './src/Routes';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={email:'', password:'', response:'', ing:0}
    this.singup=this.singup.bind(this)
    this.Login=this.Login.bind(this)
  }

  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyC2P9cimTY5fTOuW1e8lFWVMAY5byz5KLc",
      authDomain: "loginreact-b674a.firebaseapp.com",
      databaseURL: "https://loginreact-b674a.firebaseio.com",
      projectId: "loginreact-b674a",
      storageBucket: "loginreact-b674a.appspot.com",
      messagingSenderId: "453268185153",
      appId: "1:453268185153:web:47c0225996e2c71b"
    };
    
    firebase.initializeApp(firebaseConfig);

  }
 
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});