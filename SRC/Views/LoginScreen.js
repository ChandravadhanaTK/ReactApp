import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, BackHandler, ImageBackground, KeyboardAvoidingView, StyleSheet, TextInput, Alert, Linking } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    this.state = {
      username: '',
      password: '',
      showPassword: true,
      icon: "visibility-off"
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }



  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    Alert.alert(
      'Information',
      'Are you sure you want to exit?',
      [
        {
          text: 'No',
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => { BackHandler.exitApp() },
        },

      ],
      { cancelable: false },
    );
    return true;
  }



  onLogin() {
    if (this.state.username == '') {
      Alert.alert('Please enter username and password')
    } else if (this.state.username != '' && this.state.password == '') {
      Alert.alert('Please enter the password')
    } else if (this.state.username == '' && this.state.password != '') {
      Alert.alert('Please enter the username')
    } else {
      this.props.navigation.navigate('Home')
      //Alert.alert('Logged in successfulyy')
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

  
  signUpNavigate() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    this.props.navigation.navigate('Signup');
  }

  forgetdetailsNavigate() {

  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  this.props.navigation.navigate('ForgetDetails');
  }

  linkOpen(media) {

    if (media == 'fb') {
      Linking.openURL('https://play.google.com/store/apps/details?id=com.facebook.katana&hl=en_IN');
    } else if (media == 'insta') {
      Linking.openURL('https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN');
    } else if (media == 'twitter') {
      Linking.openURL('https://play.google.com/store/apps/details?id=com.twitter.android&hl=en_IN');
    }
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
        <SafeAreaView style={styles.container}>

          <KeyboardAvoidingView

            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
        <Text style={{ fontSize: 28, marginBottom: 30, textAlign: 'center' }}>HACKATHON - 2020</Text>
            <View style={{ marginTop: 60 }}>
              {/* <Text style={{fontSize:16,marginBottom:5}}>EMAIL ID</Text> */}
              <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                placeholder={"Enter your email id"}
                placeholderTextColor="#777"
                autoCapitalize="none"
                style={styles.input}
              />
              {/* <Text style={{fontSize:16,marginBottom:5}}>PASSWORD</Text> */}
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
                    style={{ position: "absolute", top: 8, right: 5 }}
                  >
                    <Icon
                      style={{ fontSize: 26, color: "#808080" }}
                      name={this.state.icon}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>

              {/* <View style={{ backgroundColor: '#03193F', width: 300 }}> */}
              <TouchableOpacity
                style={styles.buttons}
                onPress={this.onLogin.bind(this)}
              >
                <Text style={{ color: "#fff", fontSize: 18 }}>LOGIN</Text>
              </TouchableOpacity>
              <View style={{ alignItems: "center", marginTop: 5 }}>

              </View>
              <TouchableOpacity style={{ marginTop: 10 }} onPress={this.signUpNavigate.bind(this)}>

                <Text style={{ textAlign: 'center' }}>Don't you have account? SIGN UP</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ marginTop: 10 }} onPress={this.forgetdetailsNavigate.bind(this)}>

                <Text style={{ textAlign: 'center' }}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ textAlign: 'center', fontsize: 18, marginBottom: 5, marginTop: 50 }}> Follow us on:</Text>
            <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-evenly', alignSelf: "center" }}>
              <TouchableOpacity onPress={this.linkOpen.bind(this, 'fb')} >
                <Image style={{ width: 36, height: 36 }} source={require('../assets/ic_fb.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.linkOpen.bind(this, 'insta')} >
                <Image style={{ width: 36, height: 36 }} source={require('../assets/ic_insta.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.linkOpen.bind(this, 'twitter')} >
                <Image style={{ width: 36, height: 36 }} source={require('../assets/ic_twitter.png')} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 150
    // backgroundColor: '#ffff',
  },
  input: {
    width: 320,
    height: 44,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  containers: {
    flex: 1,
    justifyContent: "center",
  },
  buttons: {
    width: 320,
    height: 44,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
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
