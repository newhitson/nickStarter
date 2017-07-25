import { values } from 'lodash';



  export const selectAllProjects = ( projects ) => {
    return values(projects.projects);

  };
