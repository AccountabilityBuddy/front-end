import React from "react";
import { StyleSheet, Text, View } from "react-native";

type props = {
   goalName: String;
};

const GoalDashboardHeader = ({ goalName }: props) => {
   return (
      <View>
         <Text>{goalName}</Text>
      </View>
   );
};

export default GoalDashboardHeader;
