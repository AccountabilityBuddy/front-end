import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
} from "@expo-google-fonts/poppins";

const HomepageFooter = () => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.footer}>
            <View style={styles.footerButtons}>
                {/* <Text style={styles.footerButtonText}>+</Text> */}
                <Image source={require("../../assets/images/user.png")} style={styles.icons}></Image>
            </View>
            <View style={styles.footerButtons}>
                {/* <Text style={styles.footerButtonText}>+</Text> */}
                <Image source={require("../../assets/images/plus.png")} style={styles.icons}></Image>
            </View>
            <View style={styles.footerButtons}>
                {/* <Text style={styles.footerButtonText}>+</Text> */}
                <Image source={require("../../assets/images/plus.png")} style={styles.icons}></Image>
            </View>
            <View style={styles.footerButtons}>
                {/* <Text style={styles.footerButtonText}>+</Text> */}
                <Image source={require("../../assets/images/plus.png")} style={styles.icons}></Image>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#F8F9FA",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    footerButtons: {
        height: 40,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 15,
        marginBottom: 15,
        padding: 5,
        borderRadius: 100,
        backgroundColor: "#DAE0E6",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    footerButtonText: {
        fontFamily: "Poppins_500Medium",
        fontSize: 20,
    },
    icons: {
        height: 40,
        width: 40,
    },
    text: {
        fontFamily: "Poppins_600SemiBold",
        marginBottom: 10,
        marginTop: 10,
        fontSize: 25,
    },
});

export default HomepageFooter;
