import React from 'react';
import readyData from '../helpers/ReedData';
import timeWorked from '../helpers/CalculeteTimeWorked';

const InputFile = (test) => (
  <div className="input-container">
    <form className="upload-file-form">
      <h1>Add File</h1>
      <input type="file" name="file" onChange={test.add} />
    </form>

  </div>
);

const addFile = (e) => {
  e.preventDefault();
  const fileList = e.target.files;
  const fileReader = new FileReader();
  fileReader.onload = () => {
    const lines = fileReader.result.split('\n');
    timeWorked(readyData(lines));
  };
  fileReader.readAsText(fileList[0]);
};

export { InputFile, addFile };
