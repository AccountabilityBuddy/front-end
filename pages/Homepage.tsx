import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "./ParamList";
import HomepageHeader from "./components/HomepageHeader";
import NavBar from "./components/NavBar";
import GoalList from "./components/GoalList";
import BuddyView from "./BuddyView";

type ProfileScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   "Homepage"
>;

type props = {
   navigation: ProfileScreenNavigationProp;
};

const Homepage = ({ navigation }: props) => {
   return (
      <View
         style={{
            flex: 1,
            backgroundColor: "#F9F8F7",
            paddingLeft: 10,
            paddingRight: 10,
         }}
      >
         <HomepageHeader />
         <GoalList
            navigation={navigation}
            userId={"5ff23f39b539773e946b7380"}
         />
      </View>
      // <View>
      //    <BuddyView />
      // </View>
   );
};

export default Homepage;
