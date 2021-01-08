import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./pages/Homepage";
import GoalDashboard from "./pages/GoalDashboard";

export default function App() {
   return (
      <View style={styles.container}>
         <GoalDashboard />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#DAE0E6",
   },
});
