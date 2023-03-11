import React from "react";
import "./Array_1D_UI.css"

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
const inputColor = "rgb(250,250,250)"
const outputColor = "#8bc34a"

const numberInputLookup = [
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

    return (
        <div className="Array_1D_UI">
            <div className="Array1D_Input">
                {getInputJSX(input, 0)}
            </div>
            <div className="Array1D_Input">
                {getInputJSX(input, 1)}
            </div>
            <div className="Array1D_Output">
                {getOutputJSX(output, valid)}
            </div>
        </div>
    )
}

export default Array_1D_UI


function getInputJSX(input, inputIndex) {
    let JSX = []
    if(input !== undefined) {
        if (input.arr1 !== undefined && inputIndex === 0) {
            for (let value of input.arr1) {
                JSX.push(numberInputLookup[value-1])
            }
        }

        if (input.arr2 !== undefined && inputIndex === 1) {
            for (let value of input.arr2) {
                JSX.push(numberInputLookup[value-1])
            }
        }
    }
    return JSX
}

function getOutputJSX(output, valid) {
    let JSX = []
    if(output !== undefined) {
        if (valid) {
            if(typeof(output) === 'number') {
                JSX.push(numberOutputLookup[output-1])
            }
            else {
                for (let value of output) {
                    JSX.push(numberOutputLookup[value-1])
                }
            }
        }

        else {
            JSX = "ERROR"
        }
    }
    return JSX
}

