const templateCode_ifelse = {
    // Placeholders
    javascript: {
        starterCode: 
`function useIfElse(input)
{
    // input.botHand is the input string

    // return the output string
    return ""
}`,
        callCode: 
`useIfElse(input)`,
        exampleCode:
`function useIfElse(input)
{
    // input.botHand is the input string
    let result = ""
    if (input.botHand === "rock") { result = "paper" }
    else if (input.botHand === "paper") { result = "scissors" }
    else { result = "rock" }

    // return the output string
    return result
}`
        },
    python: {
        starterCode:
`def useIfElse(input):
    # input["botHand"]  is the input string

    # return the output string
    return ""`,
        callCode:
`useIfElse(input)`,
        exampleCode:
`def useIfElse(input):
    # input["botHand"] is the input string
    result = ""

    if input["botHand"] == "rock":
        result = "paper"
    elif input["botHand"] == "paper":
        result = "scissors"
    else:
        result = "rock"

    # return the output string
    return result
`
        }}

const templateCode_switch = {
    // Placeholders
    javascript: {
        starterCode: 
`function useSwitch(input)
{
    // input.botHand is the input string

    // return the output string
    return ""
}`,
        callCode: 
`useSwitch(input)`,
        exampleCode:
`function useSwitch(input)
{
    // input.botHand is the input string
    let result = ""
    switch (input.botHand) {
        case "rock":
            result = "paper";
            break;
        case "paper":
            result = "scissors";
            break;
        default:
            result = "rock";
            break;
    }

    // return the output string
    return result
}`
    },
    python: {
        starterCode:
`def useSwitch(input):
    # input["botHand"] is the input string

    # return the output string
    return ""`,
        callCode:
`useSwitch(input)`,
        exampleCode:
`def useSwitch(input):
    # input["botHand"] is the input string

    from match import match, case
    # 'match' statement introduced in Python 3.10
    # This might throw error in the web version of hackyOwl

    result = ""

    match input["botHand"]:
        case "rock":
            result = "paper"
        case "paper":
            result = "scissors"
        case "scissors":
            result = "rock"
        case _:
            result = "rock"

    # return the output string
    return result
`
    }
}
        
const templateCode_switch_full = {
    // Placeholders
    javascript: {
        starterCode: 
`function useSwitch(input)
{
    // input.botHand is the input string

    // return the output string
    return ""
}`,
        callCode: 
`useSwitch(input)`,
        exampleCode:
`function useSwitch(input)
{
    // input.botHand is the input string
    let result = ""
    switch (input.botHand) {
        case "rock":
            result = "paper";
            break;
        case "paper":
            result = "scissors";
            break;
        case "scissors":
            result = "rock";
            break;
        case "spock":
            result = "lizard";
            break;
        case "lizard":
            result = "rock";
            break;
        default:
            result = "rock";
            break;
    }

    // return the output string
    return result
}`
    },
    python: {
        starterCode:
`def useSwitch(input):
    # input["botHand"] is the input string

    # return the output string
    return ""`,
        callCode:
`useSwitch(input)`,
        exampleCode:
`def useSwitch(input):
    # input["botHand"] is the input string
    result = ""

    if input["botHand"] == "rock":
        result = "paper"
    elif input["botHand"] == "paper":
        result = "scissors"
    elif input["botHand"] == "scissors":
        result = "rock"
    elif input["botHand"] == "spock":
        result = "lizard"
    elif input["botHand"] == "lizard":
        result = "rock"
    else:
        result = "rock"

    # return the output string
    return result
`
    }
}

const templateCode_ternary = {
    // Placeholders
    javascript: {
        starterCode: 
`function useTernary(input)
{
    // input.botHand is the input string

    // return the output string
    return ""
}`,
        callCode: 
`useTernary(input)`,
        exampleCode:
`function useTernary(input)
{
    // input.botHand is the input string
    let result = input.botHand === "rock" ? "paper" :
                 input.botHand === "paper" ? "scissors" :
                 input.botHand === "scissors" ? "rock" :
                 "rock";

    // return the output string
    return result;
}`
    },
    python: {
        starterCode:
`def useTernary(input):
    # input["botHand"] is the input string

    # return the output string
    return ""`,
        callCode:
`useTernary(input)`,
        exampleCode:
`def useTernary(input):
    # input["botHand"] is the input string

    result = "paper" if input["botHand"] == "rock" else \
    ("scissors" if input["botHand"] == "paper" else \
    ("rock" if input["botHand"] == "scissors" else \
    ("rock")))

    # return the output string
    return result
`
    }
}

