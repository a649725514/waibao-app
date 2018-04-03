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
export default class Commentitem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{
                width: width,
                height: 60,
                borderBottomColor:'#e9e9e9',
                borderTopColor:'#e9e9e9',
                borderBottomWidth:1,
                borderTopWidth:1,
                flexDirection:'row'
            }}>
                <View style={{
                    width:80,
                    height:60,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Image style={{
                        width:50,
                        height:50,
                        borderRadius:25,
                    }} source={this.props.pic}></Image>
                </View>
                <View style={{
                    width:width-120,
                    height:60
                }}>
                    <View style={{
                        width:width-120,
                        height:30,
                        justifyContent:'center',
                        alignItems:'flex-start'
                    }}>
                        <Text style={{color:'black'}}>{this.props.name}</Text>
                    </View>
                    <View style={{
                        width:width-120,
                        height:30,
                        justifyContent:'center',
                        alignItems:'flex-start'
                    }}>
                        <Text style={{color:'black'}}>{this.props.from}</Text>
                    </View>
                </View>
                <View style={{
                    width:40,
                    height:60,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <View style={{
                        width:10,
                        height:10,
                        borderRadius:5,
                        backgroundColor:this.props.color
                    }}></View>
                </View>
            </View>
        );
    }
}

Commentitem.propTypes = {
    pic:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    from:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
}
Commentitem.defaultProps = {
    
}