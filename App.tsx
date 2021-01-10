import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./pages/Homepage";
import Goal from "./pages/AddNewGoal";
import GoalDashboard from "./pages/GoalDashboard";

const Stack = createStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Homepage">
            <Stack.Screen
               name="Homepage"
               component={Homepage}
               options={{
                  headerTitle: "Accountability Buddy",
               }}
            />
            <Stack.Screen
               name="AddNewGoal"
               component={Goal}
               options={{
                  headerTitle: "Add Goal",
               }}
            />
         </Stack.Navigator>
         {/* <View style={styles.container}>
            <Homepage />
         </View> */}
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#DAE0E6",
   },
});
