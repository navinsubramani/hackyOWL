import React from 'react';
import "./Logical_Op_UI.css"

import rockImg from './../../media/rock_icon.svg';
import paperImg from './../../media/paper_icon.svg';
import scissorsImg from './../../media/scissors_icon.svg';
import lizardImg from './../../media/spock_icon.svg';
import spockImg from './../../media/lizard_icon.svg';

const winColor = "#8bc34a"
const loseColor = "rgb(225,108,108)"
const drawColor = "#E6E62D"
const themeColor = "rgb(25,118,210)"
const whiteColor = "rgb(250,250,250)"

const RPSLSImage = ({ input, color }) => {
  const imageSrc = {
    rock: rockImg,
    paper: paperImg,
    scissors: scissorsImg,
    lizard: lizardImg,
    spock: spockImg,
  };

  if (imageSrc[input] === undefined) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '10rem',
          height: '10rem',
          backgroundColor: loseColor,
          borderRadius: '50%',
          margin: '5px',
          fontFamily: 'Courier New',
          fontSize: '2rem',
          color: whiteColor,
        }}>
          Error
      </div>
    )
  }

  else {
    return (
      <img
        src={imageSrc[input]}
        alt={input}
        style={{
          width: '10rem',
          height: '10rem',
          backgroundColor: color,
          borderRadius: '50%',
          margin: '5px',
        }}
      />)
  }
};

const Logical_Op_UI = ({ input, output }) => {
  
  const beats = (a, b) => {
      const winningCombinations = [
        ['rock', 'scissors'],
        ['rock', 'lizard'],
        ['paper', 'rock'],
        ['paper', 'spock'],
        ['scissors', 'paper'],
        ['scissors', 'lizard'],
        ['lizard', 'paper'],
        ['lizard', 'spock'],
        ['spock', 'rock'],
        ['spock', 'scissors'],
      ];
  
      return winningCombinations.some(([winner, loser]) => a === winner && b === loser);
    };

  if (input === undefined) {
    return <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Courier New',
        fontSize: '2rem',
        color: "rgb(250,250,250)",
      }}>Let's play...</div>
  }

  else if (input.botHand !== undefined && output !==undefined) {
    let input1 = input.botHand
    let input3 = output

    const input3Color = beats(input3, input1)
    ? winColor : beats(input1, input3)
    ? loseColor : drawColor

    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
          <RPSLSImage input={input1} color={themeColor} />
          <RPSLSImage input={input3} color={input3Color} />
      </div>
    );
  }

  else if (input.botHand1 !== undefined && input.botHand2 !== undefined && output !==undefined) {
    let input1 = input.botHand1
    let input2 = input.botHand2
    let input3 = output

    const input3Color = beats(input3, input1) && beats(input3, input2)
    ? winColor
    : (beats(input1, input3) || beats(input2, input3))
    ? loseColor
    : drawColor;
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <RPSLSImage input={input1} color={themeColor} />
          <RPSLSImage input={input2} color={themeColor} />
        </div>
        <div style={{ display: 'flex' }}>
          <RPSLSImage input={input3} color={input3Color} />
        </div>
      </div>
    );
  }

  else {
    return <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Courier New',
        fontSize: '2rem',
        color: "rgb(250,250,250)",
      }}></div>
  }

};

export default Logical_Op_UI;