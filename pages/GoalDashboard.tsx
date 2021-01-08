import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UrgeWithPleasureComponent from "./components/GoalProgress";

// replace timeDuration with the valid goal property
const GoalDashboard = () => {
   return (
      <View>
         <View style={{ height: 300 }}></View>
         <UrgeWithPleasureComponent timeDuration={60} startTimer={false} />
      </View>
   );
};

export default GoalDashboard;
