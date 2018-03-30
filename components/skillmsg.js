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
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Skillmsg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return (
            <View style={{
                width: width-20,
                height: 50,
                backgroundColor:'white',
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center',
                marginLeft:20
            }}>
               <Text style={{
                   color:'black',
                   fontSize:15
               }}>{'技能方向'}</Text>
               <View style={{marginLeft:20,marginRight:10}}>
                    <Button bgColor={'rgb(0,122,255)'} borderRadius={3} text={'Java'} ButtonWidth={50} ButtonHeight={25} fontSize={10} />
               </View>
               <View style={{marginRight:10}}>
                    <Button bgColor={'rgb(0,122,255)'} borderRadius={3} text={'PHP'} ButtonWidth={50} ButtonHeight={25} fontSize={10} />
               </View>
               <View style={{marginRight:10}}>
                    <Button bgColor={'rgb(0,122,255)'} borderRadius={3} text={'PS'} ButtonWidth={50} ButtonHeight={25} fontSize={10} />
               </View>
            </View>
        );
    }
}

Skillmsg.propTypes = {

}
Skillmsg.defaultProps = {
    
}