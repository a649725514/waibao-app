import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    StyleSheet,
    ListView
} from 'react-native';
import PropTypes from 'prop-types';
import Bolddivider from './bolddivider';
import StepIndicator from 'react-native-step-indicator';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const data = [
    {
      title: '2017-12-25',
      body: '服务虹软公司'
    },
    {
      title: '2017-04-01',
      body: '服务公司O'
    },
    {
      title: '2016-09-01',
      body: '服务公司U'
    },
    {
      title: '2015-09-01',
      body: '服务公司Y，担任XXX职务，协助完成了XXX任务'
    },
]
const stepIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize:40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: 'rgb(37,118,226)',
    separatorFinishedColor: 'rgb(37,118,226)',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'rgb(37,118,226)',
    stepIndicatorUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 15,
    currentStepLabelColor: 'rgb(37,118,226)'
  }
export default class Workexp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows(data),
            currentPage:0
        };
    }
    renderPage = (rowData) => {
        return (
          <View style={{
            flex:3,
            paddingVertical:25
          }}>
            {/* <Text style={{
                flex: 1,
                fontSize:20,
                color:'#333333',
                paddingVertical:16,
                fontWeight:'600'
            }}>{rowData.title}</Text> */}
            <Text style={{
                flex: 1,
                fontSize:15,
                color:'#606060',
                lineHeight:24,
                marginRight:8
            }}>{rowData.body}</Text>
          </View>
        )
    }
    getVisibleRows = (visibleRows) => {
        const visibleRowNumbers = Object.keys(visibleRows.s1).map((row) => parseInt(row));
        this.setState({currentPage:visibleRowNumbers[0]})
    }
    render() {
        return (
            <View style={{
                width: width,
                //height: 35+Math.max(65,this.state.theight),
                backgroundColor:'white',
                justifyContent:'center',
                alignContent:'center'
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
                   height:300,
                   justifyContent:'flex-start',
                   alignItems:'center',
                   marginLeft:20,
                   marginRight:20,
                   flexDirection:'row'
               }}>
                    <View style={{
                        width:width/2-20,
                        height:300,
                        alignItems:'flex-start',
                        justifyContent:'center'
                    }}>
                    <StepIndicator
                        customStyles={stepIndicatorStyles}
                        stepCount={4}
                        direction='vertical'
                        currentPosition={this.state.currentPage}
                        labels={data.map(item => item.title)}
                    />
                    </View>
                    <View style={{
                        width:width/2-20,
                        height:300,
                        alignItems:'flex-start',
                        justifyContent:'center'
                    }}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderPage}
                            onChangeVisibleRows={this.getVisibleRows}
                        />
                    </View>
               </View>
            </View>
        );
    }
}

Workexp.propTypes = {

}
Workexp.defaultProps = {
    title:'工作经历',
    source:null,
}