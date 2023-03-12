import React from "react";
import "./Array_1D_UI.css"

import ZeroWhite from './../../media/zero_white.png'
import ZeroGreen from './../../media/zero_green.png'

import Filter1TwoToneIcon from '@mui/icons-material/Filter1TwoTone';
import Filter2TwoToneIcon from '@mui/icons-material/Filter2TwoTone';
import Filter3TwoToneIcon from '@mui/icons-material/Filter3TwoTone';
import Filter4TwoToneIcon from '@mui/icons-material/Filter4TwoTone';
import Filter5TwoToneIcon from '@mui/icons-material/Filter5TwoTone';
import Filter6TwoToneIcon from '@mui/icons-material/Filter6TwoTone';
import Filter7TwoToneIcon from '@mui/icons-material/Filter7TwoTone';
import Filter8TwoToneIcon from '@mui/icons-material/Filter8TwoTone';
import Filter9TwoToneIcon from '@mui/icons-material/Filter9TwoTone';

const w = "3rem"
const h = "3rem"
const img_w = "5.5rem"
const img_h = "5.5rem"
const inputColor = "rgb(250,250,250)"
const outputColor = "#8bc34a"

const numberInputLookup = [
    <img src={ZeroWhite} style={{"width": img_w, "height":img_h}}/>,
    <Filter1TwoToneIcon style={{"color": inputColor, "width": w, "height":h}}/>,
    <Filter2TwoToneIcon style={{"color": inputColor, "width": w, "height":h}}/>,
    <Filter3TwoToneIcon style={{"color": inputColor, "width": w, "height":h}}/>,
    <Filter4TwoToneIcon style={{"color": inputColor, "width": w, "height":h}}/>,
    <Filter5TwoToneIcon style={{"color": inputColor, "width": w, "height":h}}/>,
    <Filter6TwoToneIcon style={{"color": inputColor, "width": w, "height":h}}/>,
    <Filter7TwoToneIcon style={{"color": inputColor, "width": w, "height":h}}/>,
    <Filter8TwoToneIcon style={{"color": inputColor, "width": w, "height":h}}/>,
    <Filter9TwoToneIcon style={{"color": inputColor, "width": w, "height":h}}/>
]

const numberOutputLookup = [
    <img src={ZeroGreen} style={{"width": img_w, "height":img_h}}/>,
    <Filter1TwoToneIcon style={{"color": outputColor, "width": w, "height":h}}/>,
    <Filter2TwoToneIcon style={{"color": outputColor, "width": w, "height":h}}/>,
    <Filter3TwoToneIcon style={{"color": outputColor, "width": w, "height":h}}/>,
    <Filter4TwoToneIcon style={{"color": outputColor, "width": w, "height":h}}/>,
    <Filter5TwoToneIcon style={{"color": outputColor, "width": w, "height":h}}/>,
    <Filter6TwoToneIcon style={{"color": outputColor, "width": w, "height":h}}/>,
    <Filter7TwoToneIcon style={{"color": outputColor, "width": w, "height":h}}/>,
    <Filter8TwoToneIcon style={{"color": outputColor, "width": w, "height":h}}/>,
    <Filter9TwoToneIcon style={{"color": outputColor, "width": w, "height":h}}/>
]

function Array_1D_UI(props) {
    const input = props.input
    const output = props.output
    const valid = props.valid
    const challengeID = props.challenge

    return (
        <div className="Array_1D_UI">
            <div className="Array1D_Input">
                {getInput1JSX(input, challengeID)}
            </div>
            <div className="Array1D_Input">
                {getInput2JSX(input, challengeID)}
            </div>
            <div className="Array1D_Output">
                {getOutputJSX(output, valid)}
            </div>
        </div>
    )
}

export default Array_1D_UI


function getInput1JSX(input, challengeID) {
    let JSX = []

    if(input !== undefined) {

        switch(challengeID) {
            case 'append':
                JSX.push("Append ")
                break;
            case 'count':
                JSX.push("Count ")
                break;
            case 'reverse':
                JSX.push("Reverse ")
                break;
            case 'sort':
                JSX.push("Sort ")
                break;
            default:
                break;
        }

        if (input.arr1 !== undefined) {
            for (let value of input.arr1) {
                JSX.push(numberInputLookup[value])
            }
        }

        if (input.arr !== undefined) {
            for (let value of input.arr) {
                JSX.push(numberInputLookup[value])
            }
        }
    }
    return JSX
}

function getInput2JSX(input, challengeID) {
    let JSX = []
    if(input !== undefined) {

        switch(challengeID) {
            case 'map':
                JSX.push("If ODD number, Add 1")
                break;
            default:
                break;
        }

        if (input.arr2 !== undefined) {
            JSX.push("And")
            JSX.push(<br></br>)
            for (let value of input.arr2) {
                JSX.push(numberInputLookup[value])
            }
        }

        if (input.elementToFind !== undefined) {
            let value = input.elementToFind
            JSX.push("index of ")
            JSX.push(numberInputLookup[value])
        }

        if (input.element !== undefined) {
            let value = input.element
            JSX.push(numberInputLookup[value])
        }

        if (input.insertIndex !== undefined) {
            let value = input.insertIndex
            JSX.push("at index")
            JSX.push(numberInputLookup[value])
        }

        if (input.removeElement !== undefined) {
            let value = input.removeElement
            JSX.push("Remove ")
            JSX.push(numberInputLookup[value])
        }

        if (input.sortOrder !== undefined) {
            JSX.push("In " + input.sortOrder + " order")
        }

        if (input.filterThreshold !== undefined) {
            let value = input.filterThreshold
            JSX.push("Filter values < ")
            JSX.push(numberInputLookup[value])
        }


    }
    return JSX
}

function getOutputJSX(output, valid) {
    let JSX = []
    if(output !== undefined) {
        if (valid) {
            if(typeof(output) === 'number') {
                JSX.push(numberOutputLookup[output])
            }
            else {
                for (let value of output) {
                    JSX.push(numberOutputLookup[value])
                }
            }
        }

        else {
            JSX = "ERROR"
        }
    }
    return JSX
}

