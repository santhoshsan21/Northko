//import liraries
import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import color from '../styles/color';
import fonts from '../styles/fontFamily';
// create a component
const ButtonFilled = ({
  buttonWidth,
  buttonHeight,
  borderColor,
  borderWidth,
  borderRadius,
  buttonBackgroundColor,
  buttonTitle = "Button",
  buttonTitleColor,
  buttonIcon,
  buttonFontFamily,
  buttonFontSize,
  onPressAction = () => { },
  loading,
}) => {
  return (
    <TouchableOpacity onPress={loading ? () => { } : onPressAction} style={{ width: buttonWidth ?? '100%', height: buttonHeight ?? hp(6.5), backgroundColor: buttonBackgroundColor ?? color.buttonYellow, borderRadius: borderRadius ?? wp(1), borderWidth: borderWidth ?? undefined, borderColor: borderColor ?? undefined, marginVertical: hp(1), alignItems: 'center', justifyContent: 'center' }}>
      {loading ?
        <ActivityIndicator color={buttonTitleColor ?? "#FFF"} />
        :
        <>
          {buttonIcon ?
            <>{buttonIcon}</>
            :
            <Text style={{ color: buttonTitleColor ??'black', fontSize: buttonFontSize ?? wp(3.5), fontFamily: buttonFontFamily ?? fonts.bold }}>{buttonTitle + ""}</Text>
          }
        </>
      }
    </TouchableOpacity>
  );
};

// define your styles


//make this component available to the app
export default ButtonFilled;
