//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

// create a component
const ChooseTruck = () => {

    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <View style={styles.container}>
            <View style={{ width: '90%', height: 150, alignSelf: 'center', backgroundColor: '#ecf3f7', marginVertical: 15 }}>
                <View style={{ width: '90%', alignSelf: 'center', padding: 5 }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Lato-Bold' }}>Choose Truck</Text>
                   <View style={{width:'95%',height:30,alignSelf:'center',backgroundColor:'white',marginVertical:10,flexDirection:'row'}}>
                        <TextInput style={{width:"88%"}}></TextInput>
                        <View style={{alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                            <AntDesign name='caretdown' color={'lightgray'} size={20}/>
                        </View>
                   </View>
                    
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default ChooseTruck;
