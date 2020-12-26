import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GoalsAchievedProgress from './GoalsAchievedProgress';
import AppLoading from 'expo-app-loading';
import { 
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic, 
    useFonts
  } from '@expo-google-fonts/montserrat'
import App from '../../App';

const HomepageHeader = () => {

    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
    });

    if(!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Accountability Buddy</Text>
            <GoalsAchievedProgress progress={80} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        marginTop: 40,
        alignItems: 'center', 
    },
    text: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 25
    }
});

export default HomepageHeader;