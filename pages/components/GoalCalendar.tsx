import React from "react";
import { View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const GoalCalendar = () => {
   return (
      <View>
         <Calendar
            // Collection of dates that have to be colored in a special way. Default = {}
            markedDates={{
               "2021-01-14": { textColor: "green" },
               "2021-01-15": { startingDay: true, color: "green" },
               "2021-01-16": {
                  selected: true,
                  endingDay: true,
                  color: "green",
                  textColor: "gray",
               },
               "2021-01-17": {
                  disabled: true,
                  startingDay: true,
                  color: "green",
                  endingDay: true,
               },
            }}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType={"period"}
         />
      </View>
   );
};

export default GoalCalendar;
