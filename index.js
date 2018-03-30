import React, { Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import PropTypes from 'prop-types';
//import Main from './pages/main';
import Main from './pages/main';

export default class HelloWorld extends React.Component {

render() {

    let defaultName = 'Main';
    let defaultComponent = Main;

    return (
      <Navigator  
            initialRoute={{ name: defaultName, component: defaultComponent }}  
            configureScene={(route) => {  
            return Navigator.SceneConfigs.FloatFromRight;  
        }}  
        renderScene={(route, navigator) => {  
            let Component = route.component;  
            return <Component {...route.params} navigator={navigator} />  
      }}/>
    );
  }
}

AppRegistry.registerComponent('waibao1', () => HelloWorld);