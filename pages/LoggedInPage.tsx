import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Homepage from "./Homepage";
import Goal from "./AddNewGoal";
import GoalDashboard from "./GoalDashboard";
import {
   HomepageNavigator,
   AddNewGoalNavigator,
   SessionsNavigator,
} from "./Navigators";
import Login from "./Login";

const Tab = createBottomTabNavigator();

type props = {
   userId: string;
};

const LoggedInPage = ({ userId }: props) => {
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
                     iconName = focused ? "add-circle" : "add-circle-outline";
                  } else if (route.name === "Data") {
                     iconName = focused ? "bar-chart" : "bar-chart-outline";
                  } else if (route.name === "Buddies") {
                     iconName = focused ? "people-sharp" : "people-outline";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
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
               children={() => <HomepageNavigator userId={userId} />}
               options={{
                  title: "Home",
               }}
            />
            <Tab.Screen
               name="Data"
               children={() => <SessionsNavigator userId={userId} />}
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
               children={() => <AddNewGoalNavigator userId={userId} />}
               options={{
                  title: "Add Goal",
               }}
            />
         </Tab.Navigator>
      </NavigationContainer>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#F9F8F7",
   },
});

export default LoggedInPage;
