import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    ListView,
    AsyncStorage
} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import PropTypes from 'prop-types';
import Commentitem from './commentitem';
import Memberitem from './memberitem';
import Tasklist from './tasklist';
import Bolddivider from './bolddivider';
const color = ['rgb(239,27,43)', 'rgb(255,152,42)', 'rgb(68,68,68)'];
const colors = ['rgb(0,148,226)','black'];

export default class Comment1 extends React.Component {
    constructor(props) {
        super(props);

        var data = [
        ];
        var data1 = [
        ]
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            placeholder: '我也说一句',
            comment: '',
            dataSource: ds.cloneWithRows(data),
            dataSource1: ds.cloneWithRows(data1),
            db: data,
            db1: data1,
            height1: data.length * 90 + 140,
            height2: 0,
            color1:colors[0],
            color2:colors[1],
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token', (error, result) => {
            if (!error) {

                var url = 'http://120.78.74.75:8080/demo/s/getUsersOfTask?taskid='+this.props.id; // 接口url
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
                                throw new Error('BIG_ERROR')
                            }

                        }
                    ).then((PromiseValue) => {
                        this.setState({
                            dataSource1: this.state.dataSource.cloneWithRows(PromiseValue),
                            db1: PromiseValue,
                            height1: PromiseValue * 90 + 140,
                        });                        
                    })
                    .catch((error) => { // 错误处理

                    })
                    .done();
            }
        })

        AsyncStorage.getItem('token', (error, result) => {
            if (!error) {

                var url = 'http://120.78.74.75:8080/demo/msg/getmsgOfTask?taskid='+this.props.id; // 接口url
                fetch(url, {
                    "method": 'POST',
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
                                throw new Error('BIG_ERROR')
                            }

                        }
                    ).then((PromiseValue) => {
                        this.setState({
                            dataSource: this.state.dataSource.cloneWithRows(PromiseValue.reverse()),
                            db: PromiseValue.reverse(),
                        });                        
                    })
                    .catch((error) => { // 错误处理

                    })
                    .done();
            }
        })
    }
    renderPage = (rowData, sectionId, rowId) => {
        return (
            <Commentitem pic={rowData.pic} comment={rowData.context} time={rowData.time.substring(0, 10)} name={rowData.userName} count={rowId} />
        )
    }
    renderPage1 = (rowData) => {
        return (
            <Memberitem name={rowData.name} from={rowData.department +' '+ rowData.offer} pic={rowData.pic}  />
            // color={color[rowData.level]}
        )
    }
    renderSeparator = () => {
        return (
            <Bolddivider dividerheight={1} />
        )
    }
    press1() {
        this.refs.view1.setNativeProps({ display: 'flex' })
        this.refs.comment.setNativeProps({ borderBottomColor:'rgb(0,148,226)' })
        this.refs.member.setNativeProps({ borderBottomColor:'#e9e9e9' })
        this.setState({ color1:colors[0],color2:colors[1] })
        this.setState({
            height1: this.state.db.length * 90 + 140,
            height2: 0,
        })
    }
    press2() {
        this.refs.view1.setNativeProps({ display: 'none' })
        this.refs.member.setNativeProps({ borderBottomColor:'rgb(0,148,226)' })
        this.refs.comment.setNativeProps({ borderBottomColor:'#e9e9e9' })
        this.setState({ color1:colors[1],color2:colors[0]})
        this.setState({
            height1: 0,
            height2: this.state.db1.length * 60 + 10,
        })
    }
    render() {
        return (
            <View style={{
                width: width,
                backgroundColor: 'white'
            }}>
                <View style={{
                    width: width,
                    height: 40,
                    flexDirection: 'row',
                }}>
                    <View
                        style={{
                            width: width / 3,
                            height: 40,
                            borderBottomWidth: 2,
                            borderBottomColor: 'rgb(0,148,226)'
                        }}
                        ref='comment'>
                        <TouchableOpacity style={{
                            width: width / 3,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => this.press1()}>
                            <Text style={{ color: this.state.color1 }}>{'评论'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            width: width / 3,
                            height: 40,
                            borderBottomWidth: 2,
                            borderBottomColor: '#e9e9e9'
                        }}
                        ref='member'>
                        <TouchableOpacity style={{
                            width: width / 3,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => this.press2()}>
                            <Text style={{ color: this.state.color2 }}>{'成员'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            width: width / 3,
                            height: 40,
                            borderBottomWidth: 2,
                            borderBottomColor: '#e9e9e9'
                        }}
                        ref='task'>
                    </View>
                </View>
                <View
                    style={{
                        width: width,
                        height: this.state.height1,
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}
                    ref='view1'>
                    <View style={{
                        width: width - 30,
                        height: 100,
                        borderWidth: 1,
                        borderColor: '#e9e9e9',
                        borderRadius: 3,
                        marginTop: 10
                    }}>
                        <View style={{
                            width: width - 30,
                            height: 70,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TextInput
                                style={{
                                    width: width - 30,
                                    height: 70,
                                }}
                                multiline={true}
                                placeholder={this.state.placeholder}
                                onChangeText={(text) => this.setState({ comment: text })}
                                value={this.state.comment}
                                underlineColorAndroid='transparent'
                                ref='textinput'
                                textAlignVertical={'top'}
                            />
                        </View>
                        <View style={{
                            width: width - 30,
                            height: 30,
                            justifyContent: 'center',
                            alignItems: 'flex-end'
                        }}>
                            <Image style={{
                                marginRight: 10
                            }} source={require('../icon/paperplane-b.png')}></Image>
                        </View>
                    </View>
                    <View style={{
                        width: width,
                        height: this.state.db.length * 90 + 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderPage}
                        />
                    </View>
                </View>
                <View
                    style={{
                        width: width,
                        height: this.state.height2,
                        marginTop: 20,
                    }}
                    ref='view2'>
                    <ListView
                        dataSource={this.state.dataSource1}
                        renderRow={this.renderPage1}
                    />
                </View>
            </View>
        );
    }
}

Comment1.propTypes = {

}
Comment1.defaultProps = {

}