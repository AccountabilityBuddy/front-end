import React, { useEffect, useState } from "react";
import {
   Button,
   StyleSheet,
   Text,
   ScrollView,
   View,
   TouchableHighlight,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "./ParamList";
import RoundCountdownTimer from "./components/GoalProgress";
import GoalDashboardHeader from "./components/GoalDashboardHeader";
import GoalCalendar from "./components/GoalCalendar";
import GoalDashboardInfo from "./components/GoalDashboardInfo";
import { BaseRouter } from "@react-navigation/native";

type ProfileScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   "GoalDashboard"
>;

type props = {
   navigation: ProfileScreenNavigationProp;
   goalName: String;
   goalPeriod: string;
   route: any;
};

const GoalDashboard = ({ navigation, route }: props) => {
   useEffect(() => {
      navigation.setOptions({ headerTitle: `${route.params.goalName}` });
   }, []);
   return (
      <ScrollView
         style={{
            marginLeft: 5,
            marginRight: 5,
         }}
      >
         <GoalCalendar />
         <GoalDashboardInfo
            startDate={route.params.goalStartDate}
            endDate={route.params.goalEndDate}
            buddyName={route.params.buddyName}
         />
         <View>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#39AE92"
               style={styles.button}
               onPress={() => {
                  navigation.navigate("GoalTimer", {
                     goalName: route.params.goalName,
                     goalPeriod: route.params.goalPeriod,
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
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   button: {
      height: 30,
      borderRadius: 5,
      marginTop: 5,
      paddingTop: 4,
      alignItems: "center",
      backgroundColor: "#3FC2A3",
   },
});

export default GoalDashboard;
