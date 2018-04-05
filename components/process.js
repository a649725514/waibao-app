import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    StyleSheet,
    ListView,
    AsyncStorage
} from 'react-native';
import PropTypes from 'prop-types';
import Bolddivider from './bolddivider';
import StepIndicator from 'react-native-step-indicator';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const stepIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
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
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        var data = [
            {
                title: '发布',
                body: ''
            },
            {
                title: '编码',
                body: ''
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

        this.state = {
            dataSource: ds.cloneWithRows(data),
            db: data,
            currentPage: 0
        };
        AsyncStorage.getItem('token', (error, result) => {
            if (!error) {
                var url = 'http://120.78.74.75:8080/demo/s/getTaskInfoById?id=' + this.props.id; // 接口url
                fetch(url, {
                    "method": 'GET',
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + result
                    },
                })
                    .then(
                        (res) => {
                            if (res.ok) {
                                return res.json()
                            } else {
                                console.log(res)
                                throw new Error('BIG_ERROR')
                            }

                        }
                    )
                    .then((PromiseValue) => {
                        var data = this.state.db;
                        for (var i = 0; i < 4; i++) {
                            data[i].body = PromiseValue.statusChangeTime[i] ? PromiseValue.statusChangeTime[i].split(" ")[0] : '';
                        }
                        this.setState({
                            dataSource: this.state.dataSource.cloneWithRows([]),
                            db: data,
                            currentPage: PromiseValue.statusChangeTime.length - 1
                        });
                    })
                    .catch((error) => { // 错误处理

                    })
                    .done(() => {
                        console.log(this.state.dataSource)
                        this.setState({
                            dataSource: this.state.dataSource.cloneWithRows(this.state.db)
                        })
                    });
            }
        })

    }

    renderPage = (rowData) => {
        console.log(rowData)
        return (
            <View style={{
                flex: 3,
                paddingVertical: 25
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
                    fontSize: 15,
                    color: '#606060',
                    lineHeight: 24,
                    marginRight: 8
                }}>{rowData.body}</Text>
            </View>
        )
    }
    getVisibleRows = (visibleRows) => {
        const visibleRowNumbers = Object.keys(visibleRows.s1).map((row) => parseInt(row));
        this.setState({ currentPage: visibleRowNumbers[0] })
    }
    render() {
        return (
            <View style={{
                width: width,
                //height: 35+Math.max(65,this.state.theight),
                backgroundColor: 'white',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <View style={{
                    width: width,
                    height: 300,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginLeft: 20,
                    marginRight: 20,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: width / 2 - 20,
                        height: 300,
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}>
                        <StepIndicator
                            customStyles={stepIndicatorStyles}
                            stepCount={4}
                            direction='vertical'
                            currentPosition={this.state.currentPage}
                            labels={this.state.db.map(item => item.title)}
                        />
                    </View>
                    <View style={{
                        width: width / 2 - 20,
                        height: 300,
                        alignItems: 'flex-start',
                        justifyContent: 'center'
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
    id: 0
}