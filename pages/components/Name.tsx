import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";

type NameProps = {
   title: string;
};

const Name = ({ title }: NameProps) => {
   const [value, onChangeText] = React.useState("");

   return (
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
         <Text style={{ flex: 1 }}>{title}: </Text>
         <TextInput
            style={{
               flex: 1,
               height: 40,
               borderColor: "gray",
               borderWidth: 1,
               borderRadius: 3,
               paddingLeft: 5,
            }}
            placeholder={`Enter ${title}`}
            onChangeText={(text) => onChangeText(text)}
            value={value}
         />
      </View>
   );
};

export default Name;
