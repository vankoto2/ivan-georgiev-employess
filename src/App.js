import React from 'react';
import './App.css';
import { InputFile, addFile } from './components/Input';

function App() {
  return (
    <div className="App">
      <InputFile add={addFile} />
    </div>
  );
}

export default App;
