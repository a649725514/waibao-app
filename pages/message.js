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
import Message2 from './message2';
import Bolddivider from '../components/bolddivider';
import Selfmessage from './selfmessage';
import Setting from './setting';
import Agreement from './agreement';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const rowHeight = 40;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const data = [
    {
        name:'小王',
        state: 3,
        task: '任务a',
        content:'如果你无法简洁的表达你的想法，那只说明你还不够了解它。',
        date:''
    },
    {
        name:'master',
        state: 0 ,
        task: '任务b',
        content: '',
        date:''
    },
    {
        name:'master',
        state:1,
        task:'任务c',
        content: '',
        date:''
    },
    {
        name: '小李',
        state: 3,
        task:'任务c',
        content:'如果你无法简洁的表达你的想法，那只说明你还不够了解它。',
        date:''
    },
    {
        name:'master',
        state:2,
        task:'任务b',
        content: '',
        date:''
    },
]
export default class Message extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            isModal:false,
            menuleft: new Animated.Value(0),
            menuleft1: new Animated.Value(0),
            dataSource: ds.cloneWithRows(data),
        };
    }
    renderPage = (rowData) => {
        if(rowData.state==0){
            return (
                <View style={{
                    margin:20,
                    marginBottom:10,
                    marginTop:10,
                    width:width-40,
                    height:25,
                    borderWidth:1,
                    borderColor:'#e9e9e9',
                    borderRadius:2,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    elevation:2,
                }}>
                    <Image style={{marginLeft:10}} source={require('../icon/close-solid-r.png')}></Image>
                    <Text style={{color:'red',fontSize:12,marginLeft:20}}>
                        {rowData.task}
                    </Text>
                    <Text style={{color:'black',fontSize:12}}>{'审核不通过，进入返工状态。'}</Text>
                </View>
            )
        } else if (rowData.state==1){
            return (
                <View style={{
                    margin:20,
                    marginBottom:10,
                    marginTop:10,
                    width:width-40,
                    height:25,
                    borderWidth:1,
                    borderColor:'#e9e9e9',
                    borderRadius:2,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    elevation:2,
                }}>
                    <Image style={{marginLeft:10}} source={require('../icon/check-circle-g.png')}></Image>
                    <Text style={{color:'rgb(0,155,49)',fontSize:12,marginLeft:20}}>
                        {rowData.task}
                    </Text>
                    <Text style={{color:'black',fontSize:12}}>{'审核通过！'}</Text>
                </View>
            )
        } else if (rowData.state==2){
            return (
                <View style={{
                    margin:20,
                    marginBottom:10,
                    marginTop:10,
                    width:width-40,
                    height:25,
                    borderWidth:1,
                    borderColor:'#e9e9e9',
                    borderRadius:2,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    elevation:2,
                }}>
                    <Image style={{marginLeft:10}} source={require('../icon/exclamation-solid-o.png')}></Image>
                    <Text style={{color:'rgb(255,152,42)',fontSize:12,marginLeft:20}}>
                        {rowData.task}
                    </Text>
                    <Text style={{color:'black',fontSize:12}}>{'急需你的支援！'}</Text>
                </View>
            )
        } else if (rowData.state==3){
            return (
                <View style={{
                    margin:20,
                    marginBottom:10,
                    marginTop:10,
                    width:width-40,
                    height:100,
                    borderWidth:1,
                    borderColor:'#e9e9e9',
                    borderRadius:2,
                    elevation:2,
                }}>
                    <View style={{
                        width:width-40,
                        height:25,
                        flexDirection:'row',
                    }}>
                        <View style={{
                            width:width-70,
                            height:25,
                            flexDirection:'row',
                            justifyContent:'flex-start',
                            alignItems:'center'
                        }}>
                            <Text style={{color:'rgb(0,155,49)',fontSize:12}}>{rowData.name}</Text>
                            <Text style={{color:'black',fontSize:12}}>{'在'}</Text>
                            <Text style={{color:'red',fontSize:12}}>{rowData.task}</Text>
                            <Text style={{color:'black',fontSize:12}}>{'中回复了你'}</Text>
                        </View>
                        <View style={{
                            width:30,
                            height:25,
                            flexDirection:'row',
                            justifyContent:'flex-start',
                            alignItems:'center'
                        }}>
                            <Image source={require('../icon/undo2.png')}></Image>
                        </View>
                    </View>
                    <Bolddivider dividerheight={1}/>
                    <View style={{
                        width:width-40,
                        height:49,
                        flexDirection:'row',
                        justifyContent:'flex-start',
                        alignItems:'flex-start',
                        padding:5
                    }}>
                        <Text style={{color:'black',fontSize:10}}>{rowData.content}</Text>
                    </View>
                    <View style={{
                        width:width-40,
                        height:25,
                        flexDirection:'row',
                        justifyContent:'flex-end',
                        alignItems:'center'
                    }}>
                        <Text style={{fontSize:12,marginRight:5}}>{'5分钟前'}</Text>
                    </View>
                </View>
            )
        }
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
    Jump_to_message2 () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Message2',
                component: Message2
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
                            bgColor={'rgb(29,94,192)'}
                            text={'个人'}
                            borderRadius={0}/>
                        <Button 
                            ButtonWidth={60}
                            ButtonHeight={30}
                            fontSize={15}
                            bgColor={'white'}
                            text={'系统'}
                            color={'black'}
                            borderRadius={0}
                            press={this.Jump_to_message2.bind(this)}/>
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
