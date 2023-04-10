import React from "react";
import { useDispatch } from "react-redux";
import { UPDATE_DISPLAY_SCREEN } from "./NavBarslice"
import { Link } from 'react-router-dom'

import './NavBar.css'
import hackyOWL from './../../media/hackyowl_icon.svg'
import {ChallengeButton} from './../../component/Custom-Buttons'


function NavBar(props) {

    const dispatch = useDispatch()

    const onHomeButtonChange = React.useCallback(() => {
        dispatch(UPDATE_DISPLAY_SCREEN(""))
    })

    const onChallengeButtonChange = React.useCallback(() => {
        dispatch(UPDATE_DISPLAY_SCREEN("challenges"))
    }) 

    return (
        <div className="NavBar">
            <Link to={"/"} style={{ textDecoration: 'none' }}>
                <img src={hackyOWL}
                    className="hackyowl" 
                    alt="Hacky OWL"
                    onClick={onHomeButtonChange}
                ></img>
            </Link>
            <Link to={"/challenges"} style={{ textDecoration: 'none' }}>
                <ChallengeButton 
                    onClick={onChallengeButtonChange}
                    />
            </Link>
        </div>
    )
}

export default NavBar