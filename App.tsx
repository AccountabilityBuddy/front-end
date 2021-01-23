import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Homepage from "./pages/Homepage";
import Goal from "./pages/AddNewGoal";
import GoalDashboard from "./pages/GoalDashboard";
import {
   HomepageNavigator,
   AddNewGoalNavigator,
   SessionsNavigator,
} from "./pages/Navigators";

const Tab = createBottomTabNavigator();

export default function App() {
   const [loggedIn, setLoggedIn] = useState(true);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   if (loggedIn) {
      return (
         <NavigationContainer>
            <Tab.Navigator
               screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                     let iconName:
                        | "home"
                        | "home-outline"
                        | "add-circle"
                        | "add-circle-outline"
                        | "people-outline"
                        | "people-sharp"
                        | "bar-chart-outline"
                        | "bar-chart";

                     iconName = "home";

                     if (route.name === "Homepage") {
                        iconName = focused ? "home" : "home-outline";
                     } else if (route.name === "AddNewGoal") {
                        iconName = focused
                           ? "add-circle"
                           : "add-circle-outline";
                     } else if (route.name === "Data") {
                        iconName = focused ? "bar-chart" : "bar-chart-outline";
                     } else if (route.name === "Buddies") {
                        iconName = focused ? "people-sharp" : "people-outline";
                     }

                     // You can return any component that you like here!
                     return (
                        <Ionicons name={iconName} size={size} color={color} />
                     );
                  },
               })}
               tabBarOptions={{
                  keyboardHidesTabBar: true,
                  style: {
                     alignContent: "center",
                     paddingBottom: 10,
                     paddingTop: 10,
                     height: 60,
                  },
                  tabStyle: {},
                  activeTintColor: "#F23826",
                  inactiveTintColor: "#444446",
               }}
            >
               <Tab.Screen
                  name="Homepage"
                  children={() => <HomepageNavigator />}
                  options={{
                     title: "Home",
                  }}
               />
               <Tab.Screen
                  name="Data"
                  children={() => <SessionsNavigator />}
                  options={{
                     title: "Sessions",
                  }}
               />
               <Tab.Screen
                  name="Buddies"
                  component={Goal}
                  options={{
                     title: "Buddies",
                  }}
               />
               <Tab.Screen
                  name="AddNewGoal"
                  component={AddNewGoalNavigator}
                  options={{
                     title: "Add Goal",
                  }}
               />
            </Tab.Navigator>
         </NavigationContainer>
      );
   } else {
      return <Text>LOGIN</Text>;
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#F9F8F7",
   },
});
