import React from "react";
import { Text, View, TextInput, StyleSheet, Button, Alert } from "react-native";
import Name from "./Name";
import Buddy from "./Buddy";

const Goal = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text>NEW GOAL</Text>
            </View>
            <View>
                <Name title="Name" />
                <Name title="Start Date" />
                <Name title="End Date" />
                <Name title="Period" />
                <Name title="Stake" />
                {/* <Buddy /> */}
                <Button title="Add Goal" onPress={() => Alert.alert('Added new goal...')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 180,
        marginLeft: 40,
        marginRight: 40,
    }
});

export default Goal