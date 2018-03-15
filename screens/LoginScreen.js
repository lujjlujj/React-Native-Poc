import React, { Component } from 'react';
import Label from '../components/Label';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput
} from 'react-native';
import GlobalVariable from '../components/GlobalVariable'

class LoginScreen extends Component {
  constructor(props) {
     super(props);
     this.state = {
       username: '',
       password: '',
     };
     this.moveFocusToPasswordField = this.moveFocusToPasswordField.bind(this);
     this.performLogin = this.performLogin.bind(this);
  }

 moveFocusToPasswordField(event) {
    const input = this.refs.password;
    input.focus();
 }

 performLogin(event) {
   const username = this.state.username.trim();
   const password = this.state.password.trim();
   if (username == '' || password == '') {
      alert("Please input username && password!");
   } else {
      this.props.navigation.navigate('Profile');
      GlobalVariable.authenticated = 'true';
   }
 }

 render() {
   return (
          <Image style={{
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
              source={require('../img/home.jpg')}>
              <View style={styles.container}>
                  <View>
                    <Label text="Username:" />
                    <View style={styles.textInputView}>
                      <TextInput ref="username" style={styles.textInput} returnKeyType={"next"}
                          onEndEditing={this.moveFocusToPasswordField}
                          placeholder="e.g. Amy"
                          onChangeText={(value) => this.setState({username: value})}
                          value={this.state.username} />
                    </View>
                  </View>
                  <View>
                    <Label text="Password:" />
                    <View style={styles.textInputView}>
                      <TextInput ref="password" autoFocus={this.state.passwordFoucs}
                          secureTextEntry={true} style={styles.textInput}  returnKeyType={"done"}
                          onChangeText={(value) => this.setState({password: value})}
                          value={this.state.password}/>
                    </View>
                  </View>
                  <View style={styles.loginButtonView}>
                    <Button ref="login"
                          title="Login"
                          color='#FFF'
                          styles={{button: styles.loginButton, label: styles.buttonWhiteText}}
                          onPress={this.performLogin}>
                          Login</Button>
                  </View>
              </View>
          </Image>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 40,
    marginRight: 40,
    padding: 3,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  textInputView: {
    borderBottomWidth: 1,
    borderColor: '#FFF',
    backgroundColor: 'transparent'
  },
  textInput: {
    height: 30,
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  textLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    marginBottom: 3,
    marginTop: 10,
    color: '#FFF',
    backgroundColor: 'transparent'
  },
  loginButtonView: {
      marginTop: 10,
      backgroundColor: '#3f51b5'
  },
});


export default LoginScreen;
