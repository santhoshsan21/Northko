//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import ButtonFilled from './ButtonFilled';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import fonts from "../styles/fontFamily";
import color from "../styles/color";
import { symbols } from "../styles/constanst";
// create a component
const BottomTotalCard = ({
    buttonOnPressAction = () => { },
    buttonTitle = "",
    totalAmount = "",
    containerStyle

}) => {
    return (
        <View style={[styles.container, { ...containerStyle }]}>
            <View style={styles.totalContainer}>
                <Text style={styles.totalTitleText}>TOTAL</Text>
                <Text style={styles.totalAmountText}>{symbols.rupee}{totalAmount + ""}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonFilled
                    onPressAction={buttonOnPressAction}
                    buttonTitle={buttonTitle}
                    buttonHeight={hp(5.5)}
                    buttonWidth={wp(36)}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: wp(100),
        paddingVertical: hp(1.2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(2),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: Platform.OS == "ios" ? 0.1 : 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderTopWidth: 0.5,
        borderTopColor: color.greyDot
    },
    totalContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: wp(2)
    },
    totalTitleText: {
        fontFamily: fonts.bold,
        fontSize: wp(3),
        color: '#929292'
    },
    totalAmountText: {
        marginTop: wp(1),
        fontFamily: fonts.bold,
        fontSize: wp(5),
        color: color.AppColor
    },
    buttonContainer: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
});

//make this component available to the app
export default BottomTotalCard;
