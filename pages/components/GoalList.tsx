import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { request, gql } from "graphql-request";
import AppLoading from "expo-app-loading";
import GoalCard from "./GoalCard";

type Props = {
   userId: string;
};

const GoalList = ({ userId }: Props) => {
   const [fetchedData, setFetchedData] = useState<Array<{"_id": (string & String), "name": String}>>([]);
   const [loading, setLoading] = useState(true);
   let goalCardList:Array<JSX.Element> = []

   useEffect(() => {
      const query = gql`
         query {
            users(id: "${userId}") {
               createdGoals {
                  _id
                  name
               }
            }
         }
      `;

      request(
         "https://accountability-buddy-backend.herokuapp.com/graphql?",
         query
      ).then((data) => {
         setFetchedData(data["users"][0]["createdGoals"])
      });
      setLoading(false);
   }, []);

   if(loading) {
      return (
         <AppLoading />
      )
   }

   for(var i = 0; i < fetchedData.length; i++) {
      goalCardList.push(<GoalCard key={fetchedData[i]["_id"]} name={fetchedData[i]["name"]} />)
   }
   
   return (
      <ScrollView>
         {goalCardList}
      </ScrollView>
   );
};

export default GoalList;
