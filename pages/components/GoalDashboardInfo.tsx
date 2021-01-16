import React from "react";
import {
   View,
   Text,
   ScrollView,
   TouchableHighlight,
   StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type props = {
   buddyName: string | String;
   startDate: String;
   endDate: String;
};

const GoalDashboardInfo = ({ buddyName, startDate, endDate }: props) => {
   return (
      <ScrollView>
         <View
            style={{
               flex: 1,
               flexDirection: "row",
               height: 50,
               backgroundColor: "#FFFFFF",
               marginTop: 5,
               borderRadius: 5,
            }}
         >
            <Text
               style={{
                  textAlign: "center",
                  fontFamily: "Montserrat_400Regular",
                  textAlignVertical: "center",
                  marginLeft: 10,
                  fontSize: 22,
               }}
            >
               Buddy:
            </Text>
            <Text
               style={{
                  textAlign: "center",
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 10,
                  textAlignVertical: "center",
                  fontSize: 22,
               }}
            >
               {buddyName}
            </Text>
            <Ionicons
               name={"person-circle"}
               size={35}
               color={"#F23826"}
               style={{
                  alignSelf: "center",
                  position: "absolute",
                  right: 0,
                  marginRight: 10,
               }}
            />
         </View>
         <View
            style={{
               flex: 1,
               flexDirection: "row",
               height: 50,
               backgroundColor: "#FFFFFF",
               marginTop: 5,
               borderRadius: 5,
            }}
         >
            <Text
               style={{
                  textAlign: "center",
                  fontFamily: "Montserrat_400Regular",
                  textAlignVertical: "center",
                  marginLeft: 10,
                  fontSize: 22,
               }}
            >
               Start Date:
            </Text>
            <Text
               style={{
                  textAlign: "center",
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 10,
                  textAlignVertical: "center",
                  fontSize: 22,
               }}
            >
               {startDate}
            </Text>
         </View>
         <View
            style={{
               flex: 1,
               flexDirection: "row",
               height: 50,
               backgroundColor: "#FFFFFF",
               marginTop: 5,
               borderRadius: 5,
            }}
         >
            <Text
               style={{
                  textAlign: "center",
                  fontFamily: "Montserrat_400Regular",
                  textAlignVertical: "center",
                  marginLeft: 10,
                  fontSize: 22,
               }}
            >
               End Date:
            </Text>
            <Text
               style={{
                  textAlign: "center",
                  fontFamily: "Montserrat_400Regular",
                  marginLeft: 10,
                  textAlignVertical: "center",
                  fontSize: 22,
               }}
            >
               {endDate}
            </Text>
         </View>
      </ScrollView>
   );
};

export default GoalDashboardInfo;
