/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry, AsyncStorage,
    StyleSheet,
    Text,
    View, StatusBar
} from 'react-native';
import { connect } from "react-redux";
import Spinner from 'react-native-spinkit'
import store from 'react-native-simple-store';

import { actSplashLogin } from '../login/action'

import Logo from '../../utils/assetss/logo.png'
class screen_splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warehouse_email: '',
            warehouse_password: ''
        }
    }

    componentWillMount() {

        setTimeout(() => {
            this.props.navigation.dispatch({ type: 'HOME' });
        }, 3000)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2c3e50"
                    barStyle="light-content"
                />
                <Spinner type='Bounce'></Spinner>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#29363d',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
function mapStateToProps(state) {
    return {};
}
export default connect()(screen_splash)
