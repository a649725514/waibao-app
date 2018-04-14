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
import Comment from '../components/comment';
import Task from './task';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const rowHeight = 40;
export default class Project extends Component {
    constructor(props) {
        super(props);   
        this.state = {

        };
        console.log(this.props.publisher)
    }
    menu () {
        const {navigator} = this.props;
            if(navigator){
            navigator.pop();
        }
    }
    Jump_to_task () {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Task',
                component: Task
            });
        }
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
                        <Projectmessage />
                        <Bolddivider dividerheight={1} />
                        <Skillmsg />
                        <Bolddivider dividerheight={1} />
                        <Personmsg publisher={this.props.projectInfo.taskPublisher} />
                        <Bolddivider />
                        <Process />
                        <Bolddivider />
                        <Selfsay title={'项目说明'} />
                        <Bolddivider />
                        <Notice />
                        <Bolddivider />
                        <Comment press={this.Jump_to_task.bind(this)} />
                    </ScrollView>
                </View>
            </View>
        );
    }
}
