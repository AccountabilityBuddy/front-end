import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
    progress: number;
}

const GoalsAchievedProgress = ({progress}: Props) => {
    return <View style={{
        height: 10,
        alignSelf: 'flex-start',
        width: `${progress}%`,
        backgroundColor: "green",}}>

        </View>;
};

const styles = StyleSheet.create({
    container: {
        height: 10,
        alignSelf: 'flex-start',
        width: '50%',
        backgroundColor: "green",
    },
});

export default GoalsAchievedProgress;
