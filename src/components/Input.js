import React from 'react';
import readyData from '../helpers/ReedData';
import timeWorked from '../helpers/CalculeteTimeWorked';

const InputFile = (props) => (
  <div className="input-container">
    <form className="upload-file-form">
      <h3>Add File</h3>
      <input type="file" name="file" onChange={props.add} />
    </form>

  </div>
);

const addFile = (e) => {
  const fileList = e.target.files;
  const fileReader = new FileReader();
  fileReader.onload = () => {
    const lines = fileReader.result.split('\n');
    timeWorked(readyData(lines));
  };
  fileReader.readAsText(fileList[0]);
};

export { InputFile, addFile };
