// @ts-nocheck
import React from "react";
import { View } from "react-native";
import { Animated } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

type Props = {
   timeDuration: Number;
   startTimer: Boolean;
};

const RoundCountdownTimer = ({ timeDuration, startTimer }: Props) => {
   return (
      <View style={{ alignItems: "center" }}>
         <CountdownCircleTimer
            isPlaying={startTimer}
            duration={timeDuration}
            colors={[["#39AE92"]]}
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
