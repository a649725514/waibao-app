import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    StyleSheet,
    Animated,
    ListView,
    Easing
} from 'react-native';
import PropTypes from 'prop-types';
import Bolddivider from './bolddivider';
import Button from './button';
import { Rating } from 'react-native-elements';
import Tasklist from './tasklist'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,sectionHeaderHasChanged: (s1, s2) => s1 !== s2});
const data = [
    {
        name: '任务a',
        star: 2,
        time: 8,
        start_date:'3.1',
        end_date:'4.1'
    },
    {
        name: '任务c',
        star: 3,
        time: 8,
        start_date:'2.11',
        end_date:'4.1'
    },
    {
        name: '任务d',
        star: 2,
        time: 8,
        start_date:'2.1',
        end_date:'4.3'
    },
    {
        name: '任务e',
        star: 2,
        time: 8,
        start_date:'1.8',
        end_date:'3.1'
    },
]
export default class Projectlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showAnim:new Animated.Value(0),
            rotateValue: new Animated.Value(0),
            dataSource: ds.cloneWithRows(data),
        };
        this.showorhide=0;
    }
    renderRow = (rowData,sectionId,rowId) => {
        return(
            <Tasklist 
                name={rowData.name}
                star={rowData.star}
                time={rowData.time}
                end_date={rowData.end_date}
                start_date={rowData.start_date}
                press={this.props.press} />
        )
    }
    showorhideItems(){
        Animated.timing( 
           this.state.showAnim,
           {  
             toValue: this.showorhide==0?1:0  
           } 
         ).start();
         Animated.timing(this.state.rotateValue,
            {
                toValue: (this.showorhide==0?1:0)*90,
                duration: 300,
                easing: Easing.linear
            }
        ).start();  
        this.showorhide=this.showorhide==0?1:0;  
    }
    render() {
        return (
            <View style={{
                width:width,
            }}>
                  <TouchableOpacity style={{width:width,height:40}} onPress={()=>this.showorhideItems()}>
                      <View style={{
                          width:width,
                          height:40,
                          flexDirection:'row',
                      }}>
                          <View style={{
                              width:width/2,
                              height:40,
                              flexDirection:'row',
                              alignItems:'center',
                              justifyContent:'flex-start'
                          }}>
                              <Animated.Image style={{
                                  marginLeft:20,
                                  transform:[{rotate: this.state.rotateValue.interpolate({inputRange: [0, 360],outputRange: ['0deg', '360deg']})}]
                              }} source={require('../icon/chevron-right-b.png')}></Animated.Image>
                              <TouchableOpacity onPress={this.props.Jump_to_project}>
                                    <Text style={{
                                        color:'black',
                                        marginLeft:20
                                    }}>{this.props.name}</Text>
                              </TouchableOpacity>
                          </View>
                          <View style={{
                              width:width/2-20,
                              height:40,
                              flexDirection:'row',
                              alignItems:'center',
                              justifyContent:'flex-end',
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
                  </TouchableOpacity>
                  <Animated.View style={{
                      width:width,
                      height:this.state.showAnim.interpolate({  
                          inputRange: [0, 1],  
                          outputRange: [0, data.length*60]  
                      }),  
                      overflow:'hidden',
                  }}>
                      <Bolddivider dividerheight={1} />
                      <ListView 
                          dataSource={this.state.dataSource}
                          renderRow={(rowData,sectionId,rowId)=>this.renderRow(rowData,sectionId,rowId)}
                          renderSeparator={this.renderSeparator} />
                  </Animated.View>
            </View>
        );
    }
}

Projectlist.propTypes = {
    name:PropTypes.string.isRequired,
    star:PropTypes.number.isRequired,
    Jump_to_project:PropTypes.func.isRequired,
    press:PropTypes.func.isRequired
}
Projectlist.defaultProps = {
    
}