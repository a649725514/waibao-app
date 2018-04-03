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
                width: width-30,
                height: 90,
                borderWidth:1,
                borderColor:'#e9e9e9',
                borderRadius:2
            }}>
               <View style={{
                   width:width-30,
                   height:60,
                   flexDirection:'row',
               }}>
                    <View style={{
                        width:50,
                        height:60,
                    }}>
                        <Image style={{
                            width:50,
                            height:50,
                            borderRadius:25,
                            borderWidth:1,
                            borderColor:'#e9e9e9',
                            marginTop:10
                        }} source={this.props.pic}></Image>
                    </View>
                    <View style={{
                        width:width-80,
                        height:60,
                    }}>
                        <View style={{
                            width:width-80,
                            height:35,
                            borderBottomColor:'#e9e9e9',
                            borderBottomWidth:1,
                            flexDirection:'row'
                        }}>
                            <View style={{
                                width:width/2-40,
                                height:35,
                                justifyContent:'flex-start',
                                alignItems:'center',
                                flexDirection:'row'
                            }}>
                                <Text style={{
                                    color:'rgb(40,168,80)',
                                    marginLeft:10
                                }}>{this.props.name}</Text>
                            </View>
                            <View style={{
                                width:width/2-40,
                                height:35,
                                justifyContent:'center',
                                alignItems:'flex-end'
                            }}>
                                <Text style={{
                                    color:'rgb(0,122,255)',
                                    marginRight:10
                                }}>{'回复'}</Text>
                            </View>
                        </View>
                        <View style={{
                            width:width-80,
                            height:25,
                            justifyContent:'center',
                            alignItems:'flex-start'
                        }}>
                            <Text style={{
                                color:'black',
                                marginLeft:10
                            }}>{this.props.comment}</Text>
                        </View>
                    </View>
               </View>
               <View style={{
                   width:width-30,
                   height:30,
                   flexDirection:'row'
               }}>
                    <View style={{
                        width:50,
                        height:30,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'black'
                        }}>{this.props.count+'L'}</Text>
                    </View>
                    <View style={{
                        width:width-80,
                        height:30,
                        justifyContent:'center',
                        alignItems:'flex-end'
                    }}>
                        <Text style={{
                            marginRight:10
                        }}>{this.props.time}</Text>
                    </View>
               </View>
            </View>
        );
    }
}

Commentitem.propTypes = {
    pic:PropTypes.number.isRequired,
    comment:PropTypes.string.isRequired,
    time:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    count:PropTypes.number.isRequired
}
Commentitem.defaultProps = {
    
}