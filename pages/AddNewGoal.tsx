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
import InputDate from "./components/InputDate";
import Buddy from "./components/Buddy";
import NavBar from "./components/NavBar";
import NameBuddy from "./components/NameBuddy";

type ProfileScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   "Homepage"
>;

// Add prop for creator

type props = {
   userId: string;
   setVal: Function;
};

const goalAddedAlert = (
   goalName: string,
   setGoalName: React.Dispatch<React.SetStateAction<string>>,
   setStartDate: React.Dispatch<React.SetStateAction<Date>>,
   setEndDate: React.Dispatch<React.SetStateAction<Date>>,
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
            onPress: () => {},
         },
      ],
      { cancelable: false }
   );
};

const Goal = ({ userId, setVal }: props) => {
   const [goalName, setGoalName] = useState("");
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());
   const [goalPeriod, setGoalPeriod] = useState("");
   const [goalStake, setGoalStake] = useState("");
   const [buddy, setBuddy] = useState("");

   const _userId = userId.replace(/\s/g, "");

   return (
      <ScrollView>
         <View style={styles.container}>
            <Name title="Name" setVal={setGoalName} />
            <InputDate
               title="Start Date"
               date={startDate}
               setVal={setStartDate}
            />
            <InputDate title="End Date" date={endDate} setVal={setEndDate} />
            <Name title="Period" setVal={setGoalPeriod} />
            <Name title="Stake" setVal={setGoalStake} />
            <NameBuddy title="Buddy" setVal={setBuddy} />
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
                        "https://accountability-buddy-backend.azurewebsites.net/graphql",
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
                                    startDate: "${startDate}"
                                    endDate: "${endDate}"
                                 }
                              ) {
                                 name
                              }
                           }
                        `;
                        request(
                           "https://accountability-buddy-backend.azurewebsites.net/graphql",
                           query
                        ).then((data) => {
                           goalAddedAlert(
                              goalName,
                              setGoalName,
                              setStartDate,
                              setEndDate,
                              setGoalPeriod,
                              setGoalStake,
                              setBuddy
                           );
                           setVal();
                        });
                     });
                  }
               }}
            />
            <View style={{ marginTop: 10 }}>
               <Button
                  color="#F23826"
                  title="Cancel"
                  onPress={() => {
                     setVal();
                  }}
               />
            </View>
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