const templateCode_and_or_two_players = {
    // Placeholders
    javascript: {
        starterCode: 
`function useAndOr(input)
{
    // input.botHand1 and input.botHand2 are the input strings

    // return the output string
    return ""
}`,
        callCode: 
`useAndOr(input)`,
        exampleCode:
`function useAndOr(input)
{
    // input.botHand1 and input.botHand2 are the input strings
    const beats = {
        "rock": ["scissors", "lizard"],
        "paper": ["rock", "spock"],
        "scissors": ["paper", "lizard"],
        "spock": ["rock", "scissors"],
        "lizard": ["paper", "spock"]
    }

    const checkBeat = (key) => beats[key].includes(input.botHand1) && beats[key].includes(input.botHand2);
    const checkWinAndDraw = (key) => (beats[key].includes(input.botHand1) && (key === input.botHand2)) || 
                                     ((key === input.botHand1) && (beats[key].includes(input.botHand2)));

    let result = ["rock", "paper", "scissors", "spock", "lizard"].find(key => checkBeat(key)) ||
                 ["rock", "paper", "scissors", "spock", "lizard"].find(key => checkWinAndDraw(key)) ||
                 "";

    // return the output string
    return result;
}`
    },
    python: {
        starterCode:
`def useAndOr(input):
    # input["botHand1"] and input["botHand2"] are the input strings

    # return the output string
    return ""`,
        callCode:
`useAndOr(input)`,
        exampleCode:
`def useAndOr(input):
    beats = {
        "rock": ["scissors", "lizard"],
        "paper": ["rock", "spock"],
        "scissors": ["paper", "lizard"],
        "spock": ["rock", "scissors"],
        "lizard": ["paper", "spock"]
    }

    # input["botHand1"] and input["botHand2"] are the input strings

    def check_beat(key):
        return input["botHand1"] in beats[key] and input["botHand2"] in beats[key]

    def check_win_and_draw(key):
        return (input["botHand1"] in beats[key] and key == input["botHand2"]) or (key == input["botHand1"] and input["botHand2"] in beats[key])

    result = next((key for key in beats if check_beat(key)), None) or next((key for key in beats if check_win_and_draw(key)), None) or ""

    # return the output string
    return result
`
    }
}

