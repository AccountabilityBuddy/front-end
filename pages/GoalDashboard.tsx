import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UrgeWithPleasureComponent from "./components/GoalProgress";
import GoalDashboardHeader from "./components/GoalDashboardHeader";

type props = {
   goalName: String;
   route: any;
};

// replace timeDuration with the valid goal property
const GoalDashboard = ({ goalName, route }: props) => {
   return (
      <View>
         <GoalDashboardHeader goalName={goalName} />
         <Text>{route.params.goalName}</Text>
         <UrgeWithPleasureComponent timeDuration={60} startTimer={false} />
      </View>
   );
};

export default GoalDashboard;
