import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import GoalsAchievedProgress from "./GoalsAchievedProgress";
import GoalList from "./GoalList";
import AppLoading from "expo-app-loading";
import { 
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
    useFonts,
  } from '@expo-google-fonts/poppins'

const HomepageHeader = () => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.text}>Accountability Buddy</Text>
                <GoalsAchievedProgress progress={80} />
            </View>
            <GoalList />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FFFFFF",
        marginTop: 40,
        marginBottom: 40,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 25,
    },
});

export default HomepageHeader;
