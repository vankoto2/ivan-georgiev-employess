const mostTimeWorkedTogether = [];
const projects = [];
const finalProjects = [];
/**
 * calculateLongestTeemWork() returns array of the two workers who worked togeder on a project
 * and have lorked the longest period of time;
 * *calculate teamwork receive number and array;
 */
const calculateLongestTeemWork = (array) => {
  const tempArray = [...array];

  array.forEach((element) => {
    let acc = [];
    // console.log(element);
    // console.log(tempArray[0]);

    for (let i = 0; i < tempArray.length; i += 1) {
      // console.log(`element   ${element.projectID}   ${tempArray[i].projectID}    tempArray`);

      if (element.projectID === tempArray[i].projectID) {
        // console.log(acc);
        acc.push(tempArray[i]);
      }
    }
    projects.push(acc);
  });


  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].length <= 1) {
      projects.splice(i, 1);
    }
  }

let tempProjects = [...projects]
console.log(projects);
console.log(tempProjects[0]);

for (let i = 0; i < projects.length; i += 1) {
  if (projects[i].length <= 1) {
    projects.splice(i, 1);
  }  
}
  for (let i = 0; i < projects.length; i += 1) {

    finalProjects.push(projects[i]);

    for (let s = 0; s < tempProjects.length; s += 1) {
      // console.log("fsrst");
      // console.log(projects[i]);
      // console.log('second');
      // console.log( projects[s] );
      if (tempProjects[s] === projects[i]) {
        console.log('vliza');
        console.log(projects);
        // console.log(projects[i]);
        projects.splice(i, 1);

      }
    }
  };


  console.log('krai');
  console.log(finalProjects);

  // console.log(projects);


  projects.forEach((element) => {
    //   console.log(element);
    // console.log( element);
    if (element.length !== 2) {
      let first = element[0];
      let second = element[1];

      for (let i = 0; i < element.length; i += 1) {
        // if (element[i].daysWorked > first.daysWorked) {
        //   first = element[i];
        // }
      }
      for (let i = 0; i < element.length; i += 1) {
        // if (element[i].daysWorked > second.daysWorked || second.daysWorked < first) {
        //   second = element[i];
        // }
      }
      //   console.log(element)
      //   console.log(first)
      //   console.log(second)
    }
  });




  //   for (let i = 1; i < tempArray.length; i += 1) {
  //     const { emplID } = tempArray[i];
  //     const previousEmplID = tempArray[i - 1].emplID;
  //     const { projectID } = tempArray[i];
  //     const previousprojectID = tempArray[i - 1].projectID;
  //     const { daysWorked } = tempArray[i];
  //     const previousdaysWorked = tempArray[i - 1].daysWorked;

  //     if (projectID === previousprojectID) {
  //       projects.push(tempArray[i - 1]);
  //       console.log('vliza');
  //     }

  // console.log('line     ' + emplID + '    ID   ' + '     previousline    ' +previousEmplID);
  // console.log('line   ' + projectID + '   proj    ' + '     previousline    ' +previousprojectID);
  // console.log('line    ' + daysWorked + '    time    ' + '     previousline    ' +previousdaysWorked);
}

// console.log(projects);
// empProjTime.push({
//     emplID: readyData[0],
//     projectID: readyData[1],
//     daysWorked: totalWorkTime,
//   });

// console.log(tempArray[0].projectID);
// return(projectArray)
// };

// const blabla = (array) => {
//     let temp = []

//     for (let i = 1; i < projectArray.length; i++) {
//         const element = projectArray[i].projectId;
//         const element2 = projectArray[i-1].projectId;
//         if (element === element2) {
//             sameProjects.push(projectArray[i])
//         }
//     }
// }

export default (calculateLongestTeemWork);
