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

export default class Workproject extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    edit () {
        this.setState({
            editable:!this.state.editable,
        })
    }
    // onChange(event) {
    //     console.log(event.nativeEvent);
    //     this.setState({
    //       introduce:event.nativeEvent.text,
    //       theight:event.nativeEvent.layout.height
    //     })
    // }
    render() {
        return (
            <View style={{
                width: width,
                //height: 35+Math.max(65,this.state.theight),
                backgroundColor:'white'
            }}>
               <View style={{
                   width:width,
                   height:34,
                   flexDirection:'row'
               }}>
                    <View style={{
                        width:width/2,
                        height:34,
                        flexDirection:'row',
                        justifyContent:'flex-start',
                        alignItems:'center'
                    }}>
                        <Text style={{
                            marginLeft:10,
                            color:'black'
                        }}>{this.props.title}</Text>
                    </View>
                    <View style={{
                        width:width/2,
                        height:34,
                        flexDirection:'row',
                        justifyContent:'flex-end',
                        alignItems:'center'
                    }}>
                        <TouchableOpacity onPress={()=>this.edit()}>
                            <Image style={{
                                marginRight:20,
                            }} source={this.props.source}></Image>
                        </TouchableOpacity>
                    </View>
               </View>
               <Bolddivider dividerheight={1} />
               <View style={{
                   width:width,
                   //height:Math.max(65,this.state.theight),
                   justifyContent:'flex-start',
                   alignItems:'center',
                   flexDirection:'row',
                   //margin:20
               }}>
                    <View style={{margin:20,marginRight:10}}>
                        <Button bgColor={'rgb(0,122,255)'} text={'项目A'} ButtonWidth={50} ButtonHeight={20} fontSize={10} />
                    </View>
                    <View style={{margin:20,marginRight:10}}>
                        <Button bgColor={'rgb(0,122,255)'} text={'项目B'} ButtonWidth={50} ButtonHeight={20} fontSize={10} />
                    </View>
                    <View style={{margin:20,marginRight:10}}>
                        <Button bgColor={'rgb(0,122,255)'} text={'项目C'} ButtonWidth={50} ButtonHeight={20} fontSize={10} />
                    </View>
                    <View style={{margin:20,marginRight:10}}>
                        <Button bgColor={'rgb(0,122,255)'} text={'项目D'} ButtonWidth={50} ButtonHeight={20} fontSize={10} />
                    </View>
               </View>
            </View>
        );
    }
}

Workproject.propTypes = {

}
Workproject.defaultProps = {
    title:'参与项目',
    source:null,
}