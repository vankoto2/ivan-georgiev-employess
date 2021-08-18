import React from 'react';
import './App.css';
import { InputFile, addFile } from './components/Input';
import DataGridDemo from './components/output/Output'

function App() {
  return (
    <div className="App">
      <h1>Search for the two team members that worked longest on a sigle projects together</h1>
      <InputFile add={addFile} />
      <div id="answer" />
    </div>
  );
}

export default App;
