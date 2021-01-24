import React, { useEffect, useState } from "react";
import { Button, ScrollView, View, TouchableOpacity, Text } from "react-native";
import { request, gql } from "graphql-request";
import AppLoading from "expo-app-loading";
import GoalCard from "./GoalCard";
import Goal from "../AddNewGoal";

type Props = {
   userId: string;
};

const GoalList = ({ userId }: Props) => {
   const [fetchedData, setFetchedData] = useState<
      Array<{
         _id: string & String;
         name: String;
         buddy: { firstName: string; lastName: string };
         period: string;
         startDate: string;
         endDate: string;
         sessions: Array<{
            startDateTime: string;
         }>;
      }>
   >([]);
   const [loading, setLoading] = useState(true);
   const [refresh, setRefresh] = useState(false);
   let goalCardList: Array<JSX.Element> = [];

   useEffect(() => {
      const query = gql`
         query {
            users(id: "${userId}") {
               createdGoals {
                  _id
                  name
                  period
                  startDate
                  endDate
                  buddy{
                     firstName
                     lastName
                  }
                  sessions {
                     startDateTime
                  }
               }
            }
         }
      `;

      request(
         "https://accountability-buddy-backend.azurewebsites.net/graphql",
         query
      ).then((data) => {
         setFetchedData(data["users"][0]["createdGoals"]);
      });
      setLoading(false);
      console.log("HELLO");
   }, [refresh]);

   if (loading) {
      return <AppLoading />;
   }

   for (var i = 0; i < fetchedData.length; i++) {
      goalCardList.push(
         <GoalCard
            key={fetchedData[i]["_id"]}
            name={fetchedData[i]["name"]}
            id={fetchedData[i]["_id"]}
            startDate={fetchedData[i]["startDate"]}
            endDate={fetchedData[i]["endDate"]}
            buddyName={
               fetchedData[i]["buddy"]["firstName"] +
               " " +
               fetchedData[i]["buddy"]["lastName"]
            }
            goalPeriod={fetchedData[i]["period"]}
            sessions={fetchedData[i]["sessions"].map(
               (data) => data["startDateTime"]
            )}
         />
      );
   }

   if (refresh) {
      return <Goal userId={userId} setVal={() => setRefresh(!refresh)} />;
   } else {
      return (
         <View style={{ flex: 1, marginBottom: 8 }}>
            <ScrollView>{goalCardList}</ScrollView>
            <View>
               <TouchableOpacity
                  onPress={() => {
                     setRefresh(!refresh);
                  }}
               >
                  <View
                     style={{
                        marginTop: 10,
                        width: "100%",
                        height: 30,
                        backgroundColor: "#3FC2A3",
                        borderRadius: 8,
                     }}
                  >
                     <Text
                        style={{
                           marginTop: 5,
                           textAlign: "center",
                           color: "white",
                        }}
                     >
                        Add New Goal
                     </Text>
                  </View>
               </TouchableOpacity>
            </View>
         </View>
      );
   }
};

export default GoalList;
