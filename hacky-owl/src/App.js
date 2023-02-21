import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Import the top level module
import CodeEditRun from './features/code-edit-run/code-edit-run';

// Import the Execution engine related modules
import runPython from './features/code-edit-run/run-python';

function App() {

  useEffect(
    () => {
      const pythonObj = new runPython()
    },[]
  )
  

  return (
    <div>
      <CodeEditRun />
    </div>
    );
}

export default App;
