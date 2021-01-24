import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Homepage from "./pages/Homepage";
import Goal from "./pages/AddNewGoal";
import GoalDashboard from "./pages/GoalDashboard";
import Login from "./pages/Login";
import LoggedInPage from "./pages/LoggedInPage";

const Tab = createBottomTabNavigator();

export default function App() {
   const [loggedIn, setLoggedIn] = useState(false);
   const [userId, setUserId] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   if (loggedIn) {
      return <LoggedInPage userId={userId} setLoggedIn={setLoggedIn} />;
   } else {
      return <Login loggedIn={setLoggedIn} setUserId={setUserId} />;
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#F9F8F7",
   },
});
