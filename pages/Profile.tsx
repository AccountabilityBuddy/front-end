import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View, Alert } from "react-native";
import { request, gql } from "graphql-request";
import { useIsFocused } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type props = {
   userId: string;
   setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

type fetchedData = {
   firstName: string;
   lastName: string;
   username: string;
   email: string;
};

const alertAndLogout = (
   setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
) => {
   Alert.alert(
      "Are you sure you want to Logout?",
      "",
      [
         {
            text: "Yes",
            onPress: () => {
               setLoggedIn(false);
            },
         },
         {
            text: "No",
            onPress: () => console.log("logout cancelled"),
         },
      ],
      { cancelable: false }
   );
};

const Profile = ({ userId, setLoggedIn }: props) => {
   const [fetchedData, setFetchedData] = useState<fetchedData>({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
   });
   const isFocused = useIsFocused();
   useEffect(() => {
      console.log(userId);
      const userIdNoSpace = userId.replace(/\s/g, "");
      const query = gql`
         query {
            users(id: "${userIdNoSpace}") {
               firstName
               lastName
               username
               email
            }
         }
      `;

      request(
         "https://accountability-buddy-backend.azurewebsites.net/graphql",
         query
      ).then((data) => {
         setFetchedData(data["users"][0]);
      });
      console.log("test");
   }, [isFocused]);

   return (
      <View style={{ flex: 1 }}>
         <ScrollView>
            <View
               style={{
                  flex: 1,
                  flexDirection: "row",
                  height: 50,
                  backgroundColor: "#FFFFFF",
               }}
            >
               <Text
                  style={{
                     textAlign: "center",
                     fontFamily: "Montserrat_400Regular",
                     marginLeft: 10,
                     textAlignVertical: "center",
                     fontSize: 28,
                  }}
               >
                  {fetchedData["firstName"] + " " + fetchedData["lastName"]}
               </Text>
               <Ionicons
                  name={"person-circle"}
                  size={45}
                  color={"#F23826"}
                  style={{
                     alignSelf: "center",
                     position: "absolute",
                     right: 0,
                     marginRight: 10,
                  }}
               />
            </View>
            <View
               style={{
                  flex: 1,
                  flexDirection: "row",
                  height: 50,
                  backgroundColor: "#FFFFFF",
               }}
            >
               <Text
                  style={{
                     textAlign: "center",
                     fontFamily: "Montserrat_400Regular",
                     textAlignVertical: "center",
                     marginLeft: 10,
                     fontSize: 18,
                  }}
               >
                  username:
               </Text>
               <Text
                  style={{
                     textAlign: "center",
                     fontFamily: "Montserrat_400Regular",
                     marginLeft: 10,
                     textAlignVertical: "center",
                     fontSize: 18,
                  }}
               >
                  {fetchedData["username"]}
               </Text>
            </View>
            <View
               style={{
                  flex: 1,
                  flexDirection: "row",
                  height: 50,
                  backgroundColor: "#FFFFFF",
               }}
            >
               <Text
                  style={{
                     textAlign: "center",
                     fontFamily: "Montserrat_400Regular",
                     textAlignVertical: "center",
                     marginLeft: 10,
                     fontSize: 18,
                  }}
               >
                  Email:
               </Text>
               <Text
                  style={{
                     textAlign: "center",
                     fontFamily: "Montserrat_400Regular",
                     marginLeft: 10,
                     textAlignVertical: "center",
                     fontSize: 18,
                  }}
               >
                  {fetchedData["email"]}
               </Text>
            </View>
         </ScrollView>
         <View style={{}}>
            <Button
               title="Logout"
               onPress={() => {
                  alertAndLogout(setLoggedIn);
               }}
            />
         </View>
      </View>
   );
};

export default Profile;
