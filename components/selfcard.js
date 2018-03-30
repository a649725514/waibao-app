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

export default class Selfcard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <View style={{
                width: width*0.7,
                height: 90,
                flexDirection:'row',
                backgroundColor:'rgb(43,130,163)'
            }}>
               <View style={{
                   width:90,
                   height:90,
                   justifyContent:'center',
                   alignContent:'center'
               }}>
                    <Image style={{
                        width:50,
                        height:50,
                        borderRadius:25,
                        marginLeft:20
                    }} source={this.props.source}>
                    </Image>
               </View>
               <View style={{
                   width:width*0.7-90,
                   height:90,
                   justifyContent:'center',
                   alignItems:'flex-start',
               }}>
                    <Text style={{color:'white',fontSize:15,margin:5}}>{this.props.name}</Text>
                    <Text style={{color:'white',margin:5}}>{this.props.company}</Text>
               </View>
            </View>
        );
    }
}

Selfcard.propTypes = {

}
Selfcard.defaultProps = {
    name:'王小红',
    source:require('../pic/02.png'),
    company:'D外包公司'
}