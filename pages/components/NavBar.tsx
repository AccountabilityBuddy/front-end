import React, { useEffect } from "react";
import { StyleSheet, TouchableHighlight, View, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../ParamList";
import GoalsAchievedProgress from "./GoalsAchievedProgress";
import GoalList from "./GoalList";
import AppLoading from "expo-app-loading";
import {
   Poppins_500Medium,
   Poppins_600SemiBold,
   useFonts,
} from "@expo-google-fonts/poppins";

type ProfileScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   "Homepage"
>;

type prop = {
   navigation: ProfileScreenNavigationProp;
};

const NavBar = ({ navigation }: prop) => {
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
            <Image
               source={require("../../assets/images/user.png")}
               style={styles.icons}
            ></Image>
         </View>
         <View style={styles.footerButtons}>
            <Image
               source={require("../../assets/images/contacts.png")}
               style={styles.icons}
            ></Image>
         </View>
         <View style={styles.footerButtons}>
            <Image
               source={require("../../assets/images/data.png")}
               style={styles.icons}
            ></Image>
         </View>
         <View style={styles.footerButtons}>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#DDDDDD"
               style={{
                  borderRadius: 100,
               }}
               onPress={() => navigation.navigate("AddNewGoal")}
            >
               <Image
                  source={require("../../assets/images/plus.png")}
                  style={styles.icons}
               ></Image>
            </TouchableHighlight>
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
      //backgroundColor: "#DAE0E6",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
   },
   footerButtonText: {
      fontFamily: "Poppins_500Medium",
      fontSize: 20,
   },
   icons: {
      height: 45,
      width: 45,
   },
   text: {
      fontFamily: "Poppins_600SemiBold",
      marginBottom: 10,
      marginTop: 10,
      fontSize: 25,
   },
});

export default NavBar;
