import React from "react";
import { View } from "react-native";
import HomepageHeader from "./components/HomepageHeader";
import GoalList from "./components/GoalList";

type props = {
   userId: string;
};

const Homepage = ({ userId }: props) => {
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
         <GoalList userId={userId} />
      </View>
   );
};

export default Homepage;
