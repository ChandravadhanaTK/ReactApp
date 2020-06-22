import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet, StatusBar, PermissionsAndroid, Platform } from 'react-native'
import { AsyncStorage } from 'react-native';
import { getRootNavigator } from '../Navigator'
//import { isLoggedIn } from './api/auth'
import LoginScreen from '../Views/LoginScreen'
import Signup from '../Views/SignUpScreen'
import ForgetDetails from '../Views/ForgotDetailsScreen';
import Home from '../Views/HomeScreen';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loggedIn: false
    };
    AsyncStorage.getItem("loginstatus").then((value) => {
      // this.fetchUserdetails(url)
      if (value == 'true') {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    }).done();
  }

  async componentDidMount() {
  
    this.requestPermission();
    this.setState({ loggedIn : false, loading: false });
  }

  requestPermission() {
    if (Platform.OS === 'android') {
        PermissionsAndroid.requestMultiple(
            [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
          ]
        ).then((result) => {
            if ( result['android.permission.ACCESS_FINE_LOCATION']
                && result['android.permission.ACCESS_COARSE_LOCATION'] === 'granted') {
            }
        }).catch(error => {
           console.log(error)
        });
    }
}


  render() {
    StatusBar.setBackgroundColor("#000")
    const RootNavigator = getRootNavigator(this.state.loggedIn);

    return (
      <RootNavigator />
      // <LoginScreen />
      // <Signup />
    )
    // const RootNavigator = getRootNavigator('LoggedOut')
    // return <RootNavigator/>
    //     return(
    // <RootNavigator/>
    //     )
    // if (this.state.loading) {
    //   return (
    //     <View style={styles.base}>
    //       <ActivityIndicator size='small' />
    //     </View>
    //   )
  }

  //  // const RootNavigator = getRootNavigator(this.state.loggedIn);
  //  const RootNavigator = getRootNavigator(this.state.loggedIn);
  //   return <RootNavigator />

}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})