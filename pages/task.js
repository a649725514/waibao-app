import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    StatusBar,
    ScrollView,
    AsyncStorage
} from 'react-native';
import TopBar from '../components/topbar';
import Button from '../components/button';
import Bottombar from '../components/bottombar';
import PropTypes from 'prop-types';
import Search from 'react-native-search-box';
import Taskmessage from '../components/taskmessage';
import Bolddivider from '../components/bolddivider';
import Skillmsg from '../components/skillmsg';
import Personmsg from '../components/personmsg';
import Process from '../components/process';
import Selfsay from '../components/selfsay';
import Notice from '../components/notice';
import Comment1 from '../components/comment1';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const rowHeight = 40;
export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    menu() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View style={{
                width: width,
                height: height,
                flexDirection: 'column',
                backgroundColor: 'white'
            }}>
                <View style={{
                    width: width,
                    height: height - StatusBar.currentHeight,
                    flexDirection: 'column',
                }}>
                    <TopBar
                        handleMenu={this.menu.bind(this)}
                        source1={require('../icon/cheveron-left.png')}
                        title={'任务'}
                        backgroundColor={'rgb(43,130,163)'}
                        elevation={0} />
                    <ScrollView>
                        <Taskmessage
                            name={this.props.taskInfo.taskName}
                            date={this.props.taskInfo.taskEnd.substring(0, 10)}
                            project={this.props.taskInfo.project.name}
                            stars={this.props.taskInfo.securityLv}
                            time={this.props.taskInfo.workload}
                            id={this.props.taskInfo.id} />
                        <Bolddivider dividerheight={1} />
                        <Personmsg publisher={this.props.taskInfo.taskPublisher} />
                        <Bolddivider />
                        <Process id={this.props.taskInfo.id} />
                        <Bolddivider />
                        <Selfsay title={'任务说明'} introduce={this.props.taskInfo.taskContent} />
                        <Bolddivider />
                        <Comment1 id={this.props.taskInfo.id}/>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
Task.propTypes = {

}

Task.defaultProps = {
    taskInfo : {
        "id": 5,
        "taskName": "数据中心",
        "project": {
            "id": "bc30acdf625c36fc01625c3bfdc70001",
            "projectContent": "对虹软公司特化的智能外包管理系统，可安全解决外包管理过程中出现的一系列问题。该平台旨在成为外包人员与服务公司沟通交流的桥梁，\r\n发包者轻松分配任务，开发者即时了解动态。拥有APP端、PC端和后台管理平台三大平台。使用者分为发包者，开发者以及管理员三种类型。",
            "name": "虹软智包平台",
            "department": "部门",
            "sevurityLv": 0,
            "projectBegin": "2018-4-10 10:11:25",
            "projectEnd": "",
            "projectStatus": 5,
            "user": {
                "workNumber": "20000",
                "name": "刘德华",
                "company": "浙大",
                "tel": "18100178922",
                "email": "18100174184@qq.com",
                "department": "研发部",
                "offer": "码农",
                "status": 1
            }
        },
        "taskPublisher": {
            "workNumber": "10000",
            "name": "马化腾",
            "company": "杭电",
            "tel": "18100178922",
            "email": "18100178922@qq.com",
            "department": "研发部",
            "offer": "架构师",
            "status": 1
        },
        "taskBegin": "2018-03-25T17:05:44.991",
        "taskEnd": "2018-04-25T16:22:51.865",
        "taskStatus": 1,
        "securityLv": 2,
        "taskContent": "数据中心，要求做到动态切换数据源，动态SQL拼装，数据加工，可参考Cboard",
        "workload": 5
    }
}