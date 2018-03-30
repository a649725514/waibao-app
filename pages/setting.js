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
export default class Setting extends Component {
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
    Jump_to_level_introduce() {

    }
    Jump_to_hongruan_introduce() {
        
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
                    title={'设置'}
                    backgroundColor={'rgb(43,130,163)'}
                    elevation={0} />
                <View style={{
                    width: width,
                    height: 40,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                }}>
                    <View style={{
                        width: width - 70,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}>
                        <Text style={{ color: 'black', marginLeft: 20 }}>{'声音'}</Text>
                    </View>
                    <View style={{
                        width: 70,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Switch
                            value={true}
                            onValueChange={(val) => console.log(val)}
                            disabled={false}
                            activeText={''}
                            inActiveText={''}
                            circleSize={25}
                            barHeight={25}
                            circleBorderWidth={0}
                            backgroundActive={'rgb(0,226,111)'}
                            backgroundInactive={'#e9e9e9'}
                            circleActiveColor={'white'}
                            circleInActiveColor={'white'}
                        />
                    </View>
                </View>
                <Bolddivider dividerheight={1} />
                <Settingitem title={'安全等级介绍'} press={() => this.Jump_to_level_introduce()} />
                <Bolddivider dividerheight={1} />
                <Settingitem title={'关于虹软'} press={() => this.Jump_to_hongruan_introduce()} />
                <Bolddivider dividerheight={1} />
            </View>
        );
    }
}
