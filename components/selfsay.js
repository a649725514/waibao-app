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

export default class Selfsay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editable:false,
            introduce:'如果你无法简洁的表达你的想法，那只说明你好不够了解它。--阿尔伯特·爱因斯坦',
            theight:0
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
                height: 35+Math.max(65,this.state.theight),
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
                   width:width-10,
                   height:Math.max(65,this.state.theight),
                   justifyContent:'flex-start',
                   alignItems:'flex-start',
                   marginLeft:10
               }}>
                    <TextInput 
                        style={{
                            width:width,
                            height:Math.max(65,this.state.theight)
                            //backgroundColor:'yellow'
                        }}
                        editable={this.state.editable}
                        multiline={true}
                        value={this.state.introduce}
                        underlineColorAndroid={'white'}
                        maxLength={200}
                        //onContentSizeChange={this.onContentSizeChange.bind(this)}
                        onChangeText={(text)=>this.setState({introduce:text})}
                        //onChange={this.onChange.bind(this)}
                        ></TextInput>
               </View>
            </View>
        );
    }
}

Selfsay.propTypes = {

}
Selfsay.defaultProps = {
    title:'个人介绍',
    source:null,
}