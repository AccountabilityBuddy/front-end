import React, { useState } from "react";
import { TextInput, Text, View, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { request, gql } from "graphql-request";
import LoggedInPage from "./LoggedInPage";

type props = {
   loggedIn: React.Dispatch<React.SetStateAction<boolean>>;
   setUserId: React.Dispatch<React.SetStateAction<string>>;
};

const loginFailedAlert = () => {
   Alert.alert(
      "Wrong Email or Password",
      "The email or password entered were incorrect and did not match any account, please try again.",
      [
         {
            text: "Try Again",
            onPress: () => console.log("Trying again"),
         },
      ],
      { cancelable: false }
   );
};

const checkAndLogin = (
   email: string,
   password: string,
   loggedin: React.Dispatch<React.SetStateAction<boolean>>,
   setUserId: React.Dispatch<React.SetStateAction<string>>
): boolean => {
   const useremail = email.replace(/\s/g, "");
   const userpassword = password.replace(/\s/g, "");
   const query = gql`
      query {
         checkPassword(
            loginInfo: { email: "${useremail}", password: "${userpassword}" }
         ) {
            _id
            email
         }
      }
   `;

   request("https://accountability-buddy-backend.herokuapp.com/graphql?", query)
      .then((data) => {
         console.log(data["checkPassword"]["_id"]);
         if (data["checkPassword"]["_id"]) {
            setUserId(data["checkPassword"]["_id"]);
            loggedin(true);
            return true;
         }
         loginFailedAlert();
         return false;
      })
      .catch(() => {
         loginFailedAlert();
         return false;
      });
   return false;
};

const Login = ({ loggedIn, setUserId }: props) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   return (
      <View
         style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 30,
            paddingRight: 30,
         }}
      >
         <Text style={{ fontSize: 45, marginBottom: 80 }}>Login</Text>
         <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>Email</Text>
         <TextInput
            style={{
               height: 30,
               width: "100%",
               marginBottom: 20,
               borderColor: "gray",
               borderWidth: 1,
               borderRadius: 3,
               paddingLeft: 5,
            }}
            value={email}
            onChangeText={(text) => setEmail(text)}
         />
         <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>Password</Text>
         <TextInput
            style={{
               height: 30,
               width: "100%",
               marginBottom: 20,
               borderColor: "gray",
               borderWidth: 1,
               borderRadius: 3,
               paddingLeft: 5,
            }}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
         />
         <Button
            onPress={() => {
               checkAndLogin(email, password, loggedIn, setUserId);
            }}
            title="Login"
            accessibilityLabel="Learn more about this purple button"
         />
      </View>
   );
};

export default Login;
