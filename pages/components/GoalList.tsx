import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import GoalCard from "./GoalCard";

const GoalList = () => {
    return (
        <ScrollView>
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
        </ScrollView>
    )
}

export default GoalList;