export const logical_op_challengeList = [
    {
        challengeID: "ifelse",
        challengeInputFunction: () => {
            const inputListOption = ["rock", "scissors", "paper", "paper", "rock", "scissors", "rock", "scissors", "paper"]
            let randomElement = Math.round(Math.random()*8)
            let botHand = inputListOption[randomElement]
            return { botHand }
        },
        challengeOutputFunction: (input) => {
            return (input.botHand === "rock") ? "paper" : ( 
                (input.botHand === "paper") ? "scissors" : (
                    (input.botHand === "scissors") ? "rock" : undefined
                ))
        },
        challengeDescriptionFunction: () => {
            return (
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must return either "rock", "paper" or "scissors" based on the given input<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets a input as a string and the value is "rock", "paper" or "scissors".<br/>
                    3. Based on the given input, find the appropriate hand symbol that will beat it using If Else statements.<br/>
                    4. Rock beats Scissors. Scissors beats Paper. Paper beats Rock<br/>
                </div>
            )
        },
        challengeTemplateCode: templateCode_ifelse,
    },

    {
        challengeID: "switch-break",
        challengeInputFunction: () => {
            const inputListOption = ["rock", "scissors", "paper", "paper", "rock", "scissors", "rock", "scissors", "paper"]
            let randomElement = Math.round(Math.random()*8)
            let botHand = inputListOption[randomElement]
            return { botHand }
        },
        challengeOutputFunction: (input) => {
            return (input.botHand === "rock") ? "paper" : ( 
                (input.botHand === "paper") ? "scissors" : (
                    (input.botHand === "scissors") ? "rock" : undefined
                ))
        },
        challengeDescriptionFunction: () => {
            return (
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must return either "rock", "paper" or "scissors" based on the given input<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets a input as a string and the value is "rock", "paper" or "scissors".<br/>
                    3. Based on the given input, find the appropriate hand symbol that will beat it using the Switch (match) statements.<br/>
                    4. Rock beats Scissors. Scissors beats Paper. Paper beats Rock<br/>
                </div>
            )
        },
        challengeTemplateCode: templateCode_switch,
    },

    {
        challengeID: "ternary",
        challengeInputFunction: () => {
            const inputListOption = ["rock", "scissors", "paper", "paper", "rock", "scissors", "rock", "scissors", "paper"]
            let randomElement = Math.round(Math.random()*8)
            let botHand = inputListOption[randomElement]
            return { botHand }
        },
        challengeOutputFunction: (input) => {
            return (input.botHand === "rock") ? "paper" : ( 
                (input.botHand === "paper") ? "scissors" : (
                    (input.botHand === "scissors") ? "rock" : undefined
                ))
        },
        challengeDescriptionFunction: () => {
            return (
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must return either "rock", "paper" or "scissors" based on the given input<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets a input as a string and the value is "rock", "paper" or "scissors".<br/>
                    3. Based on the given input, find the appropriate hand symbol that will beat it using the ternary operator.<br/>
                    4. Rock beats Scissors. Scissors beats Paper. Paper beats Rock<br/>
                </div>
            )
        },
        challengeTemplateCode: templateCode_ternary,
    },

    {
        challengeID: "switch-break more",
        challengeInputFunction: () => {
            const inputListOption = ["rock", "scissors", "paper", "spock", "lizard", "paper", "rock", "scissors", "spock", "lizard", "rock", "scissors", "paper", "spock", "lizard"]
            let randomElement = Math.round(Math.random()*14)
            let botHand = inputListOption[randomElement]
            return { botHand }
        },
        challengeOutputFunction: (input) => {
            return (input.botHand === "rock") ? "paper" : ( 
                (input.botHand === "paper") ? "scissors" : (
                    (input.botHand === "scissors") ? "rock" : (
                        (input.botHand === "spock") ? "lizard" : (
                            (input.botHand === "lizard") ? "rock" : undefined
                ))))
        },
        challengeDescriptionFunction: () => {
            return (
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must return either "rock", "paper", "scissors", "spock", or "lizard" based on the given input<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets a input as a string and the value is "rock", "paper", "scissors", "spock", or "lizard".<br/>
                    3. Based on the given input, find the appropriate hand symbol that will beat it using switch (match) statements.<br/>
                    4. Rock crushes Scissors. Scissors cuts Paper. Paper covers rock, lizard beats spock, rock crushes lizard<br/>
                </div>)

            },
        challengeTemplateCode: templateCode_switch_full,
    },

    {
        challengeID: "and-or",
        challengeInputFunction: () => {
            const inputListOption = ["rock", "scissors", "paper", "spock", "lizard"]
            let randomElement1 = Math.round(Math.random()*4)
            let randomElement2 = Math.round(Math.random()*4)
            let botHand1 = inputListOption[randomElement1]
            let botHand2 = inputListOption[randomElement2]
            return { botHand1, botHand2 }
        },
        challengeOutputFunction: (input) => {
            const beats = {
                "rock": ["scissors", "lizard"],
                "paper": ["rock", "spock"],
                "scissors": ["paper", "lizard"],
                "spock": ["rock", "scissors"],
                "lizard": ["paper", "spock"]
            }
            let result = "";

            for (const key in beats) {
                if (beats[key].includes(input.botHand1) && beats[key].includes(input.botHand2)) {
                    result = key;
                    break;
                }
            }

            if (result === "") {
                for (const key in beats) {
                    if (beats[key].includes(input.botHand1) && (key===input.botHand2)) {
                        result = key;
                        break;
                    }
                    else if ((key===input.botHand1) && (beats[key].includes(input.botHand2))) {
                        result = key;
                        break;
                    }
                }
            }

            return result;
        },
        challengeDescriptionFunction: () => {
            return (
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must return a hand symbol that either wins both botHand1 and botHand2, or wins one and draws the other, based on the given input.<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets input as a dictionary with botHand1 and botHand2 as strings, and the values are "rock", "paper", "scissors", "spock", or "lizard".<br/>
                    3. Based on the given input, find the appropriate hand symbol that meets the win/draw condition using AND/OR operators and array functions WITHOUT using ifelse, for, switch.<br/>
                    4. Rock crushes Scissors. Scissors cuts Paper. Paper covers Rock. Rock crushes Lizard. Lizard poisons Spock. Spock smashes Scissors. Scissors decapitates Lizard. Lizard eats Paper. Paper disproves Spock. Spock vaporizes Rock.<br/>
                </div>
            )
        },
        challengeTemplateCode: templateCode_and_or_two_players,
    },

]


export const find_index_challengeList = (challengeID) => {
    const challengeIDList = logical_op_challengeList.map(element => element.challengeID)
    const index = challengeIDList.indexOf(challengeID)
    return index
}

export const find_next_index_challengeList = (challengeID) => {
    let next_index = find_index_challengeList(challengeID) + 1
    if (logical_op_challengeList.length <= next_index) {
        next_index = 0
    }
    
    return next_index
}

export const find_previous_index_challengeList = (challengeID) => {
    let previous_index = find_index_challengeList(challengeID) - 1
    if (previous_index < 0) {
        previous_index = logical_op_challengeList.length - 1
    }
    
    return previous_index
}