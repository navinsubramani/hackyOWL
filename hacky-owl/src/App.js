import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Import the top level module
import TicTacToe from './challenges/tic-tac-toe/tictactoe'

// Import the Execution engine related modules
import executeProgram from './features/code-edit-run/run-program';

function App() {

  useEffect(
    () => {
      const exeObj = new executeProgram()
    },[]
  )
  

  return (
    <div>
      <TicTacToe />
    </div>
    );
}

export default App;
