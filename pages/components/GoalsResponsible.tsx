import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { request, gql } from "graphql-request";

type props = {
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

const GoalsResponsible = ({ userId }: props) => {
   const [fetchedData, setFetchedData] = useState<Array<createdGoal>>([]);
   let sessionCardList: Array<JSX.Element> = [];
   useEffect(() => {
      console.log(userId);
      const userIdNoSpace = userId.replace(/\s/g, "");
      const query = gql`
         query {
            users(id: "5ff23f39b539773e946b7380") {
               _id
               goalsResponsible {
                  name
                  buddy {
                     firstName
                     lastName
                  }
                  sessions {
                     note
                     approved
                     imageURL
                  }
               }
            }
         }
      `;

      request(
         "https://accountability-buddy-backend.herokuapp.com/graphql?",
         query
      ).then((data) => {
         console.log(data);
      });
   }, []);

   return <View></View>;
};

export default GoalsResponsible;
