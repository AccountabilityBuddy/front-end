import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import GoalCard from "./GoalCard";

// make a list of goalcards

type Props = {
    userId: Number
}

const GoalList = ({userId}: Props) => {

    useEffect(() => {
        // add graphQL query to fetch a list of goals based on the given userId
        // it will return a list of goal IDs, pass them as props to the goal card component
    });

    return (
        <ScrollView>
            {/* <GoalCard goalName="Gym" buddyName="Bean"/>
            <GoalCard goalName="Eat Veggies" buddyName="Bob"/>
            <GoalCard goalName="Read" buddyName="Hank"/>
            <GoalCard goalName="Gym" buddyName="Bean"/>
            <GoalCard goalName="Gym" buddyName="Bean"/>
            <GoalCard goalName="Gym" buddyName="Bean"/>
            <GoalCard goalName="Gym" buddyName="Bean"/>
            <GoalCard goalName="Gym" buddyName="Bean"/>
            <GoalCard goalName="Gym" buddyName="Bean"/>
            <GoalCard goalName="Gym" buddyName="Bean"/> */}
        </ScrollView>
    )
}

export default GoalList;