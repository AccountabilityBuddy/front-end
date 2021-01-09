import React from "react";
import { Text, View, TextInput, StyleSheet, Button, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "./ParamList";
import Name from "./components/Name";
import Buddy from "./components/Buddy";
import NavBar from "./components/NavBar";

type ProfileScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   "Homepage"
>;

type props = {
   navigation: ProfileScreenNavigationProp;
};

const Goal = ({ navigation }: props) => {
   return (
      <View style={styles.container}>
         <View>
            <Name title="Name" />
            <Name title="Start Date" />
            <Name title="End Date" />
            <Name title="Period" />
            <Name title="Stake" />
            <Name title="Buddy" />
            <Button
               title="Add Goal"
               onPress={() => Alert.alert("Added new goal...")}
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#FFFFFF",
      borderRadius: 20,
      padding: 20,
      marginTop: 130,
      marginLeft: 30,
      marginRight: 30,
   },
});

export default Goal;
