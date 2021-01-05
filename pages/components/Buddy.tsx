import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
//NOTE: Need endpoints to make the GraphQL query thing to dynamically add the buddies in the dropdown. Have just left as it is for now. 

const Buddy = () => {
    const [currency, setCurrency] = useState(' ');
    return (
        <View >
            <View>
                <Picker
                    selectedValue={currency}
                    onValueChange={currentCurrency => setCurrency(currentCurrency)}>
                    <Picker.Item label="People" value="People" />
                    <Picker.Item label="Add a Buddy" value="Invite People" />
                </Picker>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    //Check project repo for styles
});

export default Buddy;