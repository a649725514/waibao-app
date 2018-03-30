import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import PropTypes from 'prop-types';
export default class TopBar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{
                width: width,
                height: this.props.height,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:this.props.backgroundColor,
                elevation: this.props.elevation,
            }}>
                <TouchableOpacity style={{width:this.props.height,height:this.props.height}} onPress={this.props.handleMenu}>
                    <View style={{width:this.props.height,height:this.props.height,justifyContent:'center',alignItems:'center'}}>
                        <Image source={this.props.source1}></Image>
                    </View>
                </TouchableOpacity>
                <View style={{width:width-2*this.props.height,height:this.props.height,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:this.props.color,fontSize:this.props.fontSize}}>{this.props.title}</Text>
                </View>
                <TouchableOpacity style={{width:this.props.height,height:this.props.height}} onPress={this.props.press}>
                    <View style={{width:this.props.height,height:this.props.height,justifyContent:'center',alignItems:'center'}}>
                        <Image source={this.props.source2}></Image>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

TopBar.propTypes = {
    //press:PropTypes.func.isRequired,
    handleMenu : PropTypes.func.isRequired,
    source1 : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    // press : PropTypes.func.isRequired,
    // source2 : PropTypes.number.isRequired
}
TopBar.defaultProps = {
    height:50,
    backgroundColor:'#476DC5',
    color:'white',
    fontSize:20,
    source2:null,
    press: function () {

    },
    elevation:4
}