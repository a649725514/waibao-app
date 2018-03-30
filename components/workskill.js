import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    StyleSheet,
    Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import Bolddivider from './bolddivider';
import ProgressBar from 'react-native-progress/Bar';
import { Slider } from 'react-native-elements'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Workskill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            skill: '',
            value: 0
        };
        //add:0
    }
    edit() {
        this.setState({
            isModal: !this.state.editable,
        })
    }
    sure() {
        this.onRequestClose();
        this.setState({
            skill:'',
            value:0
        })
        //this.add = 1
    }
    cancel() {
        this.onRequestClose();
        this.setState({
            skill:'',
            value:0
        })
    }
    onRequestClose() {
        this.setState({
            isModal: false
        });
    }
    render() {
        return (
            <View style={{
                width: width,
                //height: 35+Math.max(65,this.state.theight),
                backgroundColor: 'white'
            }}>
                <Modal
                    animationType='fade'            // 淡入淡出
                    transparent={true}              // 透明
                    visible={this.state.isModal}    // 根据isModal决定是否显示
                    onRequestClose={() => { this.onRequestClose() }}  // android必须实现
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: width, height: height, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{
                            width: width - 60,
                            height: 200,
                            backgroundColor: 'white',
                            borderWidth: 1,
                            borderRadius: 2,
                            borderColor: '#e9e9e9',
                            elevation: 2
                        }}>
                            <View style={{
                                width: width - 60,
                                height: 75,
                            }}>
                                <View style={{
                                    width: width - 60,
                                    height: 38,
                                    justifyContent: 'center',
                                    alignItems: 'flex-start'
                                }}>
                                    <Text style={{ color: 'black', marginLeft: 20, fontSize: 18 }}>{'技能名称：'}</Text>
                                </View>
                                <View style={{
                                    width: width - 60,
                                    height: 38,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <TextInput
                                        style={{
                                            width: width - 100,
                                            height: 38
                                            //backgroundColor:'yellow'
                                        }}
                                        editable={true}
                                        underlineColorAndroid={'rgb(0,122,255)'}
                                        onChangeText={(text) => this.setState({ skill: text })}
                                    ></TextInput>
                                </View>
                            </View>
                            <View style={{
                                width: width - 60,
                                height: 75,
                            }}>
                                <View style={{
                                    width: width - 60,
                                    height: 35,
                                    justifyContent: 'center',
                                    alignItems: 'flex-start'
                                }}>
                                    <Text style={{ color: 'black', marginLeft: 20, fontSize: 18 }}>{'熟练度：'+Math.ceil(this.state.value*100)+'%'}</Text>
                                </View>
                                <Slider
                                    value={this.state.value}
                                    onValueChange={(value) => this.setState({ value })}
                                    style={{marginLeft:20,width:width-100, height: 40}}
                                    disabled={false}
                                    thumbTintColor={'rgb(0,122,255)'} />
                            </View>
                            <Bolddivider dividerheight={1} />
                            <View style={{
                                height:49,
                                width:width-60,
                                flexDirection:'row'
                            }}>
                                <View style={{
                                    height:49,
                                    width:width/2-30,
                                    borderRightColor:'#e9e9e9',
                                    borderRightWidth:1,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    <TouchableOpacity style={{
                                        height:49,
                                        width:width/2-30,
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }} onPress={()=>this.sure()}>
                                    <Text>{'确定'}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    height:49,
                                    width:width/2-30,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    <TouchableOpacity style={{
                                        height:49,
                                        width:width/2-30,
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }} onPress={()=>this.cancel()}>
                                    <Text>{'取消'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={{
                    width: width,
                    height: 34,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: width / 2,
                        height: 34,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            marginLeft: 10,
                            color: 'black'
                        }}>{this.props.title}</Text>
                    </View>
                    <View style={{
                        width: width / 2,
                        height: 34,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={() => this.edit()}>
                            <Image style={{
                                marginRight: 20,
                            }} source={this.props.source}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <Bolddivider dividerheight={1} />
                <View style={{
                    width: width,
                    //height:Math.max(65,this.state.theight),
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    margin: 20
                }}>
                    <Text style={{ color: 'black' }}>{'PPT'}</Text>
                    <ProgressBar borderRadius={3} progress={0.8} width={width - 40} />
                    <Text style={{ color: 'black', marginTop: 10 }}>{'墨刀'}</Text>
                    <ProgressBar borderRadius={3} progress={0.6} width={width - 40} />
                    <Text style={{ color: 'black', marginTop: 10 }}>{'Visio'}</Text>
                    <ProgressBar borderRadius={3} progress={0.65} width={width - 40} />
                    <Text style={{ color: 'black', marginTop: 10 }}>{'MindManager'}</Text>
                    <ProgressBar borderRadius={3} progress={0.5} width={width - 40} />
                    
                </View>
            </View>
        );
    }
}

Workskill.propTypes = {

}
Workskill.defaultProps = {
    title: '技能',
    source: null,
}