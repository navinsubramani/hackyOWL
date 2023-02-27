import React, { useEffect } from 'react';
import './App.css';
import {useSelector} from 'react-redux'

// Import the top level module
import NavBar from './features/nav-bar/NavBar';
import HomeScreen from './features/home-screen/HomeScreen'
import TicTacToe from './challenges/tic-tac-toe/tictactoe'

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
      return <HomeScreen />
    }

    else if (displayScreen === "challenge_page") {
      console.log("Nav Page: TicTacToe")
      return <TicTacToe />
    }

    else {
      return <TicTacToe />
    }
  })
  
  

  return (
    <div className='App'>
      <NavBar />
      {returnDisplayScreen(displayScreen)}
    </div>
    );
}

export default App;
