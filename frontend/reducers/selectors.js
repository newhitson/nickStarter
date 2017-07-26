import { values } from 'lodash';



  export const selectAllProjects = ( projects ) => {
    return values(projects.projects);
  };

  export const selectAllRewards = ( rewards ) => {
    return values(rewards.rewards);
  };
  // just rewards
