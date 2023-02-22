import React, {component} from "react";


import IconButton from '@mui/material/IconButton';
import PlayIcon from './../media/play_icon.svg'
import RunIcon from './../media/run_icon.svg'
import RefreshIcon from './../media/refresh_icon.svg'

function PlayButton(props) {

        return(
            <IconButton color="primary" aria-label="add to shopping cart" onClick={props.onClick}>
                <img src={PlayIcon} height="24px" width="24px"></img>
            </IconButton>
        )
}

function RunButton(props) {

    return(
        <IconButton color="primary" aria-label="add to shopping cart" onClick={props.onClick}>
            <img src={RunIcon} height="24px" width="24px"></img>
        </IconButton>
    )
}

function RefreshButton(props) {

    return(
        <IconButton color="primary" aria-label="add to shopping cart" onClick={props.onClick}>
            <img src={RefreshIcon} height="24px" width="24px"></img>
        </IconButton>
    )
}

export { PlayButton, RunButton, RefreshButton }