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
  ListView
} from 'react-native';
import TopBar from '../components/topbar';
import Button from '../components/button';
import Bottombar from '../components/bottombar';
import PropTypes from 'prop-types';
import Search from 'react-native-search-box';
import Message from './message';
import Main from './main';
import Piechart from './piechart';
import Selfcard from '../components/selfcard';
import Menulist from '../components/menulist';
import Selfmessage from './selfmessage';
import Setting from './setting';
import Agreement from './agreement';
import Itselfmessage from './itselfmessage';
import _ from 'lodash';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const rowHeight = 40;
const colors = ['rgb(251,187,62)','rgb(255,91,48)','rgb(81,226,215)']
const data = {
    "CONTACT":[
        {
            "company":"A外包公司",
            "name":"部长",
            "name_en":"Buzhang",
            "path":require('../pic/03.png'),
        },
        {
            "company":"A外包公司",
            "name":"陈城立",
            "name_en":"Chenchengli",
            "path":require('../pic/04.png'),
        },
    ]
}
const SECTIONHEIGHT = 30,ROWHEIGHT = 60
const letters = _
    .range('A'.charCodeAt(0), 'Z'.charCodeAt(0) + 1)
    .map(n => String.fromCharCode(n).substr(0))
let contact=[]//联系人的数组
var totalheight=[];//每个字母对应的联系人和字母的总高度
var that = null
export default class Group extends Component {
    constructor(props) {
        super(props); 
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[rowID];
        };
        this.state = {
            isModal:false,
            menuleft: new Animated.Value(0),
            menuleft1: new Animated.Value(0),
            dataSource: new ListView.DataSource({
                getRowData: getRowData,
                getSectionHeaderData: getSectionData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })
        };
        that = this
    }
    componentWillMount () {
        //把联系人放到对应的字母中
        for(let j = 0;j<letters.length;j++){
            let each =[]
            let company = []
            let path = []
            for(let i = 0;i<data.CONTACT.length;i++){
                if(letters[j] == data.CONTACT[i].name_en.substr(0,1) ){
                    each.push(data.CONTACT[i].name);
                    company.push(data.CONTACT[i].company);
                    path.push(data.CONTACT[i].path);
                }
            }
            let _contact={}
            _contact.index = letters[j]
            _contact.name = each
            _contact.company = company
            _contact.path = path
            contact.push(_contact)
        }
    }
    componentDidMount () {
        var dataBlob = {};
        var sectionIDs = [];
        var rowIDs = [];
        //var company = {};
        for(let ii = 0;ii<contact.length;ii++){
            var sectionName = 'Section ' + ii;
            sectionIDs.push(sectionName)
            dataBlob[sectionName] = letters[ii]
            rowIDs[ii] = [];
            
            for(let j = 0;j<contact[ii].name.length;j++){
                var rowName = ii + '-' + j;
                rowIDs[ii].push(rowName)
                var index = [contact[ii].name[j],contact[ii].company[j],contact[ii].path[j]];
                dataBlob[rowName] = index;
            }
            //计算每个字母和下面城市的总高度，递增放到数组中
            // var eachheight = this.props.sectionHeight+this.props.rowHeight*newcity.length
            var eachheight = SECTIONHEIGHT+ROWHEIGHT*contact[ii].name.length
            totalheight.push(eachheight)
        }
        this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        })
        //console.log(rowIDs);
    }
    renderRow(rowData,rowId){
        return (
            <TouchableOpacity
                key={rowId}
                style={{height:ROWHEIGHT,justifyContent:'center',paddingLeft:15,paddingRight:30}}
                onPress={()=>{that.changedata(rowData)}}>
                <View style={{
                    width:width-15,
                    height:ROWHEIGHT,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <View style={{
                        width:40,
                        height:40,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Image style={{
                            width:40,
                            height:40,
                            borderRadius:20,
                            borderWidth:1
                        }} source={rowData[2]}></Image>
                    </View>
                    <View style={{
                        width:width*0.5-20,
                        height:40,
                        justifyContent:'center',
                        alignItems:'flex-start',
                        marginLeft:20
                    }}>
                        <Text style={styles.rowdatatext}>{rowData[0]}</Text>
                    </View>
                    <View style={{
                        width:width*0.5-60,
                        height:40,
                        justifyContent:'center',
                        alignItems:'flex-start'
                    }}>
                        <Text style={{fontSize:13}}>{rowData[1]}</Text>
                    </View>
                </View>   
            </TouchableOpacity>
        )
    }
    renderSectionHeader = (sectionData, sectionID) => {
        return (
            <View style={{height:SECTIONHEIGHT,justifyContent:'center',paddingLeft:5}}>
                <View style={{
                    width:20,
                    height:20,
                    backgroundColor:colors[2],
                    borderRadius:10,
                    alignItems:'center',
                    justifyContent:'center',
                    marginLeft:20
                }}>
                    <Text style={{color:'white',fontWeight:'bold'}}>
                        {sectionData}
                    </Text>
                </View>
                
            </View>
        )
    }
    renderLetters(letter, index) {
        return (
            <TouchableOpacity key={index} activeOpacity={0.6} onPress={()=>{this.scrollTo(index)}}>
                <View style={styles.letter}>
                    <Text style={styles.letterText}>{letter}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    changedata=(rowData)=>{
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Itselfmessage',
                component: Itselfmessage
            });
        }
    }
    scrollTo=(index)=>{
        let position=0;
        for(let i = 0;i<index;i++){
            position += totalheight[i]
        }       
        this._listView.scrollTo({
            y:position
        })
    }
    onRequestClose() {
        this.setState({
            isModal:false
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
    menu(){
        this.setState({
           isModal:true
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
    Jump_to_drawer () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Main',
                component: Main
            });
        }
    }
    Jump_to_message () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Message',
                component: Message
            });
        }
    }
    Jump_to_group () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Group',
                component: Group
            });
        }
    }
    Jump_to_pie_chart () {
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Piechart',
                component: Piechart
            });
        }
    }
    Jump_to_selfmessage () {
        this.onRequestClose();
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Selfmessage',
                component: Selfmessage
            });
        }
    }
    Jump_to_agreement () {
        this.onRequestClose();
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Agreement',
                component: Agreement
            });
        }
    }
    Jump_to_setting () {
        this.onRequestClose();
        const {navigator} = this.props;
            if(navigator){
            navigator.push({
                name: 'Setting',
                component: Setting
            });
        }
    }
    render() {
        return (
            <Animated.View style={{
                width:width,
                height:height,
                flexDirection:'column',
                backgroundColor:'white'
            }}>
                <Modal
                    animationType='fade'            // 淡入淡出
                    transparent={true}              // 透明
                    visible={this.state.isModal}    // 根据isModal决定是否显示
                    onRequestClose={() => {this.onRequestClose()}}  // android必须实现
                >
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',width:width,height:height,backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <Animated.View style={{
                            flexDirection:'column',
                            justifyContent:'flex-start',
                            alignItems:'center',
                            width:0.7*width,
                            height:height,
                            backgroundColor:'white',
                            left:this.state.menuleft1.interpolate({inputRange:[0,1],outputRange:[0,0.7*width]})
                        }}>
                            <Selfcard />
                            <Menulist source={require('../icon/user-blue.png')} content={'个人信息'} press={()=>this.Jump_to_selfmessage()} />
                            <Menulist source={require('../icon/copy-blue.png')} content={'我的协议'} press={()=>this.Jump_to_agreement()} />
                            <Menulist source={require('../icon/cog-blue.png')} content={'设置'} press={()=>this.Jump_to_setting()} />
                            <View style={{
                                position:'absolute',
                                bottom:25,
                                left:0,
                                width:0.7*width,
                                height:40,
                                backgroundColor:'rgb(241,78,69)',
                            }}>
                                <TouchableOpacity style={{width:0.7*width,height:40,justifyContent:'center',alignItems:'center'}} onPress={()=>this.exit()}>
                                    <Text style={{color:'white'}}>{'安全退出'}</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                        <TouchableOpacity style={{width:0.3*width,height:height}} onPress={()=>this.onRequestClose()}/>
                    </View>
                </Modal>
                <View style={{
                    width:width,
                    height:height-50-StatusBar.currentHeight,
                    flexDirection:'column',
                }}>
                    <TopBar 
                        handleMenu={this.menu.bind(this)}
                        source1={require('../icon/menu.png')}
                        title={'通讯录'}
                        backgroundColor={'rgb(43,130,163)'} />
                    <View style={{
                        width:width,
                        height:50,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Button 
                            ButtonWidth={80}
                            ButtonHeight={30}
                            fontSize={15}
                            bgColor={'rgb(0,122,255)'}
                            text={'外包人员'}
                            borderRadius={0}/>
                        <Button 
                            ButtonWidth={80}
                            ButtonHeight={30}
                            fontSize={15}
                            bgColor={'white'}
                            text={'发包人员'}
                            color={'black'}
                            borderRadius={0}/>
                    </View>
                    <Search  />
                    <View style={{
                        width:width,
                        height:height-50-StatusBar.currentHeight-150
                    }}>
                        <ListView
                            contentContainerStyle={{width:width,backgroundColor:'white'}}
                            ref={listView => this._listView = listView}
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow}
                            renderSectionHeader={this.renderSectionHeader}
                            enableEmptySections={true}
                            //initialListSize={500}
                        />
                    </View>
                    <View style={{
                        position: 'absolute',
                        height: height-200-StatusBar.currentHeight,
                        top: 120+StatusBar.currentHeight,
                        bottom: 75,
                        right: 10,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {letters.map((letter, index) => this.renderLetters(letter, index))}
                    </View>
                </View>
                <View style={{
                    width:width,
                    height:50
                }}>
                    <Bottombar 
                        Jump_to_drawer={this.Jump_to_drawer.bind(this)} 
                        Jump_to_message={this.Jump_to_message.bind(this)}
                        Jump_to_group={this.Jump_to_group.bind(this)}
                        Jump_to_pie_chart={this.Jump_to_pie_chart.bind(this)}/>
                </View>
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    letter: {
        height: height*3.3/150,
        width: width*3/50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    letterText: {
        textAlign: 'center',
        fontSize: height*1.1/75,
        color:'rgb(209,209,209)'
    },
    rowdatatext:{
        color:'gray',
    }
})
