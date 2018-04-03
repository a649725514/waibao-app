import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    ListView
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
const data = [
    {
        pic: require('../pic/05.png'),
        comment: '做的不错！',
        time: '3小时前',
        name: '甲',
        count: 1
    },
    {
        pic: require('../pic/04.png'),
        comment: '谢谢！',
        time: '1小时前',
        name: '乙',
        count: 2
    },
    {
        pic: require('../pic/03.png'),
        comment: '/笑',
        time: '3分中前',
        name: '丙',
        count: 3
    },
];
const data1 = [
    {
        name: '甲',
        from: '技术部 职员',
        pic: require('../pic/04.png'),
        level: 0
    },
    {
        name: '乙',
        from: '产品部 产品经理',
        pic: require('../pic/05.png'),
        level: 1
    },
    {
        name: '甲',
        from: 'A外包公司',
        pic: require('../pic/06.png'),
        level: 2
    },
    {
        name: '甲',
        from: 'C外包公司',
        pic: require('../pic/07.png'),
        level: 2
    },
]
const data2 = [
    {
        name: '任务a',
        star: 2,
        time: 8,
        start_date: '3.1',
        end_date: '4.1'
    },
    {
        name: '任务c',
        star: 3,
        time: 8,
        start_date: '2.11',
        end_date: '4.1'
    },
    {
        name: '任务d',
        star: 2,
        time: 8,
        start_date: '2.1',
        end_date: '4.3'
    },
    {
        name: '任务e',
        star: 2,
        time: 8,
        start_date: '1.8',
        end_date: '3.1'
    },
]
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: '我也说一句',
            comment: '',
            dataSource: ds.cloneWithRows(data),
            dataSource1: ds.cloneWithRows(data1),
            dataSource2: ds.cloneWithRows(data2),
            height1: data.length * 90 + 140,
            height2: 0,
            height3: 0,
            color1:colors[0],
            color2:colors[1],
            color3:colors[1],
        }
    }
    renderPage = (rowData) => {
        return (
            <Commentitem pic={rowData.pic} comment={rowData.comment} time={rowData.time} name={rowData.name} count={rowData.count} />
        )
    }
    renderPage1 = (rowData) => {
        return (
            <Memberitem name={rowData.name} from={rowData.from} pic={rowData.pic} color={color[rowData.level]} />
        )
    }
    renderPage2 = (rowData) => {
        return (
            <Tasklist
                name={rowData.name}
                star={rowData.star}
                time={rowData.time}
                end_date={rowData.end_date}
                start_date={rowData.start_date}
                press={this.props.press} />
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
        this.refs.task.setNativeProps({ borderBottomColor:'#e9e9e9' })
        this.setState({ color1:colors[0],color2:colors[1],color3:colors[1] })
        this.setState({
            height1: data.length * 90 + 140,
            height2: 0,
            height3: 0,
        })
    }
    press2() {
        this.refs.view1.setNativeProps({ display: 'none' })
        this.refs.member.setNativeProps({ borderBottomColor:'rgb(0,148,226)' })
        this.refs.comment.setNativeProps({ borderBottomColor:'#e9e9e9' })
        this.refs.task.setNativeProps({ borderBottomColor:'#e9e9e9' })
        this.setState({ color1:colors[1],color2:colors[0],color3:colors[1] })
        this.setState({
            height1: 0,
            height2: data1.length * 60 + 10,
            height3: 0,
        })
    }
    press3() {
        this.refs.view1.setNativeProps({ display: 'none' })
        this.refs.task.setNativeProps({ borderBottomColor:'rgb(0,148,226)' })
        this.refs.comment.setNativeProps({ borderBottomColor:'#e9e9e9' })
        this.refs.member.setNativeProps({ borderBottomColor:'#e9e9e9' })
        this.setState({ color1:colors[1],color2:colors[1],color3:colors[0] })
        this.setState({
            height1: 0,
            height2: 0,
            height3: data2.length * 60 + 10,
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
                        <TouchableOpacity style={{
                            width: width / 3,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => this.press3()}>
                            <Text style={{ color: this.state.color3 }}>{'任务'}</Text>
                        </TouchableOpacity>
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
                        height: data.length * 90 + 10,
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
                <View
                    style={{
                        width: width,
                        height: this.state.height3,
                        marginTop: 20,
                    }}
                    ref='view3'>
                    <Bolddivider dividerheight={1} />
                    <ListView
                        dataSource={this.state.dataSource2}
                        renderRow={this.renderPage2}
                        renderSeparator={this.renderSeparator}
                    />
                </View>
            </View>
        );
    }
}

Comment.propTypes = {

}
Comment.defaultProps = {
    press:null,
}