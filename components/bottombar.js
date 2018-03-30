import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import Main from '../pages/main';
import Message from '../pages/message';
import {Navigator} from 'react-native-deprecated-custom-components';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class Bottombar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{
                width: width,
                height: 50,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:this.props.backgroundColor,
                elevation: this.props.elevation,
            }}>
            <TouchableOpacity onPress={this.props.Jump_to_drawer}>
               <View style={{
                   width:width/4,
                   height:50,
                   flexDirection:'column',
                   justifyContent:'center',
                   alignItems:'center',
               }}>
                    <Image source={require('../icon/drawer-b.png')}></Image>
                    <Text style={{fontSize:10}}>{'工作台'}</Text>
               </View> 
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.Jump_to_message}>
               <View style={{
                   width:width/4,
                   height:50,
                   flexDirection:'column',
                   justifyContent:'center',
                   alignItems:'center',
               }}>
                    <Image source={require('../icon/envelope-b.png')}></Image>
                    <Text style={{fontSize:10}}>{'消息'}</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.Jump_to_group}> 
               <View style={{
                   width:width/4,
                   height:50,
                   flexDirection:'column',
                   justifyContent:'center',
                   alignItems:'center',
               }}>
                    <Image source={require('../icon/group-b.png')}></Image>
                    <Text style={{fontSize:10}}>{'通讯录'}</Text>
               </View> 
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.Jump_to_pie_chart}>
               <View style={{
                   width:width/4,
                   height:50,
                   flexDirection:'column',
                   justifyContent:'center',
                   alignItems:'center',
               }}>
                    <Image source={require('../icon/pie-chart-b.png')}></Image>
                    <Text style={{fontSize:10}}>{'工作统计'}</Text>
               </View> 
            </TouchableOpacity>
            </View>
        );
    }
}

Bottombar.propTypes = {
    Jump_to_drawer : PropTypes.func.isRequired,
    Jump_to_message : PropTypes.func.isRequired,
    Jump_to_group : PropTypes.func.isRequired,
    Jump_to_pie_chart : PropTypes.func.isRequired,
}
Bottombar.defaultProps = {
    backgroundColor:'rgb(246,246,246)',
    elevation:4
}