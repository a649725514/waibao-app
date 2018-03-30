import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
export default class Button extends React.Component {
    
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.press}>
            <View style={{
                width:this.props.ButtonWidth,
                height:this.props.ButtonHeight,
                backgroundColor: this.props.bgColor,
                borderRadius:this.props.borderRadius,
                borderColor:this.props.borderColor,
                borderWidth:this.props.borderWidth,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text style={{
                    fontSize:this.props.fontSize,
                    color:this.props.color
                }}>{this.props.text}</Text>
            </View>
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    //press:PropTypes.func.isRequired,
    bgColor:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
}
Button.defaultProps = {
    ButtonWidth:100,
    ButtonHeight:40,
    fontSize:18,
    borderRadius:5,
    color: 'white',
    press: function () {
        alert("You can design the function by yourself !");
    },
    borderColor:'#e9e9e9',
    borderWidth:1
}