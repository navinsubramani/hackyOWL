import React, { useEffect } from 'react';
import './App.css';
import {useSelector} from 'react-redux'

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import the top level module
import NavBar from './features/nav-bar/NavBar';
import HomeScreen from './features/home-screen/HomeScreen'
import TicTacToe from './challenges/tic-tac-toe/tictactoe_container'
import ChallengeScreen from './features/challenges-screen/ChallengeScreen'
import ArrayIDS from './challenges/array-1d-operation/Array_1D_container'
import Loops from './challenges/loop-operation/Loop_container'
import LogicalOperations from './challenges/logical-operation/Logical_Op_container'

// Import the Execution engine related modules
import executeProgram from './features/code-edit-run/run-program';

function App() {
  const displayScreen = useSelector((state) => state.navbar.displayScreen)
  console.log("Current location is: " + location.pathname + " & Current Screen name is: " + displayScreen)

  useEffect(
    () => {
      const exeObj = new executeProgram()
    },[]
  )

  if (location.pathname === "/") {
    return(
      <Router>
        <HomeScreen />
      </Router>
    )
  }

  else {
    return (
      <Router>
          <div className='App'>
            <NavBar />
            <Routes>
              <Route path="/challenges" Component={ChallengeScreen}/>
              <Route path="/tictactoe" Component={TicTacToe}/>
              <Route path="/array1d" Component={ArrayIDS}/>
              <Route path="/conditional" Component={LogicalOperations}/>
              <Route path="/loops" Component={Loops}/>
            </Routes>
          </div>
      </Router>
      );
  }
  }

export default App;
