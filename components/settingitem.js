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

export default class Settingitem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <TouchableOpacity style={{
                width: width,
                height: 40,
            }} onPress={this.props.press}>
                <View style={{
                    width: width,
                    height: 40,
                    backgroundColor:'white',
                    flexDirection:'row',
                }}>
                    <View style={{
                        width:width-60,
                        height:40,
                        justifyContent:'center',
                        alignItems:'flex-start'
                    }}>
                        <Text style={{color:'black',marginLeft:20}}>{this.props.title}</Text>
                    </View>
                    <View style={{
                        width:60,
                        height:40,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Image source={require('../icon/chevron-right-b.png')}></Image>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

Settingitem.propTypes = {
    title:PropTypes.string.isRequired,
    press:PropTypes.func.isRequired
}
Settingitem.defaultProps = {
    
}