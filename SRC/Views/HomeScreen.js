import React, { Component } from 'react';
import { Picker, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity, ImageBackground, KeyboardAvoidingView, StyleSheet, TextInput, Alert, Linking } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
export default class SignUp extends Component {
    constructor(props) {
      super(props);
       this.state = {
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
      <ScrollView style={styles.container}>
    
     

<Text style={{ fontSize: 14, marginBottom: 5, marginRight: 15, marginLeft: 15 }}>WELCOME TO HOME PAGE
</Text>
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
});