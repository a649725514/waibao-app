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
      title: '发布',
      body: '2017-12-15'
    },
    {
      title: '编码',
      body: '2018-1-3'
    },
    {
      title: '交付',
      body: ''
    },
    {
      title: '完工',
      body: ''
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
export default class Process extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows(data),
            currentPage:1
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

Process.propTypes = {

}
Process.defaultProps = {

}