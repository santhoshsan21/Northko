//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import color from '../styles/color';
import { ActivityIndicator } from 'react-native-paper';
import fonts from '../styles/fontFamily';
// create a component
const LoadingScreen = () => {
    return (
        <View style={{ flex: 1, minHeight: hp(80), minWidth: wp(90), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} />
            <Text style={{ fontFamily: fonts.regular, fontSize: wp(3.5), color: color.AppColor, marginTop: hp(1) }} >Loading...</Text>
        </View>
    );
};
//make this component available to the app
export default LoadingScreen;
