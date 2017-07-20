import { values } from 'lodash';


// export const selectAllProjects = ( projects ) => {
//     const arr=[];
//     values(projects).forEach(function(el){
//       arr.push(values(el));
//     });
//     return arr;
//
// };

 export const selectAllProjects = ( projects ) => values(projects);
// //this might not work.....
