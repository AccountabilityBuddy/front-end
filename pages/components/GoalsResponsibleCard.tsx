import React from "react";
import {
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
   Alert,
} from "react-native";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";
import { request, gql } from "graphql-request";

// Add state to determine wheter we have to start now or the task has been already finished.
const timestamp = require("unix-timestamp");

type Props = {
   key: string;
   id: string;
   startDateTime: string;
   creatorName: string;
   goalName: string;
   note: string;
   approved: boolean;
   image: string;
};

const approveSession = (id: string) => {
   const query = gql`
      mutation {
         updateApproval(
            sessionApproval: { id: "${id}", approved: true }
         ) {
            approved
         }
      }
   `;
   request(
      "https://accountability-buddy-backend.herokuapp.com/graphql?",
      query
   ).then((data) => {
      console.log(data);
   });

   Alert.alert(
      "This session has been approved",
      "",
      [
         {
            text: "OK",
            onPress: () => console.log("session approved"),
         },
      ],
      { cancelable: false }
   );
};

const GoalsResponsibleCard = ({
   id,
   startDateTime,
   creatorName,
   goalName,
   note,
   approved,
}: Props) => {
   const navigation = useNavigation();

   let [fontsLoaded] = useFonts({
      Montserrat_400Regular,
   });

   if (!fontsLoaded) {
      return <AppLoading />;
   }

   const formatedStartDateTime = `${timestamp.toDate(
      parseInt(startDateTime.slice(0, -3))
   )}`
      .split(" ")
      .splice(0, 5);
   const formatedTime = formatedStartDateTime[4];
   const formatedDate = formatedStartDateTime.splice(0, 4).join(" ");

   return (
      <View style={styles.container}>
         <View style={{ flex: 1 }}>
            <View>
               <Text style={styles.goalname}>{goalName}</Text>
            </View>
            <View>
               <Text style={styles.goalnote}>{note}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
               <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#39AE92"
                  style={{
                     height: 30,
                     width: 70,
                     borderRadius: 5,
                     marginTop: 5,
                     paddingTop: 4,
                     alignItems: "center",
                     backgroundColor: "#3FC2A3",
                  }}
                  onPress={() => {
                     approveSession(id);
                  }}
               >
                  <Text
                     style={{
                        textAlignVertical: "center",
                        color: "white",
                     }}
                  >
                     Approve
                  </Text>
               </TouchableHighlight>
               {/* <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#D13222"
                  style={{
                     height: 30,
                     width: 70,
                     borderRadius: 5,
                     marginTop: 5,
                     paddingTop: 4,
                     alignItems: "center",
                     backgroundColor: "#F23826",
                     marginLeft: 8,
                  }}
                  onPress={() => {}}
               >
                  <Text
                     style={{
                        textAlignVertical: "center",
                        color: "white",
                     }}
                  >
                     Reject
                  </Text>
               </TouchableHighlight> */}
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
               {creatorName}
            </Text>
            <View style={{}}>
               <Text
                  style={{
                     textAlign: "center",
                     fontFamily: "Montserrat_400Regular",
                     fontWeight: "700",
                  }}
               >
                  {formatedDate}
               </Text>
               <Text
                  style={{
                     textAlign: "center",
                     fontFamily: "Montserrat_400Regular",
                     fontWeight: "700",
                  }}
               >
                  {formatedTime}
               </Text>
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
      borderRadius: 5,
      width: "100%",
   },
   goalname: {
      fontFamily: "Montserrat_400Regular",
      fontSize: 20,
   },
   goalnote: {
      fontFamily: "Montserrat_400Regular",
      fontSize: 15,
   },
   goalfoot: {
      // fontFamily: "Poppins_500Medium",
      paddingTop: 4,
   },
});

export default GoalsResponsibleCard;
