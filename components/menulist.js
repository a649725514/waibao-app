import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Bolddivider from './bolddivider';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Menulist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <TouchableOpacity style={{
                width: width*0.7,
                height: 40,
            }} onPress={this.props.press}>
                <View style={{
                    width: width*0.7,
                    height: 40,
                    backgroundColor:'white',
                    flexDirection:'row',
                }}>
                <View style={{
                    width:60,
                    height:40,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                        <Image source={this.props.source}></Image>
                </View>
                <View style={{
                    width:width*0.7-60,
                    height:40,
                    justifyContent:'center',
                    alignItems:'flex-start'
                }}>
                        <Text style={{color:'black'}}>{this.props.content}</Text>
                </View>
                </View>
            </TouchableOpacity>
        );
    }
}

Menulist.propTypes = {
    source:PropTypes.number.isRequired,
    content:PropTypes.string.isRequired,
    press:PropTypes.func.isRequired
}
Menulist.defaultProps = {
    
}