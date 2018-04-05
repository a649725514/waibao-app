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
    TextInput,
    AsyncStorage
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
        AsyncStorage.setItem("token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDAwMCIsImNyZWF0ZWQiOjE1MjI4MTE0MzM3MDAsImV4cCI6MTUyMzQxNjIzM30.jPO7MZWvrEQnLL8M-O2yn_GONx1X-YvFvEI2yMIIj4W-agNq53fXJRD9Fe46HygTsVD1ubvkKprOMCOWZgA-DQ", (error) => {
            if (error) {

            } else {

                AsyncStorage.getItem('token', (error, result) => {
                    if (!error) {

                        var url = 'http://120.78.74.75:8080/demo/s/getInfoOfCurrentUser'; // 接口url
                        fetch(url, {
                            "method": 'GET',
                            "headers": {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + result
                            },
                        })
                            .then(
                                (res) => {
                                    if (res.ok) {
                                        return res.json()
                                    } else {
                                        throw new Error('BIG_ERROR')
                                    }

                                }
                            ).then((PromiseValue) => {
                                console.log(PromiseValue)
                                const { navigator } = this.props;
                                if (navigator) {
                                    navigator.push({
                                        name: 'Main',
                                        component: Main,
                                        params: {
                                            mineInfo: PromiseValue
                                        }
                                    });
                                }
                            })
                            .catch((error) => { // 错误处理

                            })
                            .done();
                    }
                })

            }
        })
    }

    Jump_to_main() {
        if (this.state.user == '') {
            this.refs.textinputu.setNativeProps({ placeholderTextColor: 'red' })
        } else if (this.state.password == '') {
            this.refs.textinputp.setNativeProps({ placeholderTextColor: 'red' })
        } else {
            var url = 'http://120.78.74.75:8080/demo/auth'; // 接口url
            fetch(url, {
                "method": 'POST',
                "headers": {
                    "Content-Type": "application/json",
                },
                "body": JSON.stringify({
                    "username": this.state.user,
                    "password": this.state.password,
                })
            }).then(
                (res) => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        throw new Error('BIG_ERROR')
                    }

                }
            ).then((PromiseValue) => {
                AsyncStorage.setItem("token", PromiseValue.token, (error) => {
                    if (error) {
                    } else {

                        var url = 'http://120.78.74.75:8080/demo/s/getInfoOfCurrentUser'; // 接口url
                        fetch(url, {
                            "method": 'GET',
                            "headers": {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + PromiseValue.token
                            },
                        })
                            .then(
                                (res) => {
                                    if (res.ok) {
                                        return res.json()
                                    } else {
                                        throw new Error('BIG_ERROR')
                                    }

                                }
                            ).then((PromiseValue) => {
                                const { navigator } = this.props;
                                if (navigator) {
                                    navigator.push({
                                        name: 'Main',
                                        component: Main,
                                        params: {
                                            mineInfo: PromiseValue
                                        }
                                    });
                                }
                            })
                            .catch((error) => { // 错误处理

                            })
                            .done();

                    }
                })
            })
                .catch((error) => { // 错误处理

                })
                .done();
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
