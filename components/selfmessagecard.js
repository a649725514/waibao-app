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
export default class Selfmessagecard extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{
                width: width,
                height: height*0.4,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'rgb(43,130,163)',
            }}>
               <View style={{
                   width:width,
                   height:height*0.2,
                   justifyContent:'center',
                   alignItems:'center'
               }}>
                    <View style={{
                        width:height*0.16,
                        height:height*0.16,
                        borderRadius:height*0.08,
                        borderColor:'#f9f9f9',
                        borderWidth:1,
                    }}>
                        <Image style={{
                            width:height*0.16,
                            height:height*0.16,
                            borderRadius:height*0.08,
                        }} source={this.props.pic}></Image>
                    </View>
               </View> 
               <View style={{
                   width:width,
                   height:height*0.2,
                   justifyContent:'center',
                   alignItems:'center'
               }}>
                    <View style={{
                        width:width,
                        height:height*0.2/3,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white',
                            fontSize:18
                        }}>{this.props.name}</Text>
                    </View>
                    <View style={{
                        width:width,
                        height:height*0.2/3,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color:'white',
                        }}>{this.props.company}</Text>
                    </View>
                    <View style={{
                        width:width,
                        height:height*0.2/3,
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <View style={{
                            width:width/2,
                            height:height*0.2/3,
                            flexDirection:'row',
                            justifyContent:'flex-end',
                            alignItems:'center'
                        }}>
                            <Image source={require('../icon/phone.png')}></Image>
                            <Text style={{
                                color:'white',
                                fontSize:12,
                                marginRight:20,
                                marginLeft:20
                            }}>{this.props.phone}</Text>
                        </View>
                        <View style={{
                            width:width/2,
                            height:height*0.2/3,
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <Image source={require('../icon/envelope.png')}></Image>
                            <Text style={{
                                color:'white',
                                fontSize:12,
                                marginRight:20,
                                marginLeft:20
                            }}>{this.props.email}</Text>
                        </View>
                    </View>
               </View>
            </View>
        );
    }
}

Selfmessagecard.propTypes = {
    //press:PropTypes.func.isRequired,
    // handleMenu : PropTypes.func.isRequired,
    // source1 : PropTypes.number.isRequired,
    // title : PropTypes.string.isRequired,
    // press : PropTypes.func.isRequired,
    // source2 : PropTypes.number.isRequired
}
Selfmessagecard.defaultProps = {
    name : '王小红',
    company : 'D外包公司',
    phone : '123-4567-8912',
    email : '12389@qq.com',
    pic : null,
}