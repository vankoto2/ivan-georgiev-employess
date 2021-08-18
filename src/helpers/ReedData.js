/**
 * readyData() returns an array;
 *  converts the data to be easy to use;
 */
const readyData = (lines) => {
  const arrayInfo = [];
  if (lines) {
    lines.forEach((element) => {
      arrayInfo.push(element.replace('"', '').replace('"', '').split(', '));
    });
  }
  return (arrayInfo);
};
export default readyData;
