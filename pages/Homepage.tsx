import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "./ParamList";
import HomepageHeader from "./components/HomepageHeader";
import NavBar from "./components/NavBar";
import GoalList from "./components/GoalList";

type ProfileScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   "Homepage"
>;

type props = {
   navigation: ProfileScreenNavigationProp;
};

const Homepage = ({ navigation }: props) => {
   return (
      <View style={{ flex: 1 }}>
         <HomepageHeader />
         <GoalList userId={"5ff23f39b539773e946b7380"} />
         <NavBar navigation={navigation} />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#FFFFFF",
   },
});

export default Homepage;
