const templateCode_append = {
    // Placeholders
    javascript: {
        starterCode: 
`function arrayAppend(input)
{
    // input.arr1 is the first array information
    // input.arr2 is the second array information

    // return the appended array
    return []
}`,
        callCode: 
`arrayAppend(input)`,
        exampleCode:
`function arrayAppend(input)
{
    // input.arr1 is the first array information
    // input.arr2 is the second array information
    const result = input.arr1.concat(input.arr2)

    // return the appended array
    return result
}`
        },
    python: {
        starterCode:
`def arrayAppend(input):
    # input["arr1"] is the first array information
    # input["arr2"] is the second array information

    # return the appended array
    return []`,
        callCode:
`arrayAppend(input)`,
        exampleCode:
`def arrayAppend(input):
    # input["arr1"] is the first array information
    # input["arr2"] is the second array information
    result = input["arr1"] + input["arr2"]

    # return the appended array
    return result
`
        }}

const templateCode_count = {
    // Placeholders
    javascript: {
        starterCode: 
`function arrayCount(input)
{
    // input.arr1 is the first array information

    // return the Count value
    return 0
}`,
        callCode: 
`arrayCount(input)`,
        exampleCode:
`function arrayCount(input)
{
    // input.arr1 is the first array information
    const result = input.arr1.length

    // return the Count value
    return result
}`
        },
    python: {
        starterCode:
`def arrayCount(input):
    # input["arr1"] is the first array information

    # return the Count value
    return 0`,
        callCode:
`arrayCount(input)`,
        exampleCode:
`def arrayCount(input):
    # input["arr1"] is the first array information
    result = len(input["arr1"])

    # return the Count value
    return result
`
        }}

export const array_1D_challengeList = [
    {
        challengeID: "append",
        challengeInputFunction: () => {
            let arrSize = Math.round(Math.random()*4)
            arrSize = arrSize ? arrSize : 1
            let arr1 = new Array(arrSize).fill(0)
            arr1 = arr1.map(()=>{ 
                let element = Math.round(Math.random()*9)
                return element ? element : 1
             })

             arrSize = Math.round(Math.random()*4)
             arrSize = arrSize ? arrSize : 1
             let arr2 = new Array(arrSize).fill(0)
             arr2 = arr2.map(()=>{ 
                 let element = Math.round(Math.random()*9)
                 return element ? element : 1
              })
              return {arr1, arr2}
        },
        challengeOutputFunction: (input) => {
            return input.arr1.concat(input.arr2)
        },
        challengeDescriptionFunction: () => {
            return (
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must append the two input arrays and return the result<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets two array inputs. Append the input array and return a single array with the appended value<br/>
                </div>
            )
        },
        challengeTemplateCode: templateCode_append,
    },

    {
        challengeID: "count",
        challengeInputFunction: () => {
            let arrSize = Math.round(Math.random()*9)
            arrSize = arrSize ? arrSize : 1
            let arr1 = new Array(arrSize).fill(0)
            arr1 = arr1.map(()=>{ 
                let element = Math.round(Math.random()*9)
                return element ? element : 1
             })
              return {arr1}
        },
        challengeOutputFunction: (input) => {
            return input.arr1.length
        },
        challengeDescriptionFunction: () => {},
        challengeTemplateCode: templateCode_count,

    },

    {
        challengeID: "indexOf",
        challengeInputFunction: () => {},
        challengeOutputFunction: () => {},
        challengeDescriptionFunction: () => {},
        challengeTemplateCode: {},

    },

]


export const find_index_challengeList = (challengeID) => {
    const challengeIDList = array_1D_challengeList.map(element => element.challengeID)
    const index = challengeIDList.indexOf(challengeID)
    return index
}

export const find_next_index_challengeList = (challengeID) => {
    let next_index = find_index_challengeList(challengeID) + 1
    if (array_1D_challengeList.length <= next_index) {
        next_index = 0
    }
    
    return next_index
}

export const find_previous_index_challengeList = (challengeID) => {
    let previous_index = find_index_challengeList(challengeID) - 1
    if (previous_index < 0) {
        previous_index = array_1D_challengeList.length - 1
    }
    
    return previous_index
}