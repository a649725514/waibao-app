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
    TouchableOpacity
} from 'react-native';
import TopBar from '../components/topbar';
import Settingitem from '../components/settingitem';
import Bolddivider from '../components/bolddivider';
import { Switch } from 'react-native-switch';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class Agreement extends Component {
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
            }}>
                <TopBar
                    handleMenu={this.menu.bind(this)}
                    source1={require('../icon/cheveron-left.png')}
                    title={'我的协议'}
                    backgroundColor={'rgb(43,130,163)'}
                    elevation={0} />
            </View>
        );
    }
}
