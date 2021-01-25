import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert } from "react-native";
import { request, gql } from "graphql-request";
import GoalsResponsibleCard from "./GoalsResponsibleCard";
import { useIsFocused } from "@react-navigation/native";

type props = {
   userId: string;
};

type fetchedData = {
   name: string;
   creatorName: string;
   sessions: Array<{
      _id: string;
      startDateTime: string;
      note: string;
      approved: boolean;
      imageURL: string;
   }>;
};

type goalsResponsible = {
   name: string;
   creator: { firstName: string; lastName: string };
   sessions: Array<{
      _id: string;
      startDateTime: string;
      note: string;
      approved: boolean;
      imageURL: string;
   }>;
};

const GoalsResponsible = ({ userId }: props) => {
   const [fetchedData, setFetchedData] = useState<Array<fetchedData>>([]);
   const [didApprove, setDidApprove] = useState(false);
   let goalsResponsibleCardList: Array<JSX.Element> = [];
   const isFocused = useIsFocused();
   useEffect(() => {
      const userIdNoSpace = userId.replace(/\s/g, "");
      const query = gql`
         query {
            users(id: "${userIdNoSpace}") {
               goalsResponsible {
                  name
                  creator {
                     firstName
                     lastName
                  }
                  sessions {
                     _id
                     startDateTime
                     note
                     approved
                     imageURL
                  }
               }
            }
         }
      `;

      request(
         "https://accountability-buddy-backend.azurewebsites.net/graphql",
         query
      ).then((data) => {
         const goalsResponsible = data["users"][0]["goalsResponsible"];
         const unapprovedGoalsResponsible = goalsResponsible.map(
            (goal: goalsResponsible) => {
               const sessionData = {
                  name: goal["name"],
                  creatorName: `${goal["creator"]["firstName"]} ${goal["creator"]["lastName"]}`,
                  sessions: goal["sessions"].filter(
                     (session) => !session["approved"]
                  ),
               };
               return sessionData;
            }
         );
         setFetchedData(unapprovedGoalsResponsible);
      });
   }, [isFocused, didApprove]);

   for (var i = 0; i < fetchedData.length; i++) {
      let goalName = fetchedData[i]["name"];
      let creatorName = fetchedData[i]["creatorName"];
      for (var j = 0; j < fetchedData[i]["sessions"].length; j++) {
         let approved = fetchedData[i]["sessions"][j]["approved"];
         let startDateTime = fetchedData[i]["sessions"][j]["startDateTime"];
         let note = fetchedData[i]["sessions"][j]["note"];
         let id = fetchedData[i]["sessions"][j]["_id"];
         let image = fetchedData[i]["sessions"][j]["imageURL"];
         goalsResponsibleCardList.push(
            <GoalsResponsibleCard
               key={id}
               id={id}
               startDateTime={startDateTime}
               creatorName={creatorName}
               goalName={goalName}
               note={note}
               approved={approved}
               image={image}
               val={didApprove}
               setVal={setDidApprove}
            />
         );
      }
   }

   return <ScrollView>{goalsResponsibleCardList}</ScrollView>;
};

export default GoalsResponsible;
