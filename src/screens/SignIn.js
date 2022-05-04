//import liraries
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image, Keyboard } from 'react-native';
import ButtonFilled from '../components/ButtonFilled';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import images from '../images';
import color from '../styles/color';

// create a component
const Signin = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)
  const [isRemember, setIsRemember] = useState(false)
  const [nameerror, setNameerror] = useState("")
  const [passworderror, setPassworderror] = useState("")
  const passwordRef = useRef()

  const changename=(value)=>{
    setNameerror('')
    setUsername('')
    value==''?setNameerror('The username must be fill'):setUsername(value)
  }
  const changePassword=(value)=>{
    setPassworderror('')
    setPassword('')
    value==''?setPassworderror('The password must be fill'):setPassword(value)
  }
  const validation = () => {
    Keyboard.dismiss()
    if (username == '' && password == '') {
      setNameerror('The username must be fill')
      setPassworderror('The password must be fill') 
    }
    else if (username == '') {
      setNameerror('The username must be fill')
      setPassworderror('')
    }
    else if (password == '') {
      setPassworderror('The password must be fill')
      setNameerror('')
    }
    else {
      props.navigation.navigate('homeScreen')
      setNameerror('')
      setPassworderror('')
    }

  }
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }} keyboardDismissMode='on-drag' keyboardShouldPersistTaps='always'>

      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <Image
            style={{ width: wp(90), height: hp(20), resizeMode: 'contain' }}
            source={images.logo}
          />
        </View>
        <View style={{ width: '90%', }}>
          <View style={{ padding: 15 }}>
            <View style={{ marginVertical: 8 }}>
              <TextInput
                label={'Username'}
                value={username}
                mode='outlined'
                blurOnSubmit={false}
                activeOutlineColor='white'
                dense={true}
                theme={{ colors: { text: 'white' } }}
                // onChangeText={(value) => setUsername(value)}
                onChangeText={(value) => changename(value)}
                returnKeyType='next'
                onSubmitEditing={() => passwordRef.current.focus()}
                style={styles.textInput}
              ></TextInput>
            </View>

            {nameerror != "" && <Text style={{ color: color.redFav, fontSize: 12, fontFamily: 'Lato-Regular' }}>{nameerror}</Text>}
            <View style={{ marginVertical: 8 }}>
              <TextInput
                label={'Password'}
                value={password}
                mode='outlined'
                blurOnSubmit={false}
                activeOutlineColor='white'
                secureTextEntry={showPassword}
                theme={{ colors: { text: 'white' } }}
                returnKeyType='search'
                onSubmitEditing={() => validation()}
                ref={passwordRef}
                dense={true}
                // onChangeText={(value) => setPassword(value)}
                onChangeText={(value) => changePassword(value)}
                
                right={<TextInput.Icon name={showPassword ? 'eye' : 'eye-off'} onPress={() => { setShowPassword(!showPassword) }} color={'#fdfefe'} />}
                style={styles.textInput}
              />
            </View>
            {passworderror != "" && <Text style={{ color: color.redFav, fontSize: 12 }}>{passworderror}</Text>}

            <View style={{ flexDirection: 'row', width: '98%', alignSelf: 'center', marginTop: 8 }}>
              <TouchableOpacity onPress={() => { setIsRemember(!isRemember) }} style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                <Fontisto name={isRemember ? 'checkbox-active' : 'checkbox-passive'} size={18} color={'#fdfefe'} />
              </TouchableOpacity>
              <Text style={{ color: '#fdfefe', marginHorizontal: 5 }}>Remember me</Text>
            </View>
          </View>
        </View>
        <ButtonFilled buttonWidth={'83%'} buttonTitle='LOGIN' onPressAction={() => validation()} />
      </View>
    </KeyboardAwareScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    minHeight: hp(100),
    minWidth: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#214781',
  },
  textInput: {
    backgroundColor: '#214781',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: 'white',
  },

});

//make this component available to the app
export default Signin;
