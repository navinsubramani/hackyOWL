import React, { useEffect } from 'react';
import './App.css';
import {useSelector} from 'react-redux'

// Import the top level module
import NavBar from './features/nav-bar/NavBar';
import HomeScreen from './features/home-screen/HomeScreen'
import TicTacToe from './challenges/tic-tac-toe/tictactoe_container'
import ChallengeScreen from './features/challenges-screen/ChallengeScreen'

// Import the Execution engine related modules
import executeProgram from './features/code-edit-run/run-program';

function App() {

  const displayScreen = useSelector((state) => state.navbar.displayScreen)

  useEffect(
    () => {
      const exeObj = new executeProgram()
    },[]
  )

  const returnDisplayScreen = React.useCallback((displayScreen) => {
    if (displayScreen === "home_page") {
      
    }

    else if (displayScreen === "challenge_page") {
      console.log("Challenge Page")
      return <ChallengeScreen />
    }

    else if (displayScreen === "tictactoe") {
      return <TicTacToe />
    }

    else {
      return <ChallengeScreen />
    }
  })
  
  if (displayScreen === "home_page") {
    return (
      <div>
        <HomeScreen />
      </div>
      );
  }

  else {
    return (
      <div className='App'>
        <NavBar />
        {returnDisplayScreen(displayScreen)}
      </div>
      );
  }
}

export default App;
