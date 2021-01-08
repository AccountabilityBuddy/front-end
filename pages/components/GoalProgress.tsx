// @ts-nocheck
import React from "react";
import { View } from "react-native";
import { Animated } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

type Props = {
   timeDuration: Number;
   startTimer: Boolean;
};

const UrgeWithPleasureComponent = ({ timeDuration, startTimer }: Props) => {
   return (
      <View style={{ alignItems: "center" }}>
         <CountdownCircleTimer
            isPlaying={startTimer}
            duration={timeDuration}
            colors={[
               ["#004777", 0.4],
               ["#F7B801", 0.4],
               ["#A30000", 0.2],
            ]}
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

export default UrgeWithPleasureComponent;
