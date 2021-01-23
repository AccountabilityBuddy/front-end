import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";
const timestamp = require("unix-timestamp");

// Add state to determine wheter we have to start now or the task has been already finished.

type Props = {
   key: string;
   name: string;
   buddyName: string;
   approved: boolean;
   startDateTime: string;
};

const SessionCard = ({ name, buddyName, approved, startDateTime }: Props) => {
   const navigation = useNavigation();

   let [fontsLoaded] = useFonts({
      Montserrat_400Regular,
   });

   if (!fontsLoaded) {
      return <AppLoading />;
   }

   return (
      <TouchableHighlight
         activeOpacity={1}
         underlayColor="#F9F8F7"
         onPress={() => {}}
      >
         <View style={styles.container}>
            <View style={{ flex: 1 }}>
               <View>
                  <Text style={styles.goalname}>{name}</Text>
               </View>
               <View style={styles.button}>
                  <Text
                     style={{
                        marginLeft: 8,
                        color: "black",
                     }}
                  >
                     {`${timestamp.toDate(
                        parseInt(startDateTime.slice(0, -3))
                     )}`
                        .split(" ")
                        .slice(0, 3)
                        .join(" ")}
                  </Text>
               </View>
            </View>
            <View style={{ flex: 1 }}>
               <Ionicons
                  name={"person-circle"}
                  size={35}
                  color={"#F23826"}
                  style={{
                     alignSelf: "center",
                  }}
               />
               <Text
                  style={{
                     textAlign: "center",
                     fontFamily: "Montserrat_400Regular",
                  }}
               >
                  {buddyName}
               </Text>
            </View>
         </View>
      </TouchableHighlight>
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
      borderRadius: 5,
      width: "100%",
   },
   goalname: {
      fontFamily: "Montserrat_400Regular",
      fontSize: 20,
   },
   goalfoot: {
      // fontFamily: "Poppins_500Medium",
      paddingTop: 4,
   },
   button: {
      height: 30,
      width: 140,
      borderRadius: 5,
      marginTop: 5,
      paddingTop: 4,
      alignItems: "flex-start",
      backgroundColor: "#EAEAEA",
   },
});

export default SessionCard;
