import calculateLongestTeemWork from './CalculateLongestTeemWork';
/**
 * timeWorked() returns the number of days worked for evry inline;
 * converts the data to days worked;
 */
const timeWorked = (allReadyData) => {
  // empProjTime array of emplID, ProjectID and days spend on the project
  const empProjTime = [];
  allReadyData.forEach((readyData) => {
    if (readyData.length >= 4) {
      const d0 = readyData[2];
      let d1 = readyData[3];

      // if input date = NULL make to todays date
      if (d1 !== undefined) {
        if (d1.length <= 7) {
          d1 = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        }
      }

      const msPerDay = 8.64e7;

      // Copy dates so we don't mess them up
      const x0 = new Date(d0);
      const x1 = new Date(d1);

      // Set to noon - avoid DST (Daylight Saving Time) errors
      x0.setHours(12, 0, 0);
      x1.setHours(12, 0, 0);

      // Round to remove daylight saving errors
      const totalWorkTime = Math.round((x1 - x0) / msPerDay);
      empProjTime.push({
        emplID: readyData[0],
        projectID: readyData[1],
        daysWorked: totalWorkTime,
      });
    }
  });
  calculateLongestTeemWork(empProjTime);
};

export default (timeWorked);
