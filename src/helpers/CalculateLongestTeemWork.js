const test = [];
const projects = [];

/**
 *calculateLongestTeemWork() returns object firstEmplID, secondEmplID, projectID, daysWorkedTogether
 * the two workers who worked togeder on a project
 */
const calculateLongestTeemWork = (array) => {
  const tempArray = [...array];

  array.forEach((element) => {
    const acc = [];
    for (let i = 0; i < tempArray.length; i += 1) {
      if (element.projectID === tempArray[i].projectID) {
        acc.push(tempArray[i]);
      }
    }
    projects.push(acc);
  });

  /**
   * removeSingles() returns array of objects
   * Removes all single projects
   */
  function removeSingles(params) {
    return params.length > 1;
  }

  const filteredProjects = projects.sort().filter(removeSingles);

  // Removes all duplicates
  filteredProjects.forEach((c) => {
    filteredProjects.forEach((element) => {
      if (element === c) {
        const i = filteredProjects.indexOf(c);
        filteredProjects.splice(i, 1);
      }
    });
  });

  // filters the two most worked persons at evry project
  filteredProjects.forEach((element) => {
    let first = element[0];
    let second;

    for (let i = 0; i < element.length; i += 1) {
      if (element[i].daysWorked > first.daysWorked) {
        first = element[i];
      }
    }

    element.splice(element.indexOf(first), 1);

    element.forEach((e) => {
      second = e;
      if (e.daysWorked > second.daysWorked) {
        second = e;
      }
    });

    for (let i = 0; i < element.length; i += 1) {
      if (element[i].daysWorked !== undefined) {
        if (element[i].daysWorked > second.daysWorked) {
          second = element[i];
        }
      }
    }
    test.push(first);
    test.push(second);
  });

  let tesp = 0;
  const temp = [];
  for (let i = 1; i < test.length; i += 2) {
    tesp = Number(test[i].daysWorked) + Number(test[i - 1].daysWorked);
    temp.push([test[i], test[i - 1], tesp]);
  }
  temp.sort((b, a) => a[2] - b[2]);

  const mostTimeWorkedTogether = temp[0];

  const answer = {
    firstEmplID: mostTimeWorkedTogether[0].emplID,
    secondEmplID: mostTimeWorkedTogether[1].emplID,
    projectID: mostTimeWorkedTogether[0].projectID,
    daysWorkedTogether: mostTimeWorkedTogether[0].daysWorked + mostTimeWorkedTogether[1].daysWorked,
  };

  console.table(answer);
  return answer;
  
};
export default (calculateLongestTeemWork);
