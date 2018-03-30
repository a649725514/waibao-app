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
import Button from './button';
import { Rating } from 'react-native-elements';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Cantactlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{
                width:width-20,
                height:100,
                borderColor:'#e9e9e9',
                borderWidth:1,
                borderRadius:2,
                marginLeft:10,
                elevation:2
            }}>
                <View style={{
                    width:width-20,
                    height:20,
                    flexDirection:'row',
                    justifyContent:'flex-start',
                    alignItems:'center'
                }}>
                    <Text style={{color:'black',marginLeft:10}}>{this.props.title}</Text>
                </View>
                <Bolddivider dividerheight={1}/>
                <View style={{
                    width:width-20,
                    height:60,
                    alignItems:'flex-start',
                    justifyContent:'flex-start'
                }}>
                    <Text style={{marginLeft:10,fontSize:12}}>{this.props.content}</Text>
                </View>
                <View style={{
                    width:width-20,
                    height:19,
                    flexDirection:'row',
                    justifyContent:'flex-end',
                    alignItems:'center'
                }}>
                    <Text style={{color:'rgb(0,122,255)',fontSize:12,marginRight:10}}>{this.props.date}</Text>
                </View>
            </View>
        );
    }
}

Cantactlist.propTypes = {
    title:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
}
Cantactlist.defaultProps = {
    
}