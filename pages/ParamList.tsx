type RootStackParamList = {
   Homepage: undefined;
   AddNewGoal: undefined;
   GoalTimer: { goalName: String; goalPeriod: string; goalId: String | string };
   GoalDashboard: {
      goalName: String;
      goalPeriod: string;
      goalID: String;
      goalStartDate: String;
      goalEndDate: String;
      buddyName: string | String;
      sessions: Array<string>;
   };
   BuddyView: { goalId: string | String };
   Sessions: { userId: string };
};

export default RootStackParamList;
