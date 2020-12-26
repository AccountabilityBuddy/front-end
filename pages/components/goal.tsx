// @ts-nocheck

import React from "react";
import { Text, View, TextInput, StyleSheet, Button, Alert } from "react-native";
import Name from "./Name";
import Buddy from "./Buddy";

const Goal = () => {

    return (
        <View >
            <div>
                <p>NEW GOAL</p>
            </div>
            <div>
                <Name title="Name" />
                <Name title="Start Date" />
                <Name title="End Date" />
                <Name title="Period" />
                <Name title="Stake" />
                <Buddy />
                <Button title="Add Goal" onPress={() => Alert.alert('Added new goal...')} />
            </div>
        </View>
    )
}

export default Goal