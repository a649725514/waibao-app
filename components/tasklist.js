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

export default class Tasklist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <TouchableOpacity style={{
                width:width,
                height:60,
              }} onPress={this.props.press}>
                <View style={{
                    width:width,
                    height:60,
                }}>
                        <View style={{
                            width:width,
                            height:30,
                            flexDirection:'row'
                        }}>
                            <View style={{
                                width:width/2-20,
                                height:30,
                                justifyContent:'center',
                                alignItems:'flex-start',
                                marginLeft:20
                            }}>
                                <Text style={{color:'black'}}>{this.props.name}</Text>
                            </View>
                            <View style={{
                                width:width/2-20,
                                height:30,
                                justifyContent:'center',
                                alignItems:'flex-end',
                                marginRight:20
                            }}>
                                <Rating
                                    type="star"
                                    startingValue={this.props.star}
                                    readonly
                                    imageSize={15}
                                    ratingCount={3}
                                />
                            </View>
                        </View>
                        <View style={{
                            width:width,
                            height:30,
                            flexDirection:'row'
                        }}>
                            <View style={{
                                width:width/2-20,
                                height:30,
                                justifyContent:'center',
                                alignItems:'flex-start',
                                marginLeft:20
                            }}>
                                <Text style={{fontSize:12}}>{'工作量'+this.props.time}</Text>
                            </View>
                            <View style={{
                                width:width/2-20,
                                height:30,
                                justifyContent:'center',
                                alignItems:'flex-end',
                                marginRight:20
                            }}>
                                <Text style={{fontSize:12}}>{this.props.start_date+'-'+this.props.end_date}</Text>
                            </View>
                        </View>
                </View>
            </TouchableOpacity>
        );
    }
}

Tasklist.propTypes = {
    name:PropTypes.string.isRequired,
    star:PropTypes.number.isRequired,
    time:PropTypes.number.isRequired,
    start_date:PropTypes.string.isRequired,
    end_date:PropTypes.string.isRequired,
    press:PropTypes.func.isRequired
}
Tasklist.defaultProps = {
    
}