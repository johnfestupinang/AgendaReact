import React, { Component } from 'react';
import * as firebase from 'firebase'


import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            responsive: ''
        }
    }
    render() {
        return (
            <view style={styles.container}>
                <view style={styles.containerInputs}>
                    <TextInput
                        placeholderTextColor="grey"
                        placeholder="Email"
                        style={styles.inputText}
                        onChangeText={(email) => this.setState({email})}
                    />

                    <TextInput
                        placeholderTextColor="grey"
                        placeholder="Password"
                        style={styles.inputText}
                        password={true}
                        onChangeText={(password) => this.setState({password})}
                    />
                </view>


                <TouchableHighlight
                    style={[styles.singUpButton, styles.loginbutton]}
                >
                    <text
                        style={styles.textButton}
                    >Login</text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={[styles.singUpButton, styles.loginbutton]}
                >
                    <text
                        style={styles.textButton}
                    >SignUp</text>
                </TouchableHighlight>

            </view>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginHorizontal: 10
    },
    inputText: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'black'
    },
    loginbutton: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderRadius: 5,
        marginBotton: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    textButton: {
        textAlign: 'center'
    },
    containerInputs:{
        marginBottom: 20
    }
    singUpButton: {

    }
})