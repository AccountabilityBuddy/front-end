import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./Homepage";
import Goal from "./AddNewGoal";
import GoalDashboard from "./GoalDashboard";
import Sessions from "./Sessions";
import BuddyView from "./BuddyView";
import GoalTimer from "./GoalTimer";

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
               goalPeriod: "5",
            }}
            options={{
               headerTitle: "Goal Dashboard",
            }}
         />
         <Stack.Screen
            name="GoalTimer"
            component={GoalTimer}
            initialParams={{
               goalName: "Goal",
               goalPeriod: "5",
            }}
            options={{
               headerTitle: "Goal Timer",
            }}
         />
         <Stack.Screen
            name="BuddyView"
            component={BuddyView}
            initialParams={{}}
            options={{
               headerTitle: "Goal Dashboard",
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

const SessionsNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Sessions"
            component={Sessions}
            options={{
               headerTitle: "Sessions",
            }}
         />
      </Stack.Navigator>
   );
};

export { HomepageNavigator, AddNewGoalNavigator, SessionsNavigator };
