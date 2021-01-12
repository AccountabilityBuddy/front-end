import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
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

const GoalDashboard = ({ navigation, route }: props) => {
   useEffect(() => {
      navigation.setOptions({ headerTitle: `${route.params.goalName}` });
   }, []);
   const [timerState, setTimerState] = useState(false);
   return (
      <View>
         {/* Probably add a calendar widget into GoalDashboardHeader showning green on days the goal was accomplished
         and red on days the goal was missed */}
         <GoalDashboardHeader goalName={route.params.goalName} />

         {/* Possibly add some way to save timer state when the pages change, the timer currently resets */}
         <RoundCountdownTimer
            timeDuration={parseInt(route.params.goalPeriod) * 60}
            startTimer={timerState}
         />
         <Button
            title="Start"
            onPress={() => {
               setTimerState(true);
            }}
         />
         <Button
            title="Stop"
            onPress={() => {
               setTimerState(false);
            }}
         />
         {/* Add start, stop, reset and delete buttons */}
      </View>
   );
};

export default GoalDashboard;
