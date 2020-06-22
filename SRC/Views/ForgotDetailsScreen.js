import React, { Component } from 'react';
import { Picker, Text, View, ScrollView, Image, SafeAreaView, HeaderBackButton, TouchableOpacity, BackHandler, ImageBackground, KeyboardAvoidingView, StyleSheet, TextInput, Alert, Linking } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class ForgotDetailsScreen extends Component {
    constructor(props) {
      super(props);
        this.state = {
        email: '',
        mobile: '',
        icon: "visibility-off",
       }
    }


    onforgotpwd() {
        if (this.state.email == '') {
          Alert.alert('Please enter Valid Email-id  and Mobile number')
        } else if (this.state.email != '' && this.state.mobile == '') {
          Alert.alert('Please enter the Mobile number')
        } else if (this.state.email == '' && this.state.mobile != '') {
          Alert.alert('Please enter the Email id')
        } else {
            Alert.alert('Password has been sent succesfully to ' + this.state.mobile)
            this.props.navigation.navigate('Login')
        }
    }

    loginNavigator(){
    
        this.props.navigation.navigate('Login')
    }

    
    render() {
        return (
          <ImageBackground
            source={require("../assets/app_bg.png")}
            style={{
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center",
            }}>
           <ScrollView style={styles.container}>
           <View style={{ marginTop: 20 }}>
          
           <Text style={{ fontSize: 24, marginBottom: 25, textAlign: 'center' }}>Forgot Password</Text>
           <Text style={{ fontSize: 14, marginBottom: 5, marginRight: 15, marginLeft: 15 }}>Enter Email</Text>
              <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                placeholder={"Enter your email address"}
                placeholderTextColor="#777"
                autoCapitalize="none"
                style={styles.input}
              />
              <Text style={{ fontSize: 14, marginBottom: 5, marginRight: 15, marginLeft: 15 }}>Mobile number</Text>
                <TextInput
                  value={this.state.mobile}
                  onChangeText={(mobile) => this.setState({ mobile })}
                  placeholder={"Enter your mobile number"}
                  keyboardType="number-pad"
                  placeholderTextColor="#777"
                  autoCapitalize="none"
                  style={styles.input}
                />
                <TouchableOpacity
                style={styles.buttons}
                onPress={this.onforgotpwd.bind(this)}>
                <Text style={{ color: "#fff", fontSize: 18 }}>Get Temporary Password</Text>
              </TouchableOpacity>
             
              <TouchableOpacity style={{ marginTop: 10 }} onPress={this.loginNavigator.bind(this)}>

                <Text style={{ textAlign: 'center' }}>Back to Login</Text>
              </TouchableOpacity>

                
              </View>
         
              </ScrollView>
         </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      marginTop: 20
      // backgroundColor: '#ffff',
    },
    input: {
  
      height: 44,
      fontSize: 16,
      padding: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      marginBottom: 15,
      marginRight: 15,
      marginLeft: 15,
      borderRadius: 6,
      backgroundColor: "#fff",
    },
    containers: {
      flex: 1,
      justifyContent: "center",
    },
    buttons: {
      width: '60%',
      height: 44,
      backgroundColor: "#000",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: 'center',
      marginRight: 10,
      marginLeft: 10,
      marginTop: 10,
      borderRadius: 6,
    },
    settingsBtn: {
      position: "absolute",
      bottom: 40,
      alignSelf: "center",
      backgroundColor: "#fff",
      paddingVertical: 3,
      paddingHorizontal: 12,
      borderRadius: 16,
    },
  });