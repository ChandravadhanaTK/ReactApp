 import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import LoggedOutNavigator from './LoggedOut'
import LoggedInNavigator from './LoggedIn'
console.disableYellowBox=true
export const getRootNavigator = (loggedIn) => createSwitchNavigator(
  {
    LoggedOut: {
      screen: LoggedOutNavigator
    }
    ,
    LoggedIn: {
      screen: LoggedInNavigator
    }
  },
  {
    initialRouteName: 'LoggedOut' 
  }
);