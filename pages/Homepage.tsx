import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomepageHeader from "./components/HomepageHeader";
import HomepageFooter from "./components/HomepageFooter";
import GoalList from "./components/GoalList";

const Homepage = () => {
    return (
        <View style={{flex: 1}}>
            <HomepageHeader />
            <GoalList userId={"5ff23f39b539773e946b7380"}/>
            <HomepageFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
    },
});

export default Homepage;
