import React from 'react';
import './App.css';
import { InputFile, addFile } from './components/Input';

function App() {
  return (
    <div className="App">
      <h1>Search for the two team members that worked longest on a sigle projects together</h1>

      <InputFile add={addFile} />
    </div>
  );
}

export default App;
