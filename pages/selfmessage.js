import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import TopBar from '../components/topbar';
import Button from '../components/button';
import Bottombar from '../components/bottombar';
import PropTypes from 'prop-types';
import Search from 'react-native-search-box';
import Message from './message';
import Group from './group';
import Piechart from './piechart';
import Selfmessagecard from '../components/selfmessagecard';
import Bolddivider from '../components/bolddivider';
import Selfsay from '../components/selfsay';
import Workexp from '../components/workexp';
import Workskill from '../components/workskill';
import Workproject from '../components/workproject';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const rowHeight = 40;
export default class Selfmessage extends Component {
    constructor(props) {
        super(props);   
        this.state = {

        };
    }
    menu () {
        const {navigator} = this.props;
        if(navigator){
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={{
                width:width,
                height:height-StatusBar.currentHeight,
                flexDirection:'column',
                //backgroundColor:'white'
            }}>
                <StatusBar  
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={false}  //是否隐藏状态栏。  
                    backgroundColor={'rgb(43,130,163)'} //状态栏的背景色  
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                    >  
                </StatusBar>
               <ScrollView>
                    <TopBar
                        handleMenu={this.menu.bind(this)}
                        source1={require('../icon/cheveron-left.png')}
                        title={''}
                        backgroundColor={'rgb(43,130,163)'}
                        elevation={0} />
                    <Selfmessagecard 
                        name={this.props.mineInfo.name}
                        company={this.props.mineInfo.company}
                        phone={this.props.mineInfo.tel}
                        email={this.props.mineInfo.email}
                        pic={{ uri:'http://120.78.74.75:8010/'+this.props.mineInfo.workNumber+'/1.jpg'}}
                    />
                    <Bolddivider />
                    <Selfsay source={require('../icon/pencil-b.png')} />
                    <Bolddivider />
                    <Workexp/>
                    <Bolddivider />
                    <Workskill source={require('../icon/plus-b.png')} skills={this.props.mineInfo.skills}/>
                    <Bolddivider />
                    {/* <Workproject />
                    <Bolddivider /> */}
                </ScrollView> 
            </View>
        );
    }
}
