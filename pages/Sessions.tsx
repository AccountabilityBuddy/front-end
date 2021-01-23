import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { request, gql } from "graphql-request";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "./ParamList";
import SessionCard from "./components/SessionCard";

type ProfileScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   "Sessions"
>;

type prop = {
   userId: string;
};

type createdGoal = {
   id: string;
   name: string;
   buddy: { firstName: string; lastName: string };
   sessions: Array<{
      _id: string;
      approved: boolean;
      finished: boolean;
      startDateTime: string;
   }>;
};

const Sessions = ({ userId }: prop) => {
   const [fetchedData, setFetchedData] = useState<Array<createdGoal>>([]);
   let sessionCardList: Array<JSX.Element> = [];
   useEffect(() => {
      const query = gql`
         query {
            users(id: "${userId}") {
               _id
               username
               createdGoals {
                  _id
                  name
                  buddy {
                     firstName
                     lastName
                  }
                  sessions {
                     _id
                     approved
                     finished
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
         const createdGoals = data["users"][0]["createdGoals"];
         const unapprovedSessions = createdGoals.map((goal: createdGoal) => {
            const sessionData = {
               name: goal["name"],
               buddy: {
                  firstName: goal["buddy"]["firstName"],
                  lastName: goal["buddy"]["lastName"],
               },
               sessions: goal["sessions"].filter(
                  (session) => !session["approved"]
               ),
            };
            return sessionData;
         });
         setFetchedData(unapprovedSessions);
         //fetchedData.forEach((data) => console.log(data));
         // console.log(sessionCardList);
      });
   }, []);

   console.log(fetchedData);

   for (var i = 0; i < fetchedData.length; i++) {
      let name = fetchedData[i]["name"];
      let buddyName =
         fetchedData[i]["buddy"]["firstName"] +
         " " +
         fetchedData[i]["buddy"]["lastName"];
      for (var j = 0; j < fetchedData[i]["sessions"].length; j++) {
         let approved = fetchedData[i]["sessions"][j]["approved"];
         let startDateTime = fetchedData[i]["sessions"][j]["startDateTime"];
         let id = fetchedData[i]["sessions"][j]["_id"];
         sessionCardList.push(
            <SessionCard
               key={id}
               name={name}
               buddyName={buddyName}
               approved={approved}
               startDateTime={startDateTime}
            />
         );
      }
   }

   return <ScrollView>{sessionCardList}</ScrollView>;
};

export default Sessions;
