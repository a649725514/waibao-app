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
    TextInput
} from 'react-native';
import TopBar from '../components/topbar';
import Settingitem from '../components/settingitem';
import Bolddivider from '../components/bolddivider';
import { Switch } from 'react-native-switch';
import Button from '../components/button';
import Main from './main';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            placeholderu: '请输入账号',
            placeholderp: '请输入密码',
        };
    }
    Jump_to_main() {
        if (this.state.user == '') {
            this.refs.textinputu.setNativeProps({ placeholderTextColor: 'red' })
        } else if (this.state.password == '') {
            this.refs.textinputp.setNativeProps({ placeholderTextColor: 'red' })
        } else {
            const { navigator } = this.props;
            if (navigator) {
                navigator.push({
                    name: 'Main',
                    component: Main
                });
            }
        }
    }
    render() {
        return (
            <View style={{
                width: width,
                height: height,
                flexDirection: 'column',
                backgroundColor: 'rgb(0,116,200)'
            }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={false}  //是否隐藏状态栏。  
                    backgroundColor={'rgb(0,116,200)'} //状态栏的背景色  
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <View style={{
                    width: width,
                    height: height - StatusBar.currentHeight,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: width * 0.7,
                        height: width * 0.7
                    }} source={require('../pic/icon.png')}></Image>
                    <TextInput
                        style={{
                            width: 0.7 * width,
                            height: 30,
                            borderRadius: 3,
                            fontSize: 12,
                            backgroundColor: '#e9e9e9',
                            padding: 0,
                            marginBottom: 30
                        }}
                        placeholder={this.state.placeholderu}
                        textAlign={'center'}
                        onChangeText={(text) => this.setState({ user: text })}
                        value={this.state.user}
                        underlineColorAndroid='transparent'
                        ref='textinputu'
                    />
                    <TextInput
                        style={{
                            width: 0.7 * width,
                            height: 30,
                            borderRadius: 3,
                            fontSize: 12,
                            backgroundColor: '#e9e9e9',
                            padding: 0,
                            marginBottom: 30
                        }}
                        placeholder={this.state.placeholderp}
                        textAlign={'center'}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        underlineColorAndroid='transparent'
                        ref='textinputp'
                        secureTextEntry={true}
                    />
                    <Button
                        ButtonWidth={width * 0.7}
                        ButtonHeight={30}
                        fontSize={15}
                        bgColor={'rgb(0,207,79)'}
                        text={'登录'}
                        color={'white'}
                        borderRadius={3}
                        borderWidth={0}
                        press={this.Jump_to_main.bind(this)} />
                </View>
            </View>
        );
    }
}
