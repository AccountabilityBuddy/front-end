import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { request, gql } from "graphql-request";
import AppLoading from "expo-app-loading";
import GoalCard from "./GoalCard";

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
         "https://accountability-buddy-backend.herokuapp.com/graphql?",
         query
      ).then((data) => {
         setFetchedData(data["users"][0]["createdGoals"]);
      });
      setLoading(false);
   }, []);

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

   return <ScrollView>{goalCardList}</ScrollView>;
};

export default GoalList;
