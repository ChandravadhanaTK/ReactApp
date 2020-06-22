import { createStackNavigator } from 'react-navigation'

import LoginScreen from '../Views/LoginScreen'
 import signUp from '../Views/SignUpScreen'
 //import { AsyncStorage } from 'react-native';

const LoggedOutNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header:null,  
      
  }
  },
  SignUp:{
    screen: signUp,
    navigationOptions: {
      header:null,  
      
  }
  }
});

export default LoggedOutNavigator