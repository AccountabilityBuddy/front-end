import React, { Component, useState } from "react";
import { TouchableOpacity, Text, View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

type NameProps = {
   title: string;
   setVal: React.Dispatch<React.SetStateAction<Date>>;
   date: Date;
};

function formatDate(date: Date) {
   var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

   if (month.length < 2) month = "0" + month;
   if (day.length < 2) day = "0" + day;

   return [year, month, day].join("-");
}

const InputDate = ({ title, date, setVal }: NameProps) => {
   const [show, setShow] = useState(false);

   return (
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
         <Text style={{ flex: 1 }}>{title}: </Text>
         <TouchableOpacity
            style={{
               flex: 1,
               height: 40,
               borderColor: "gray",
               borderWidth: 1,
               borderRadius: 3,
               paddingLeft: 5,
            }}
            onPress={() => {
               setShow(true);
            }}
         >
            <Text
               style={{
                  marginTop: 9,
                  color: "#A4A4A4",
               }}
            >
               {formatDate(date)}
            </Text>
         </TouchableOpacity>
         {show && (
            <DateTimePicker
               testID="dateTimePicker"
               style={{ width: 320, backgroundColor: "white" }}
               value={date}
               mode={"date"}
               display="default"
               onChange={(event, selectedDate) => {
                  setShow(Platform.OS === "ios");
                  if (selectedDate) {
                     setVal(selectedDate);
                  }
               }}
            />
         )}
      </View>
   );
};

export default InputDate;
