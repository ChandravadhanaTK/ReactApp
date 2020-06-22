import React from 'react'
import {Image,Alert,PermissionsAndroid, Platform,SafeAreaView,View,Text,ScrollView,Dimensions} from 'react-native'
import { createStackNavigator,createDrawerNavigator, DrawerItems } from 'react-navigation'
import IconClose from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from '../Views/LoginScreen'
import HomeScreen from '../Views/HomeScreen'
import Signup from '../Views/SignUpScreen'
import ForgetDetails from '../Views/ForgotDetailsScreen'
const CustomDrawerComponent = (props) => (


  <SafeAreaView>
    <View style={{ height: 220, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
      <View style={{ height: 120, width: 120, borderWidth: 3, borderColor: '#fff', borderRadius: 60, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', marginBottom: 10 }}>
      <Image style={{ marginBottom: 20, alignSelf: 'center' }} source={require('../assets/login_logo.png')}></Image>

      </View>

      <Text style={{ color: 'white', fontSize: 16 }}>SAM</Text>
      <Text style={{ color: 'white', fontSize: 16 }}>PHOTOGRAPHER</Text>
     

    </View>
    <ScrollView style={{ height: Dimensions.get('window').height - 200 }}>
    <Image style={{flex: 1 , position : 'absolute' , top : 0 , height :600  , width : 100}}source={require('../assets/app_bg.png')}/>

    
      <DrawerItems {...props}
        
        onItemPress={(route) => {
          props.onItemPress(route);
          console.log('....///', route)



          // if (route.route.routeName == 'Logout') {

          //   AsyncStorage.setItem("status", 'logout')
          //   return;
          // }

        }}
      />
      
    </ScrollView>
  </SafeAreaView>


)

const LoggedInNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
    
        drawerLabel: () => (null)
    
    }
  },
  
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'SIGNIN',
      headerStyle: {
        backgroundColor: '#E87815'
      },
      drawerIcon: () => (
        <Image
          source={require('../assets/Menu_icon/signin.png')} style={{ width: 25, height: 25 }}
        />
      ),
    }
  },

  ForgetDetails: {
    screen: ForgetDetails,
    navigationOptions: {
      title: 'ForgetDetails',
      headerStyle: {
        backgroundColor: '#E87815'
      },
      drawerIcon: () => (
        <Image
          source={require('../assets/Menu_icon/signin.png')} style={{ width: 25, height: 25 }}
        />
      ),
    }
  },
  Logout: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'LOGOUT',
      headerStyle: {
        backgroundColor: '#E87815'
      },
      drawerIcon: () => (
        <Image
          source={require('../assets/Menu_icon/login.png')} style={{ width: 25, height: 25 }}
        />
      ),
    }
  }
}
,
{
  
  contentComponent: CustomDrawerComponent,
  //drawerPosition: 'right'
}
);

export default LoggedInNavigator