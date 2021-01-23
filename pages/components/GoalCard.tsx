import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";

// Add state to determine wheter we have to start now or the task has been already finished.

type Props = {
   key: String;
   id: String;
   startDate: String;
   endDate: String;
   name: String;
   buddyName: String;
   goalPeriod: string;
   sessions: Array<string>;
};

const GoalCard = ({
   id,
   startDate,
   endDate,
   name,
   buddyName,
   goalPeriod,
   sessions,
}: Props) => {
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
         onPress={() =>
            navigation.navigate("GoalDashboard", {
               goalName: name,
               goalPeriod: goalPeriod,
               buddyName: buddyName,
               goalID: id,
               goalStartDate: startDate,
               goalEndDate: endDate,
               sessions: sessions,
            })
         }
      >
         <View style={styles.container}>
            <View style={{ flex: 1 }}>
               <View>
                  <Text style={styles.goalname}>{name}</Text>
               </View>
               <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#39AE92"
                  style={styles.button}
                  onPress={() => {
                     navigation.navigate("GoalTimer", {
                        goalId: id,
                        goalName: name,
                        goalPeriod: goalPeriod,
                     });
                  }}
               >
                  <Text
                     style={{
                        textAlignVertical: "center",
                        color: "white",
                     }}
                  >
                     Start
                  </Text>
               </TouchableHighlight>
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
      width: 60,
      borderRadius: 5,
      marginTop: 5,
      paddingTop: 4,
      alignItems: "center",
      backgroundColor: "#3FC2A3",
   },
});

export default GoalCard;
