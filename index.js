/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';



import {AppRegistry} from 'react-native';
import Root from './SRC/Navigator/Root';
import {name as appName} from './app.json';
import React, { Component } from "react";


  const Appcontainer = () =>
  
      <Root/>
 

  AppRegistry.registerComponent(appName, () => Appcontainer);




