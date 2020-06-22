import React, { Component } from 'react';
import { Picker, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity, ImageBackground, KeyboardAvoidingView, StyleSheet, TextInput, Alert, Linking } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
     this.state = {
      firstname: '',
      surname: '',
      email: '',
      mobile: '',
      password: '',
      repassword: '',
      city: '',
      showPassword: true,
      showRepassword: true,
      icon: "visibility-off",
      iconRe: "visibility-off",
    }

  }
 

  onSignup() {
    if (this.state.firstname == '' || this.state.surname == '' ||
      this.state.mobile == '' || this.state.email == ''
    || this.state.city == '' ||
      this.state.password == '' || this.state.repassword == '') {
      Alert.alert('Please fill al the fields')
    } else {
      if (this.state.password == this.state.repassword) {
        if (this.state.mobile.length < 10) {
          Alert.alert('Please enter valid mobile number')
        } else {
          if (this.validate(this.state.email)) {
            Alert.alert('Please enter valid email')
          } else {
            Alert.alert('Signedup succesfully')
          }
        }

      } else {
        Alert.alert('Password and Re-enter password must be same')
      }
    }
  }

  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    }
    else {
      return true;
    }
  }

  changePassword(visibility) {
    if (visibility == "visibility-off") {
      this.setState({ showPassword: false });
      this.setState({ icon: "visibility" });
    } else {
      this.setState({ showPassword: true });
      this.setState({ icon: "visibility-off" });
    }
    // this.state.icon
  }
  changeRePassword(visibility) {
    if (visibility == "visibility-off") {
      this.setState({ showRepassword: false });
      this.setState({ iconRe: "visibility" });
    } else {
      this.setState({ showRepassword: true });
      this.setState({ iconRe: "visibility-off" });
    }
    // this.state.icon
  }

 
  render() {
    return (
      <ImageBackground
        source={require("../assets/app_bg.png")}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}
      >
        <ScrollView style={styles.container}>

          {/* <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "padding"} enabled
          > */}
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 22, marginBottom: 20, textAlign: 'center' }}>CHECK IN HERE</Text>
              <Text style={{ fontSize: 14, marginBottom: 5, marginRight: 15, marginLeft: 15 }}>Firstname</Text>
              <TextInput
                value={this.state.firstname}
                onChangeText={(firstname) => this.setState({ firstname })}
                placeholder={"Enter your Firstname"}
                placeholderTextColor="#777"
                autoCapitalize="none"
                style={styles.input}
              />
              <Text style={{ fontSize: 14, marginBottom: 5, marginRight: 15, marginLeft: 15 }}>Lastname</Text>
              <TextInput
                value={this.state.surname}
                onChangeText={(surname) => this.setState({ surname })}
                placeholder={"Enter your Lastname"}
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
            
              <Text style={{ fontSize: 14, marginBottom: 5, marginRight: 15, marginLeft: 15 }}>City</Text>

              <TextInput
                value={this.state.city}
                onChangeText={(city) => this.setState({ city })}
                placeholder={"Enter your city"}
                placeholderTextColor="#777"
                autoCapitalize="none"
                style={styles.input}
              />
              <Text style={{ fontSize: 14, marginBottom: 5, marginRight: 15, marginLeft: 15 }}>Email</Text>
              <TextInput
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                placeholder={"Enter your email address"}
                placeholderTextColor="#777"
                autoCapitalize="none"
                style={styles.input}
              />
              <Text style={{ fontSize: 14, marginBottom: 5, marginRight: 15, marginLeft: 15 }}>Password</Text>
              <View style={{ position: "relative" }}>
                <TextInput
                  value={this.state.password}
                  onChangeText={(password) => this.setState({ password })}
                  placeholder={"Enter your password"}
                  placeholderTextColor="#777"
                  autoCapitalize="none"
                  secureTextEntry={this.state.showPassword}
                  style={styles.input}
                />
                {this.state.password != "" ? (
                  <TouchableOpacity
                    onPress={() => {
                      this.changePassword(this.state.icon);
                    }}
                    style={{ position: "absolute", top: 8, right: 20 }}
                  >
                    <Icon
                      style={{ fontSize: 26, color: "#808080" }}
                      name={this.state.icon}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
              <Text style={{ fontSize: 14, marginBottom: 5, marginRight: 15, marginLeft: 15 }}>Re-enter password</Text>
              <View style={{ position: "relative" }}>
                <TextInput
                  value={this.state.repassword}
                  onChangeText={(repassword) => this.setState({ repassword })}
                  placeholder={"Re-Enter your password"}
                  placeholderTextColor="#777"
                  autoCapitalize="none"
                  secureTextEntry={this.state.showRepassword}
                  style={styles.input}
                />
                {this.state.repassword != "" ? (
                  <TouchableOpacity
                    onPress={() => {
                      this.changeRePassword(this.state.iconRe);
                    }}
                    style={{ position: "absolute", top: 8, right: 20 }}
                  >
                    <Icon
                      style={{ fontSize: 26, color: "#808080" }}
                      name={this.state.iconRe}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>

              <TouchableOpacity
                style={styles.buttons}
                onPress={this.onSignup.bind(this)}
              >
                <Text style={{ color: "#fff", fontSize: 18 }}>SIGN UP</Text>
              </TouchableOpacity>
              <View style={{ alignItems: "center", marginTop: 5 }}>
                <TouchableOpacity style={{ marginTop: 10, marginBottom: 20 }} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={{ textAlign: 'center' }}>BACK TO LOGIN</Text>
                </TouchableOpacity>
              </View>
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