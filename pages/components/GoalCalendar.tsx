import React, { useState } from "react";
import { View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const timestamp = require("unix-timestamp");

type props = {
   sessions: Array<string>;
};

const GoalCalendar = (sessions: props) => {
   function formatDate(date: Date) {
      var d = new Date(date),
         month = "" + (d.getMonth() + 1),
         day = "" + d.getDate(),
         year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
   }
   const [sessionDates, setSessionDates] = useState(
      sessions["sessions"].map((unixDate) =>
         formatDate(timestamp.toDate(parseInt(unixDate.slice(0, -3))))
      )
   );
   let markedDatesObj: { [k: string]: any } = {};
   sessionDates.forEach((dateString: string) => {
      markedDatesObj[dateString] = {
         startingDay: true,
         endingDay: true,
         color: "#50cebb",
         textColor: "white",
      };
   });
   return (
      <View>
         <Calendar
            // Collection of dates that have to be colored in a special way. Default = {}
            markedDates={markedDatesObj}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType={"period"}
         />
      </View>
   );
};

export default GoalCalendar;
