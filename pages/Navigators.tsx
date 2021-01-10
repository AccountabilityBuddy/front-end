import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./Homepage";
import Goal from "./AddNewGoal";
import GoalDashboard from "./GoalDashboard";

const Stack = createStackNavigator();

const HomepageNavigator = () => {
   return (
      <Stack.Navigator initialRouteName="Homepage">
         <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{
               headerTitle: "Accountability Buddy",
            }}
         />
         <Stack.Screen
            name="GoalDashboard"
            component={GoalDashboard}
            initialParams={{
               goalName: "Goal",
            }}
            options={{
               headerTitle: "Add Goal",
            }}
         />
      </Stack.Navigator>
   );
};

const AddNewGoalNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Add New Goal"
            component={Goal}
            options={{
               headerTitle: "Add Goal",
            }}
         />
      </Stack.Navigator>
   );
};

export { HomepageNavigator, AddNewGoalNavigator };
