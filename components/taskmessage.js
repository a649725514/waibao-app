import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import PropTypes from 'prop-types';
import Bolddivider from './bolddivider';
import { Rating } from 'react-native-elements';
import Breadcrumb from 'react-native-breadcrumb';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class Taskmessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    };

    componentWillMount() {
        AsyncStorage.getItem('token', (error, result) => {
            if (!error) {
                var url = 'http://120.78.74.75:8080/demo/s/getCountOfTask?id=' + this.props.id; // 接口url
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
                    ).then((PromiseValue) => {
                        this.setState({
                            count: PromiseValue,
                        })
                    })
                    .catch((error) => { // 错误处理

                    })
                    .done();
            }
        })
    }

    render() {
        return (
            <View style={{
                width: width,
                height: 100,
                backgroundColor: 'white'
            }}>
                <View style={{
                    width: width,
                    height: 50,
                    flexDirection: 'row',
                    //backgroundColor:'pink',
                    alignItems: 'center',
                    //justifyContent:'flex-start'
                }}>
                    <View style={{
                        width: width / 2,
                        height: 50,
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: 'black', fontSize: 18, marginLeft: 20 }}>{this.props.name}</Text>
                    </View>
                    <View style={{
                        width: width / 2 - 20,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                    }}>
                        <Rating
                            type="star"
                            startingValue={this.props.stars}
                            readonly
                            imageSize={15}
                            ratingCount={3}
                        />
                    </View>
                </View>
                <View style={{
                    width: width - 20,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginLeft: 20
                }}>
                    <Breadcrumb
                        entities={['截止于' + this.props.date ? this.props.date : '未定', this.props.project, this.state.count + '人参与', this.props.time + '工作量']}
                        isTouchable={false}
                        flowDepth={0}
                        height={22}
                        onCrumbPress={index => { }}
                        borderRadius={5}
                    />
                </View>
            </View>
        );
    }
}

Taskmessage.propTypes = {

}
Taskmessage.defaultProps = {
    name: '任务a',
    source: null,
    date: '2017-12-30',
    project: 'B项目',
    count: 8,
    time: 6
}