import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UrgeWithPleasureComponent from "./components/GoalProgress";
import GoalDashboardHeader from "./components/GoalDashboardHeader";

// replace timeDuration with the valid goal property
const GoalDashboard = () => {
   return (
      <View>
         <GoalDashboardHeader goalName="TestGoal 1" />
         <UrgeWithPleasureComponent timeDuration={60} startTimer={false} />
      </View>
   );
};

export default GoalDashboard;
