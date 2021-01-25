import React, { useState } from "react";
import { TextInput, Text, View, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { request, gql } from "graphql-request";
import LoggedInPage from "./LoggedInPage";
import { TouchableHighlight } from "react-native-gesture-handler";

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
            onPress: () => {},
         },
      ],
      { cancelable: false }
   );
};

const checkAndSignup = (
   email: string,
   password: string,
   username: string,
   firstname: string,
   lastname: string,
   loggedin: React.Dispatch<React.SetStateAction<boolean>>,
   setUserId: React.Dispatch<React.SetStateAction<string>>
) => {
   const useremail = email.replace(/\s/g, "");
   const userpassword = password.replace(/\s/g, "");
   const userusername = username.replace(/\s/g, "");
   const userfirstname = firstname.replace(/\s/g, "");
   const userlastname = lastname.replace(/\s/g, "");
   const query = gql`
      mutation {
         createUser(
            userInput: {
               email: "${useremail}"
               username: "${userusername}"
               password: "${userpassword}"
               firstName: "${userfirstname}"
               lastName: "${userlastname}"
            }
         ) {
            _id
            email
         }
      }
   `;
   request(
      "https://accountability-buddy-backend.azurewebsites.net/graphql",
      query
   )
      .then((data) => {
         if (data["createUser"]["_id"]) {
            setUserId(data["createUser"]["_id"]);
            loggedin(true);
         } else {
            loginFailedAlert();
         }
      })
      .catch(() => {
         loginFailedAlert();
      });
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

   request(
      "https://accountability-buddy-backend.azurewebsites.net/graphql",
      query
   )
      .then((data) => {
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
   const [signup, setSignup] = useState(false);
   const [username, setUsername] = useState("");
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");

   if (signup) {
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
            <Text style={{ fontSize: 45, marginBottom: 80 }}>SignUp</Text>
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
            <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>
               Username
            </Text>
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
               value={username}
               onChangeText={(text) => setUsername(text)}
            />
            <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>
               Firstname
            </Text>
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
               value={firstname}
               onChangeText={(text) => setFirstname(text)}
            />
            <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>
               Lastname
            </Text>
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
               value={lastname}
               onChangeText={(text) => setLastname(text)}
            />
            <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>
               Password
            </Text>
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
                  checkAndSignup(
                     email,
                     password,
                     username,
                     firstname,
                     lastname,
                     loggedIn,
                     setUserId
                  );
               }}
               title="SignUp"
               accessibilityLabel="Learn more about this purple button"
            />
            <TouchableHighlight
               onPress={() => {
                  setSignup(false);
               }}
               style={{ marginTop: 30 }}
            >
               <Text style={{ color: "#007AFF", fontWeight: "700" }}>
                  Already have an account? Login
               </Text>
            </TouchableHighlight>
         </View>
      );
   } else {
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
            <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>
               Password
            </Text>
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
            <TouchableHighlight
               onPress={() => {
                  setSignup(true);
               }}
               style={{ marginTop: 30 }}
            >
               <Text style={{ color: "#007AFF", fontWeight: "700" }}>
                  Create a new account
               </Text>
            </TouchableHighlight>
         </View>
      );
   }
};

export default Login;
