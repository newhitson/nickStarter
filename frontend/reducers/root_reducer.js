
import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ProjectsReducer from './projects_reducer';
import RewardsReducer from './rewards_reducer';



const RootReducer = combineReducers({
  projects: ProjectsReducer,
  session: SessionReducer,
  rewards: RewardsReducer
});

export default RootReducer;
