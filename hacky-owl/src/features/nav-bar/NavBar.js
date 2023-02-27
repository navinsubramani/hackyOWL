import React from "react";
import { useDispatch } from "react-redux";
import { UPDATE_DISPLAY_SCREEN } from "./NavBarslice"

import './NavBar.css'
import hackyOWL from './../../media/hackyowl_icon.svg'
import {ChallengeButton} from './../../component/Custom-Buttons'


function NavBar(props) {

    const dispatch = useDispatch()

    const onHomeButtonChange = React.useCallback(() => {
        dispatch(UPDATE_DISPLAY_SCREEN("home_page"))
    })

    const onChallengeButtonChange = React.useCallback(() => {
        dispatch(UPDATE_DISPLAY_SCREEN("challenge_page"))
    }) 

    return (
        <div className="NavBar">
            <img src={hackyOWL}
                 className="hackyowl" 
                 alt="Hacky OWL"
                 onClick={onHomeButtonChange}
                 
            ></img>
            <ChallengeButton 
                onClick={onChallengeButtonChange}
                />
        </div>
    )
}

export default NavBar