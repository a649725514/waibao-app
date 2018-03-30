import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Modal,
  Animated,
  Easing,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native';
import TopBar from '../components/topbar';
import Button from '../components/button';
import Bottombar from '../components/bottombar';
import PropTypes from 'prop-types';
import Main from './main';
import Group from './group';
import Piechart from './piechart';
import Selfcard from '../components/selfcard';
import Menulist from '../components/menulist';
import Message from './message';
import Contactlist from '../components/contactlist';
import Selfmessage from './selfmessage';
import Setting from './setting';
import Agreement from './agreement';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const rowHeight = 40;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const data = [
    {
        title: '清明节放假通知',
        content: '清明节放假一天，特此通知',
        date: '3月5日'
    },
]
export default class Message2 extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            isModal:false,
            menuleft: new Animated.Value(0),
            menuleft1: new Animated.Value(0),
            dataSource: ds.cloneWithRows(data),
        };
    }
    onRequestClose() {
        this.setState({
            isModal:false
        });
        this.state.menuleft.setValue(1),
            Animated.timing(
                this.state.menuleft,
                {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.linear,
                }
            ).start();
    }
    menu(){
        this.setState({
           isModal:true
        });
        this.state.menuleft.setValue(0),
        this.state.menuleft1.setValue(-1),
        Animated.parallel([
            Animated.timing(
                this.state.menuleft,
                {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.linear,
                }
            ),
            Animated.timing(
                this.state.menuleft1,
                {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.linear,
                }
            )
        ]).start();
    }
    Jump_to_drawer () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Main',
                component: Main
            });
        }
    }
    Jump_to_message () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Message',
                component: Message
            });
        }
    }
    Jump_to_group () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Group',
                component: Group
            });
        }
    }
    Jump_to_pie_chart () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Piechart',
                component: Piechart
            });
        }
    }
    Jump_to_selfmessage () {
        this.onRequestClose();
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Selfmessage',
                component: Selfmessage
            });
        }
    }
    Jump_to_agreement () {
        this.onRequestClose();
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Agreement',
                component: Agreement
            });
        }
    }
    Jump_to_setting () {
        this.onRequestClose();
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Setting',
                component: Setting
            });
        }
    }
    renderPage = (rowData) => {
        return (
          <Contactlist title={rowData.title} content={rowData.content} date={rowData.date} />
        )
    }
    render() {
        return (
            <Animated.View style={{
                width:width,
                height:height,
                flexDirection:'column',
                backgroundColor:'white'
            }}>
                <Modal
                    animationType='fade'            // 淡入淡出
                    transparent={true}              // 透明
                    visible={this.state.isModal}    // 根据isModal决定是否显示
                    onRequestClose={() => {this.onRequestClose()}}  // android必须实现
                >
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:width,height:height,backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <Animated.View style={{
                            flexDirection:'column',
                            justifyContent:'flex-start',
                            alignItems:'center',
                            width:0.7*width,
                            height:height,
                            backgroundColor:'white',
                            left:this.state.menuleft1.interpolate({inputRange:[0,1],outputRange:[0,0.7*width]})
                        }}>
                            <Selfcard />
                            <Menulist source={require('../icon/user-blue.png')} content={'个人信息'} press={()=>this.Jump_to_selfmessage()} />
                            <Menulist source={require('../icon/copy-blue.png')} content={'我的协议'} press={()=>this.Jump_to_agreement()} />
                            <Menulist source={require('../icon/cog-blue.png')} content={'设置'} press={()=>this.Jump_to_setting()} />
                            <View style={{
                                position:'absolute',
                                bottom:25,
                                left:0,
                                width:0.7*width,
                                height:40,
                                backgroundColor:'rgb(241,78,69)',
                            }}>
                                <TouchableOpacity style={{width:0.7*width,height:40,justifyContent:'center',alignItems:'center'}} onPress={()=>this.exit()}>
                                    <Text style={{color:'white'}}>{'安全退出'}</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                        <TouchableOpacity style={{width:0.3*width,height:height}} onPress={()=>this.onRequestClose()}/>
                    </View>
                </Modal>
                <View style={{
                    width:width,
                    height:height-50-StatusBar.currentHeight,
                    flexDirection:'column',
                }}>
                    <TopBar 
                        handleMenu={this.menu.bind(this)}
                        source1={require('../icon/menu.png')}
                        title={'消息'}
                        backgroundColor={'rgb(43,130,163)'} />
                    <View style={{
                        width:width,
                        height:50,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Button 
                            ButtonWidth={60}
                            ButtonHeight={30}
                            fontSize={15}
                            bgColor={'white'}
                            text={'个人'}
                            color={'black'}
                            borderRadius={0}
                            press={this.Jump_to_message.bind(this)}/>
                        <Button 
                            ButtonWidth={60}
                            ButtonHeight={30}
                            fontSize={15}
                            bgColor={'rgb(29,94,192)'}
                            text={'系统'}
                            borderRadius={0}/>
                    </View>
                    <View style={{
                        width:width,
                        height:height-50-StatusBar.currentHeight-125,
                        marginTop:10,
                        //backgroundColor:'yellow'
                    }}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderPage}
                        />
                    </View>
                </View>
                <View style={{
                    width:width,
                    height:50
                }}>
                    <Bottombar 
                        Jump_to_drawer={this.Jump_to_drawer.bind(this)} 
                        Jump_to_message={this.Jump_to_message.bind(this)}
                        Jump_to_group={this.Jump_to_group.bind(this)}
                        Jump_to_pie_chart={this.Jump_to_pie_chart.bind(this)} />
                </View>
            </Animated.View>
        );
    }
}
