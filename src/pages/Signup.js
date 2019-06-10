import React, { Component } from 'react';


import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image 
} from 'react-native';


import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {

  goBack() {
      Actions.pop();
  }

	render() {
		return(
			<View style={styles.container}>
        <Form type="Signup"/>	
        <Image  style={{width:85, height: 80}}
          			source={require('../images/registro.png')}/>
          		<Text style={styles.logoText}>sign up please</Text>	 			
				<View style={styles.signupTextCont}>        
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#3F7FBF',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(63,127,191,0.1)',
  	fontSize:16
  },
  signupButton: {
  	color:'#3F7FBF',
  	fontSize:16,
  	fontWeight:'500'
  },
  logoText : {
  	marginVertical: 40,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  }
  
  
});
   