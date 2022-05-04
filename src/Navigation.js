import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import HomeScreen from './screens/HomeScreen'
import color from './styles/color';
import fonts from './styles/fontFamily';
import Signin from './screens/SignIn';
import ChooseTruck from './screens/ChooseTruck';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SET_ACCESS_TOKEN } from './redux/actions';
const Navigation = () => {

  const [startWith, setStartWith] = useState("signin")
  const dispatch = useDispatch();
  useEffect(() => {
    getMethod()
  }, [])


  const getMethod = async () => {
    await AsyncStorage.getItem('@accessToken').then((accessToken) => {
      console.log("access token ", accessToken)
      if (accessToken) {
        dispatch({ type: SET_ACCESS_TOKEN, value: accessToken })
        setStartWith("homeScreen")  // homeScreen
      }
      else {
        setStartWith("choosetruck") //signin //otpVerify
      }
    })
    SplashScreen.hide()
  }

  const Stack = createNativeStackNavigator();
  var navHeaderStyles = { headerTitleAlign: 'center', headerBackTitle: "Back", headerTitleStyle: { fontSize: wp(4), fontFamily: fonts.robotoBold, }, headerStyle: { backgroundColor: color.WhiteBg } }

  const AppContainer = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={startWith} screenOptions={{ presentation: 'card', animation: 'slide_from_right' }}  >
        <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="choosetruck" component={ChooseTruck} options={{ headerShown: false }} />
        <Stack.Screen name="homeScreen" component={HomeScreen} options={{ title: "Home screen", ...navHeaderStyles }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  return <AppContainer />

}

export default Navigation;
