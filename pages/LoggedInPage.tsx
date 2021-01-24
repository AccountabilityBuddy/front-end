import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
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
   GoalsResponsibleNavigator,
} from "./Navigators";
import Login from "./Login";
import Profile from "./Profile";

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
                     | "person"
                     | "person-outline"
                     | "people-outline"
                     | "people-sharp"
                     | "bar-chart-outline"
                     | "bar-chart";

                  iconName = "home";

                  if (route.name === "Homepage") {
                     iconName = focused ? "home" : "home-outline";
                  } else if (route.name === "Profile") {
                     iconName = focused ? "person" : "person-outline";
                  } else if (route.name === "Data") {
                     iconName = focused ? "bar-chart" : "bar-chart-outline";
                  } else if (route.name === "GoalsResponsible") {
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
               name="GoalsResponsible"
               children={() => <GoalsResponsibleNavigator userId={userId} />}
               options={{
                  title: "Goals Responsible",
               }}
            />
            <Tab.Screen
               name="Profile"
               children={() => <Profile />}
               options={{
                  title: "Profile",
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
