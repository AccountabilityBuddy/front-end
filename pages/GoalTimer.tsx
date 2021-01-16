import React, { useEffect, useState } from "react";
import {
   Button,
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "./ParamList";
import RoundCountdownTimer from "./components/GoalProgress";
import GoalDashboardHeader from "./components/GoalDashboardHeader";

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

const GoalTimer = ({ navigation, route }: props) => {
   useEffect(() => {
      navigation.setOptions({ headerTitle: `${route.params.goalName}` });
   }, []);
   const [timerState, setTimerState] = useState(false);
   return (
      <View
         style={{
            flex: 0.85,
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         {/* Probably add a calendar widget into GoalDashboardHeader showning green on days the goal was accomplished
         and red on days the goal was missed 
         Could also add a picture and name of the buddy*/}
         <GoalDashboardHeader goalName={route.params.goalName} />

         {/* Possibly add some way to save timer state when the pages change, the timer currently resets */}
         <RoundCountdownTimer
            navigation={navigation}
            timeDuration={parseInt(route.params.goalPeriod) * 60}
            startTimer={timerState}
         />
         <View style={{ flexDirection: "row", marginTop: 30 }}>
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#537EBC"
               style={{
                  height: 30,
                  flex: 1,
                  marginLeft: 25,
                  marginRight: 25,
                  width: 60,
                  borderRadius: 5,
                  marginTop: 5,
                  paddingTop: 4,
                  alignItems: "center",
                  backgroundColor: "#5C8FD7",
               }}
               onPress={() => {
                  setTimerState(true);
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
            <TouchableHighlight
               activeOpacity={1}
               underlayColor="#C93223"
               style={{
                  height: 30,
                  flex: 1,
                  marginLeft: 25,
                  marginRight: 25,
                  width: 60,
                  borderRadius: 5,
                  marginTop: 5,
                  paddingTop: 4,
                  alignItems: "center",
                  backgroundColor: "#F23826",
               }}
               onPress={() => {
                  setTimerState(false);
               }}
            >
               <Text
                  style={{
                     textAlignVertical: "center",
                     color: "white",
                  }}
               >
                  Stop
               </Text>
            </TouchableHighlight>
         </View>
         {/* Add start, stop, reset and delete buttons */}
      </View>
   );
};

export default GoalTimer;
