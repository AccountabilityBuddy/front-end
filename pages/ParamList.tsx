type RootStackParamList = {
   Homepage: undefined;
   AddNewGoal: undefined;
   GoalTimer: { goalName: String; goalPeriod: string };
   GoalDashboard: {
      goalName: String;
      goalPeriod: string;
      goalID: String;
      goalStartDate: String;
      goalEndDate: String;
      buddyName: string | String;
   };
};

export default RootStackParamList;
