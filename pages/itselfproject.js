import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native';
import TopBar from '../components/topbar';
import Button from '../components/button';
import Bottombar from '../components/bottombar';
import PropTypes from 'prop-types';
import Search from 'react-native-search-box';
import Projectmessage from '../components/projectmeaasge';
import Bolddivider from '../components/bolddivider';
import Skillmsg from '../components/skillmsg';
import Personmsg from '../components/personmsg';
import Process from '../components/process';
import Selfsay from '../components/selfsay';
import Notice from '../components/notice';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const rowHeight = 40;
export default class Itselfproject extends Component {
    constructor(props) {
        super(props);   
        this.state = {

        };
    }
    menu () {

    }
    render() {
        return (
            <View style={{
                width:width,
                height:height,
                flexDirection:'column',
                backgroundColor:'white'
            }}>
                <View style={{
                    width:width,
                    height:height-StatusBar.currentHeight,
                    flexDirection:'column',
                }}>
                    <TopBar 
                        handleMenu={this.menu.bind(this)}
                        source1={require('../icon/cheveron-left.png')}
                        title={'项目'}
                        backgroundColor={'rgb(43,130,163)'}
                        elevation={0} />
                    <ScrollView>
                        <Projectmessage name={'项目F'} />
                        <Bolddivider dividerheight={1} />
                        <Skillmsg />
                        <Bolddivider dividerheight={1} />
                        <Personmsg />
                        <Bolddivider />
                        <Process />
                        <Bolddivider />
                        <Selfsay title={'项目说明'} />
                        <Bolddivider />
                    </ScrollView>
                </View>
            </View>
        );
    }
}
