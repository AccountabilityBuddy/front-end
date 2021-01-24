import React, { useState } from "react";
import {
   ScrollView,
   View,
   TextInput,
   StyleSheet,
   Button,
   Alert,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { request, gql } from "graphql-request";
import RootStackParamList from "./ParamList";
import Name from "./components/Name";
import Buddy from "./components/Buddy";
import NavBar from "./components/NavBar";

type ProfileScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   "Homepage"
>;

// Add prop for creator

type props = {
   userId: string;
};

const goalAddedAlert = (
   goalName: string,
   setGoalName: React.Dispatch<React.SetStateAction<string>>,
   setStartDate: React.Dispatch<React.SetStateAction<string>>,
   setEndDate: React.Dispatch<React.SetStateAction<string>>,
   setGoalPeriod: React.Dispatch<React.SetStateAction<string>>,
   setGoalStake: React.Dispatch<React.SetStateAction<string>>,
   setBuddy: React.Dispatch<React.SetStateAction<string>>
) => {
   Alert.alert(
      "Goal Added",
      `The goal ${goalName} has been added!`,
      [
         {
            text: "Done",
            onPress: () => {
               setGoalName("");
               setStartDate("");
               setEndDate("");
               setGoalPeriod("");
               setGoalStake("");
               setBuddy("");
            },
         },
      ],
      { cancelable: false }
   );
};

const Goal = ({ userId }: props) => {
   const [goalName, setGoalName] = useState("");
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndDate] = useState("");
   const [goalPeriod, setGoalPeriod] = useState("");
   const [goalStake, setGoalStake] = useState("");
   const [buddy, setBuddy] = useState("");

   const _userId = userId.replace(/\s/g, "");

   return (
      <ScrollView>
         <View style={styles.container}>
            <Name title="Name" setVal={setGoalName} />
            <Name title="Start Date" setVal={setStartDate} />
            <Name title="End Date" setVal={setEndDate} />
            <Name title="Period" setVal={setGoalPeriod} />
            <Name title="Stake" setVal={setGoalStake} />
            <Name title="Buddy" setVal={setBuddy} />
            <Button
               title="Add Goal"
               onPress={() => {
                  // what's the difference between period and durationPerSession?
                  if (goalName !== "") {
                     const queryGetBuddyId = gql`
                        query {
                           getIdByEmail(
                              userEmail: { email: "${buddy}" }
                           )
                        }
                     `;

                     request(
                        "https://accountability-buddy-backend.herokuapp.com/graphql?",
                        queryGetBuddyId
                     ).then((data) => {
                        const query = gql`
                           mutation {
                              createGoal(
                                 goalInput: {
                                    name: "${goalName}"
                                    stake: "${goalStake}"
                                    buddy: "${data["getIdByEmail"]}"
                                    period: "${goalPeriod}"
                                    creator: "${_userId}"
                                    durationPerSession: "${goalPeriod}"
                                    startDate: "2020-12-26T04:59:43.789Z"
                                    endDate: "2021-12-26T04:59:43.789Z"
                                 }
                              ) {
                                 name
                              }
                           }
                        `;
                        request(
                           "https://accountability-buddy-backend.herokuapp.com/graphql?",
                           query
                        ).then((data) => {
                           goalAddedAlert(
                              data["name"],
                              setGoalName,
                              setStartDate,
                              setEndDate,
                              setGoalPeriod,
                              setGoalStake,
                              setBuddy
                           );
                        });
                     });
                  }
               }}
            />
         </View>
      </ScrollView>
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
