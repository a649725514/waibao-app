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
import { Rating } from 'react-native-elements';
import Breadcrumb from 'react-native-breadcrumb';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class Projectmessage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    };
    
    render() {
        return (
            <View style={{
                width: width,
                height: 100,
                backgroundColor:'white'
            }}>
               <View style={{
                   width:width,
                   height:50,
                   flexDirection:'row',
                   //backgroundColor:'pink',
                   alignItems:'center',
                   //justifyContent:'flex-start'
               }}>
                    <View style={{
                        width:width/2,
                        height:50,
                        justifyContent:'center'
                    }}>
                        <Text style={{color:'black',fontSize:18,marginLeft:20}}>{this.props.name}</Text>
                    </View>
                    <View style={{
                        width:width/2-20,
                        height:50,
                        justifyContent:'center',
                        alignItems:'flex-end'
                    }}>
                        <Rating
                            type="star"
                            startingValue={2}
                            readonly
                            imageSize={15}
                            ratingCount={3}
                        />
                    </View>
               </View>
               <View style={{
                   width:width-20,
                   height:50,
                   justifyContent:'center',
                   alignItems:'flex-start',
                   marginLeft:20
               }}>
                    <Breadcrumb
                        entities={['截止于'+this.props.date,'周期'+this.props.mounth+'个月',this.props.count+'人参与']}
                        isTouchable={false}
                        flowDepth={0}
                        height={22}
                        onCrumbPress={index => {}}
                        borderRadius={5}
                    />
               </View>
            </View>
        );
    }
}

Projectmessage.propTypes = {

}
Projectmessage.defaultProps = {
    name:'项目B',
    source:null,
    date:'2018-7-30',
    mounth:5,
    count:8
}