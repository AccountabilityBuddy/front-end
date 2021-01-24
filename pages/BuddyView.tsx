// @ts-nocheck
import React, { useState, useEffect } from "react";
import {
   Button,
   StyleSheet,
   Image,
   View,
   Platform,
   TextInput,
   Text,
   ScrollView,
   TouchableHighlight,
   Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { request, gql } from "graphql-request";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../ParamList";

type ProfileScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   "GoalDashboard"
>;

type Props = {
   navigation: ProfileScreenNavigationProp;
   route: any;
};

const BuddyView = ({ navigation, route }: Props) => {
   const [image, setImage] = useState(null);
   const [value, onChangeText] = React.useState("");

   useEffect(() => {
      (async () => {
         if (Platform.OS !== "web") {
            const {
               status,
            } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
               alert(
                  "Sorry, we need camera roll permissions to make this work!"
               );
            }
         }
      })();
   }, []);

   const pickImage = async () => {
      let result = await ImagePicker.launchCameraAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [3, 4],
         quality: 1,
      });

      if (!result.cancelled) {
         setImage(result.uri);
      }
   };

   const sendSession = async () => {
      let date = new Date();
      const query = gql`
         mutation {
            createSession(
               sessionInput: {
                  goal: "${route.params.goalId}"
                  finished: true
                  imageURL: "temp2"
                  approved: false
                  note: "${value}"
                  startDateTime: "${date}"
               }
            ) {
               _id
            }
         }
      `;

      request(
         "https://accountability-buddy-backend.azurewebsites.net/graphql",
         query
      ).then((data) => {});

      Alert.alert(
         "This session has been successfully sent to your buddy!",
         "",
         [
            {
               text: "OK",
               onPress: () => console.log("session sent"),
            },
         ],
         { cancelable: false }
      );
   };

   return (
      <ScrollView
         style={{
            paddingLeft: 10,
            paddingRight: 10,
            height: "100%",
         }}
         contentContainerStyle={{
            flex: 1,
         }}
      >
         <View style={styles.imageContainer}>
            {image && (
               <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: "100%", borderRadius: 5 }}
               />
            )}
         </View>
         <TouchableHighlight
            activeOpacity={1}
            underlayColor="#39AE92"
            style={styles.picButton}
            onPress={pickImage}
         >
            <Text
               style={{
                  textAlignVertical: "center",
                  color: "white",
               }}
            >
               Click a Picture
            </Text>
         </TouchableHighlight>
         <TextInput
            style={styles.textInput}
            textAlignVertical="top"
            placeholder="Add a note"
            onChangeText={(text) => onChangeText(text)}
            multiline={true}
            value={value}
         />
         <TouchableHighlight
            activeOpacity={1}
            underlayColor="#39AE92"
            style={styles.sendButton}
            onPress={sendSession}
         >
            <Text
               style={{
                  textAlignVertical: "center",
                  color: "white",
               }}
            >
               Send
            </Text>
         </TouchableHighlight>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   imageContainer: {
      // width: "100%",
      height: "60%",
      backgroundColor: "#FFFFFF",
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 5,
      flex: 7,
   },
   textInput: {
      borderRadius: 5,
      backgroundColor: "#FFFFFF",
      marginBottom: 8,
      padding: 5,
      flex: 3,
   },
   picButton: {
      height: 30,
      width: "100%",
      borderRadius: 5,
      marginBottom: 8,
      paddingTop: 4,
      alignItems: "center",
      backgroundColor: "#3FC2A3",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   sendButton: {
      height: 30,
      width: "100%",
      borderRadius: 5,
      marginBottom: 8,
      paddingTop: 4,
      alignItems: "center",
      backgroundColor: "#3FC2A3",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});

export default BuddyView;
