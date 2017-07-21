import { values } from 'lodash';


// export const selectAllProjects = ( projects ) => {
//     const arr=[];
//     values(projects.projects).forEach(function(el){
//       arr.push(values(el));
//     });
//     return arr;
// };
//removes errors from projects


 // export const selectAllProjects = ( projects ) => values(projects);
  export const selectAllProjects = ( projects ) => {
    return values(projects.projects);

  };
// //this might not work.....
