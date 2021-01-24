// @ts-nocheck
import React from "react";
import { View } from "react-native";
import { Animated } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../ParamList";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

type ProfileScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   "GoalDashboard"
>;

type Props = {
   navigation: ProfileScreenNavigationProp;
   timeDuration: Number;
   startTimer: Boolean;
   goalId: String;
};

const RoundCountdownTimer = ({
   navigation,
   timeDuration,
   startTimer,
   goalId,
}: Props) => {
   return (
      <View style={{ alignItems: "center" }}>
         <CountdownCircleTimer
            isPlaying={startTimer}
            duration={timeDuration}
            colors={[["#39AE92"]]}
            onComplete={() => {
               // create a session here (post graphql query)
               navigation.navigate("BuddyView", { goalId: goalId });
            }}
         >
            {({ remainingTime, animatedColor }) => (
               <Animated.Text style={{ color: animatedColor }}>
                  {remainingTime}
               </Animated.Text>
            )}
         </CountdownCircleTimer>
      </View>
   );
};

export default RoundCountdownTimer;
