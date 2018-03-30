import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    StatusBar,
    Modal,
    Animated,
    Easing,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Calendar, CalendarList, Agenda, Arrow } from 'react-native-calendars';
import TopBar from '../components/topbar';
import Button from '../components/button';
import Bottombar from '../components/bottombar';
import PropTypes from 'prop-types';
import Search from 'react-native-search-box';
import Message from './message';
import Main from './main';
import Group from './group';
import Selfcard from '../components/selfcard';
import Menulist from '../components/menulist';
import Selfmessage from './selfmessage';
import Setting from './setting';
import Agreement from './agreement';
import ProgressBar from 'react-native-progress/Bar';
import { BarChart, PieChart } from 'react-native-mp-android-chart';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const rowHeight = 40;
export default class Piechart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            menuleft: new Animated.Value(0),
            menuleft1: new Animated.Value(0),
            items: {},
            value: 0.8,
            legend: {
                enabled: true,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5
            },
            data: {
                datasets: [{
                    yValues: [5, 7, 6, 4, 3, 8, 5],
                    label: '任务数',
                    config: {
                        color: 'teal',
                        barSpacePercent: 40,
                        barShadowColor: 'lightgrey',
                        highlightAlpha: 90,
                        highlightColor: 'red'
                    }
                }],
                xValues: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            legend1: {
                enabled: true,
                textSize: 14,
                form: 'CIRCLE',
                position: 'RIGHT_OF_CHART',
                fontFamily: 'monospace',
                wordWrapEnabled: true
            },
            data1: {
                datasets: [{
                    yValues: [10,30,60],
                    label: '',
                    config: {
                        colors: ['#C0FF8C', '#FFF78C', '#FFD08C'],

                        sliceSpace: 5,
                        selectionShift: 13
                    }
                }],
                xValues: ['项目A','项目B','项目D']
            },
            description: {
                text: '',
                textSize: 15,
                textColor: 'darkgray',
                fontFamily: 'monospace',
                fontStyle: 2
            }
        };
        //this.onDayPress = this.onDayPress.bind(this);
    }
    onRequestClose() {
        this.setState({
            isModal: false
        });
        this.state.menuleft.setValue(1),
            Animated.timing(
                this.state.menuleft,
                {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.linear,
                }
            ).start();
    }
    menu() {
        this.setState({
            isModal: true
        });
        this.state.menuleft.setValue(0),
            this.state.menuleft1.setValue(-1),
            Animated.parallel([
                Animated.timing(
                    this.state.menuleft,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                    }
                ),
                Animated.timing(
                    this.state.menuleft1,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                    }
                )
            ]).start();
    }
    Jump_to_drawer() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Main',
                component: Main
            });
        }
    }
    Jump_to_message() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Message',
                component: Message
            });
        }
    }
    Jump_to_group() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Group',
                component: Group
            });
        }
    }
    Jump_to_pie_chart() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Piechart',
                component: Piechart
            });
        }
    }
    Jump_to_selfmessage() {
        this.onRequestClose();
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Selfmessage',
                component: Selfmessage
            });
        }
    }
    Jump_to_agreement() {
        this.onRequestClose();
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Agreement',
                component: Agreement
            });
        }
    }
    Jump_to_setting() {
        this.onRequestClose();
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'Setting',
                component: Setting
            });
        }
    }

    renderItem(item) {
        return (
            <View style={[styles.item, { height: item.height }]}><Text>{item.text}</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    render() {
        return (
            <Animated.View style={{
                width: width,
                height: height,
                flexDirection: 'column',
                backgroundColor: 'white'
            }}>
                <Modal
                    animationType='fade'            // 淡入淡出
                    transparent={true}              // 透明
                    visible={this.state.isModal}    // 根据isModal决定是否显示
                    onRequestClose={() => { this.onRequestClose() }}  // android必须实现
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: width, height: height, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <Animated.View style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            width: 0.7 * width,
                            height: height,
                            backgroundColor: 'white',
                            left: this.state.menuleft1.interpolate({ inputRange: [0, 1], outputRange: [0, 0.7 * width] })
                        }}>
                            <Selfcard />
                            <Menulist source={require('../icon/user-blue.png')} content={'个人信息'} press={() => this.Jump_to_selfmessage()} />
                            <Menulist source={require('../icon/copy-blue.png')} content={'我的协议'} press={() => this.Jump_to_agreement()} />
                            <Menulist source={require('../icon/cog-blue.png')} content={'设置'} press={() => this.Jump_to_setting()} />
                            <View style={{
                                position: 'absolute',
                                bottom: 25,
                                left: 0,
                                width: 0.7 * width,
                                height: 40,
                                backgroundColor: 'rgb(241,78,69)',
                            }}>
                                <TouchableOpacity style={{ width: 0.7 * width, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.exit()}>
                                    <Text style={{ color: 'white' }}>{'安全退出'}</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                        <TouchableOpacity style={{ width: 0.3 * width, height: height }} onPress={() => this.onRequestClose()} />
                    </View>
                </Modal>
                <View style={{
                    width: width,
                    height: height - 50 - StatusBar.currentHeight,
                    flexDirection: 'column',
                }}>
                    <TopBar
                        handleMenu={this.menu.bind(this)}
                        source1={require('../icon/menu.png')}
                        title={'工作统计'}
                        backgroundColor={'rgb(43,130,163)'} />
                    <ScrollView>
                        <View style={{
                            height: height / 2,
                            width: width,
                        }}>
                            <Agenda
                                style={{
                                    borderTopWidth: 1,
                                    paddingTop: 5,
                                    borderBottomWidth: 1,
                                    borderColor: '#eee',
                                    height: 350
                                }}
                                items={{
                                    '2018-03-26': [{ text: 'item 1 - any js object' }],
                                    '2018-03-27': [{ text: 'item 2 - any js object' }],
                                    '2018-03-28': [],
                                    '2018-03-29': [{ text: 'item 3 - any js object' }, { text: 'any js object' }],
                                }}
                                renderItem={this.renderItem.bind(this)}
                                renderEmptyDate={this.renderEmptyDate.bind(this)}
                                rowHasChanged={this.rowHasChanged.bind(this)}
                            />
                        </View>
                        <View style={{
                            width: width,
                            height: 50,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{ color: 'black' }}>{'今日工时'}</Text>
                            <View style={{
                                width: width - 120,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <ProgressBar borderRadius={3} progress={this.state.value} width={width - 140} />
                            </View>
                            <Text style={{ color: 'black' }}>{this.state.value * 100 + '%/8h'}</Text>
                        </View>
                        <View style={{
                            width: width,
                            height: height + 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                            //backgroundColor: 'yellow'
                        }}>

                            <Text style={{ color: 'black', margin: 5 }}>{'近期每日发布任务数'}</Text>
                            <BarChart
                                style={{
                                    width: width,
                                    height: height
                                }}
                                data={this.state.data}
                                animation={{ durationX: 2000 }}
                                legend={this.state.legend}
                                gridBackgroundColor={'#ffffff'}
                                drawBarShadow={false}
                                drawValueAboveBar={true}
                                drawHighlightArrow={true}
                            />
                        </View>
                        <View style={{
                            width: width,
                            height: height*0.7,
                            justifyContent: 'center',
                            alignItems: 'center'
                            //backgroundColor: 'yellow'
                        }}>
                            <PieChart
                                style={{
                                    width: width,
                                    height: height*0.7
                                }}
                                logEnabled={true}
                                backgroundColor={'white'}
                                description={this.state.description}
                                data={this.state.data1}
                                legend={this.state.legend1}
                                drawSliceText={true}
                                usePercentValues={false}
                                centerText={'近期参与项目'}
                                centerTextRadiusPercent={100}
                                holeRadius={40}
                                holeColor={'#f0f0f0'}
                                transparentCircleRadius={45}
                                transparentCircleColor={'#f0f0f0'}
                                transparentCircleAlpha={50}
                                maxAngle={350}
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={{
                    width: width,
                    height: 50
                }}>
                    <Bottombar
                        Jump_to_drawer={this.Jump_to_drawer.bind(this)}
                        Jump_to_message={this.Jump_to_message.bind(this)}
                        Jump_to_group={this.Jump_to_group.bind(this)}
                        Jump_to_pie_chart={this.Jump_to_pie_chart.bind(this)} />
                </View>
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});
