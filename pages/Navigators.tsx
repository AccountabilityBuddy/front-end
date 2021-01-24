import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./Homepage";
import Goal from "./AddNewGoal";
import GoalDashboard from "./GoalDashboard";
import Sessions from "./Sessions";
import BuddyView from "./BuddyView";
import GoalTimer from "./GoalTimer";
import Login from "./Login";
import LoggedInPage from "./LoggedInPage";
import GoalsResponsible from "./components/GoalsResponsible";

const Stack = createStackNavigator();

type homeProps = {
   userId: string;
};

type sessionProps = {
   userId: string;
};

type goalsResponsibleProps = {
   userId: string;
};

type addNewGoalProps = {
   userId: string;
};

const HomepageNavigator = ({ userId }: homeProps) => {
   return (
      <Stack.Navigator initialRouteName="Homepage">
         <Stack.Screen
            name="Homepage"
            children={() => <Homepage userId={userId} />}
            options={{
               headerTitle: "Accountability Buddy",
            }}
         />
         <Stack.Screen
            name="GoalDashboard"
            component={GoalDashboard}
            initialParams={{
               goalName: "Goal",
               goalPeriod: "5",
            }}
            options={{
               headerTitle: "Goal Dashboard",
            }}
         />
         <Stack.Screen
            name="GoalTimer"
            component={GoalTimer}
            initialParams={{
               goalName: "Goal",
               goalPeriod: "5",
            }}
            options={{
               headerTitle: "Goal Timer",
            }}
         />
         <Stack.Screen
            name="BuddyView"
            component={BuddyView}
            initialParams={{}}
            options={{
               headerTitle: "Goal Dashboard",
            }}
         />
      </Stack.Navigator>
   );
};

const GoalsResponsibleNavigator = ({ userId }: goalsResponsibleProps) => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Goals Responsible"
            children={() => <GoalsResponsible userId={userId} />}
         />
      </Stack.Navigator>
   );
};

const AddNewGoalNavigator = ({ userId }: addNewGoalProps) => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Add New Goal"
            children={() => <GoalsResponsible userId={userId} />}
            options={{
               headerTitle: "Add Goal",
            }}
         />
      </Stack.Navigator>
   );
};

// const LoginNavigator = () => {
//    return (
//       <Stack.Navigator initialRouteName="Login">
//          {/* <Stack.Screen
//             name="Login"
//             children={() => <Login />}
//             options={{
//                headerShown: false,
//             }}
//          /> */}
//          <Stack.Screen
//             name="LoggedInPage"
//             children={() => <LoggedInPage />}
//             options={{
//                headerTitle: "Accountability Buddy",
//             }}
//          />
//       </Stack.Navigator>
//    );
// };

const SessionsNavigator = ({ userId }: sessionProps) => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Sessions"
            children={() => <Sessions userId={userId} />}
            options={{
               headerTitle: "Unapproved Sessions",
            }}
         />
      </Stack.Navigator>
   );
};

export {
   HomepageNavigator,
   AddNewGoalNavigator,
   GoalsResponsibleNavigator,
   SessionsNavigator,
};
