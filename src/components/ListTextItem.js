//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fonts from '../styles/fontFamily';
// create a component
const ListTextItem = ({ title = "", value = "", isFirst,amountRound }) => (
    <View style={{ flexDirection: "row", marginTop: isFirst ? 0 : wp(1.5), maxWidth: wp(50) }}>
        <View>
            <Text style={styles.titleText}>{title + ""}</Text>
        </View>
        <View style={{marginHorizontal:wp(1)}}>
            <Text style={styles.titleText}>:</Text>
        </View>
        <View>
            <Text style={styles.valueText}>{value}</Text>
        </View>
    </View>
)

// define your styles
const styles = StyleSheet.create({
    titleText: {
        fontFamily: fonts.regular,
        fontSize: wp(3.5),
        letterSpacing: 0.5,
        lineHeight: 16
    },
    valueText: {
        fontFamily: fonts.bold,
        fontSize: wp(3.5),
        letterSpacing: 0.5,
        lineHeight: 16
    }
});

//make this component available to the app
export default ListTextItem;
