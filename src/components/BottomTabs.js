import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useSelector } from 'react-redux';
import color from '../styles/color';
import fonts from '../styles/fontFamily';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import images from '../images';

const Tabs = (props) => {
    return (
        <TouchableOpacity onPress={props.action} style={{ alignItems: 'center' }}>
            {
                props.icon == "Feather" ?
                    <Feather name={props.iconName} size={wp(5.5)} color={props.from == props.name ? color.AppColor : "gray"} />
                    :
                    <FontAwesome name={props.iconName} size={wp(5.5)} color={props.from == props.name ? color.AppColor : "gray"} />
            }
            <Text style={{ fontFamily: fonts.regular, color: props.from == props.name ? color.AppColor : "gray", fontSize: wp(3) }}>{props.name}</Text>
        </TouchableOpacity>
    )
}
const BottomTabs = ({
    isFrom = "home",
    navigateToHome = () => { },
    navigateToCategory = () => { },
    navigateToAccouts = () => { },
}) => {
    var cartCount = useSelector(state => state.cartCount)
    var accessToken = useSelector(state => state.accessToken)
    if (accessToken == "" || accessToken == null) {
        return null;
    } else {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderColor: color.lightGray, borderRightWidth: StyleSheet.hairlineWidth, borderLeftWidth: StyleSheet.hairlineWidth, borderTopWidth: StyleSheet.hairlineWidth, backgroundColor: '#fff', height: hp(8), alignItems: 'center', borderTopRightRadius: wp(3), borderTopLeftRadius: wp(3), position: 'absolute', bottom: 0, width: '100%' }}>
                <TouchableOpacity onPress={navigateToHome} style={{ alignItems: 'center' }}>
                    <SimpleLineIcons name={"home"} size={wp(5.5)} color={isFrom == "Home" ? color.AppColor : "#8F9FA7"} />
                    <Text style={{ fontFamily: fonts.regular, color: isFrom == "Home" ? color.AppColor : "#8F9FA7", fontSize: wp(3), paddingTop: wp(0.5) }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateToCategory} style={{ alignItems: 'center' }}>
                    <Image source={isFrom == "Category" ? images.categoryColor : images.categoryGray} style={{ width: wp(5.5), height: wp(5.5), resizeMode: 'contain' }} />
                    <Text style={{ fontFamily: fonts.regular, color: isFrom == "Category" ? color.AppColor : "#8F9FA7", fontSize: wp(3), paddingTop: wp(0.5) }}>Categories</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateToAccouts} style={{ alignItems: 'center' }}>
                    <Image source={isFrom == "Account" ? images.accountColor : images.accountGray} style={{ width: wp(5.5), height: wp(5.5), resizeMode: 'contain' }} />
                    <Text style={{ fontFamily: fonts.regular, color: isFrom == "Account" ? color.AppColor : "#8F9FA7", fontSize: wp(3), paddingTop: wp(0.5) }}>My account</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default BottomTabs;