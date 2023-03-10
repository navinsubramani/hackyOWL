import React, { useCallback, useEffect } from "react"
import './ChallengeScreen.css'

import { useDispatch } from "react-redux";
import {UPDATE_DISPLAY_SCREEN} from "./../nav-bar/NavBarslice"
import {gameChallengeInformation} from './ChallengeConstants'

import ChallengeCardList from "./../../component/ChallengeCardList"


function ChallengeScreen() {

    const gameListInformation = gameChallengeInformation

    const dispatch = useDispatch()

    useEffect(
        () => {
            // App Mount operations here
        },[]
    )

    const onChallengeClick = useCallback((event) => {
        dispatch(UPDATE_DISPLAY_SCREEN(event.target.title))
    })

    return (
        <div className="ChallengeListScreen">
            <p className="ChallengeListHeader">Game Challenges</p>

            <ChallengeCardList 
                onClick={onChallengeClick}
                cardListInformation={gameListInformation}
                />
            
            <p className="ChallengeListHeader">Programming Challenges</p>
            <ChallengeCardList 
                onClick={onChallengeClick}
                cardListInformation={gameListInformation}
                />

        </div>
    )
}

export default ChallengeScreen