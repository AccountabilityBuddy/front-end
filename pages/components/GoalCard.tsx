import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
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
} from "@expo-google-fonts/poppins";

// Add state to determine wheter we have to start now or the task has been already finished.
// Add props for buddy name, goal name, etc.

const GoalCard = () => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <View>
                    <Text style={styles.goalname}>Goal1</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.goalfoot}>Start Now</Text>
                </View>
            </View>
            <View style={{flex:1}}>
                <View style={{backgroundColor: "blue", height: 70, width: 70, alignSelf: "center"}}>
                </View>
                <Text style={{textAlign: "center", fontFamily: "Poppins_500Medium"}}>Buddy 1</Text>
            </View>
            <View style={{flex:1}}>
                <View style={{backgroundColor: "blue", height: 70, width: 70, alignSelf: "center"}}>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        marginTop: 8,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        width: "100%",
    },
    goalname: {
        fontFamily: "Poppins_500Medium",
        fontSize: 25,
    },
    goalfoot: {
        fontFamily: "Poppins_500Medium",
        paddingTop: 4,
    },
    button: {
        height: 30,
        width: 100,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#00A7E1",
    },
});

export default GoalCard;
