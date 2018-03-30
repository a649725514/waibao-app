import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import PropTypes from 'prop-types';
export default class Bolddivider extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{
                width: width,
                height: this.props.dividerheight,
                backgroundColor:'#e9e9e9'
            }}>
               
            </View>
        );
    }
}

Bolddivider.propTypes = {

}
Bolddivider.defaultProps = {
    dividerheight: 20
}