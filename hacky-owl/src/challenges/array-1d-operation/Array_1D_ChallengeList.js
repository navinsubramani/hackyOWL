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
    // input.arr is the first array information

    // return the Count value
    return 0
}`,
        callCode: 
`arrayCount(input)`,
        exampleCode:
`function arrayCount(input)
{
    // input.arr is the first array information
    const result = input.arr.length

    // return the Count value
    return result
}`
        },
    python: {
        starterCode:
`def arrayCount(input):
    # input["arr"] is the first array information

    # return the Count value
    return 0`,
        callCode:
`arrayCount(input)`,
        exampleCode:
`def arrayCount(input):
    # input["arr"] is the first array information
    result = len(input["arr"])

    # return the Count value
    return result
`
        }}

const templateCode_indexOf = {
    // Placeholders
    javascript: {
        starterCode: 
`function arrayIndexOf(input)
{
    // input.arr is the first array information
    // input.elementToFind is the element's index that needs to be found

    // return the index of the element
    return 0
}`,
        callCode: 
`arrayIndexOf(input)`,
        exampleCode:
`function arrayIndexOf(input)
{
    // input.arr is the first array information
    // input.elementToFind is the element's index that needs to be found
    const result = input.arr.indexOf(input.elementToFind)

    // return the index of the element
    return result
}`
        },
    python: {
        starterCode:
`def arrayIndexOf(input):
    # input["arr"] is the first array information
    # input["elementToFind"] is the element's index that needs to be found

    # return the index of the element
    return 0`,
        callCode:
`arrayIndexOf(input)`,
        exampleCode:
`def arrayIndexOf(input):
    # input["arr"] is the first array information
    # input["elementToFind"] is the element's index that needs to be found
    result = input["arr"].index(input["elementToFind"])

    # return the index of the element
    return result
`
        }}


const templateCode_insert = {
    // Placeholders
    javascript: {
        starterCode: 
`function arrayInsert(input)
{
    // input.arr is the array information
    // input.insertIndex is the index at which element should be inserted
    // input.element is the element that needs to be inserted

    // return the new array with inserted element
    return []
}`,
        callCode: 
`arrayInsert(input)`,
        exampleCode:
`function arrayInsert(input)
{
    // input.arr is the array information
    // input.insertIndex is the index at which element should be inserted
    // input.element is the element that needs to be inserted
    input.arr.splice(input.insertIndex, 0, input.element)

    // return the new array with inserted element
    return [...input.arr]
}`
        },
    python: {
        starterCode:
`def arrayInsert(input):
    # input["arr"] is the array information
    # input["insertIndex"] is the index at which element should be inserted
    # input["element"] is the element that needs to be inserted

    # return the new array with inserted element
    return []`,
        callCode:
`arrayInsert(input)`,
        exampleCode:
`def arrayInsert(input):
    # input["arr"] is the array information
    # input["insertIndex"] is the index at which element should be inserted
    # input["element"] is the element that needs to be inserted
    input["arr"].insert(input["insertIndex"], input["element"])

    # return the new array with inserted element
    return input["arr"]
`
        }}

const templateCode_remove = {
    // Placeholders
    javascript: {
        starterCode: 
`function arrayRemove(input)
{
    // input.arr is the array information
    // input.removeElement is the first instance of the element that needs to be removed from the array

    // return the new array with removed element
    return []
}`,
        callCode: 
`arrayRemove(input)`,
        exampleCode:
`function arrayRemove(input)
{
    // input.arr is the array information
    // input.removeElement is the first instance of the element that needs to be removed from the array
    const index = input.arr.indexOf(input.removeElement);
    if (index > -1) { // only splice array when item is found
        input.arr.splice(index, 1); // 2nd parameter means remove one item only
    }

    // return the new array with removed element
    return input.arr
}`
        },
    python: {
        starterCode:
`def arrayRemove(input):
    # input["arr"] is the array information
    # input["removeElement"] is the first instance of the element that needs to be removed from the array

    # return the new array with removed element
    return []`,
        callCode:
`arrayRemove(input)`,
        exampleCode:
`def arrayRemove(input):
    # input["arr"] is the array information
    # input["removeElement"] is the first instance of the element that needs to be removed from the array
    input["arr"].remove(input["removeElement"])

    # return the new array with removed element
    return input["arr"]
`
        }}

const templateCode_reverse = {
    // Placeholders
    javascript: {
        starterCode: 
`function arrayReverse(input)
{
    // input.arr is the array information

    // return the new reversed array
    return []
}`,
        callCode: 
`arrayReverse(input)`,
        exampleCode:
`function arrayReverse(input)
{
    // input.arr is the array information

    // return the new reversed array
    return input.arr.reverse()
}`
        },
    python: {
        starterCode:
`def arrayReverse(input):
    # input["arr"] is the array information

    # return the new reversed array
    return []`,
        callCode:
`arrayReverse(input)`,
        exampleCode:
`def arrayReverse(input):
    # input["arr"] is the array information
    input["arr"].reverse()

    # return the new reversed array
    return input["arr"]
`
        }}

const templateCode_sort = {
    // Placeholders
    javascript: {
        starterCode: 
`function arraySort(input)
{
    // input.arr is the array information

    // return the new sorted array
    return []
}`,
        callCode: 
`arraySort(input)`,
        exampleCode:
`function arraySort(input)
{
    // input.arr is the array information

    // return the new sorted array
    // Note: This program only sorts the array in ascending order
    return input.arr.sort()
}`
        },
    python: {
        starterCode:
`def arraySort(input):
    # input["arr"] is the array information

    # return the new sorted array
    return []`,
        callCode:
`arraySort(input)`,
        exampleCode:
`def arraySort(input):
    # input["arr"] is the array information
    input["arr"].sort()

    # return the new sorted array
    # Note: This program only sorts the array in ascending order
    return input["arr"]
`
        }}

const templateCode_filter = {
    // Placeholders
    javascript: {
        starterCode: 
`function arrayFilter(input)
{
    // input.arr is the array information
    // input.filterThreshold is the value below which all numbers should be removed from the array

    // return the filtered array
    return []
}`,
        callCode: 
`arrayFilter(input)`,
        exampleCode:
`function arrayFilter(input)
{
    // input.arr is the array information
    // input.filterThreshold is the value below which all numbers should be removed from the array

    // return the filtered array
    return input.arr.filter((element) => element >= input.filterThreshold)
}`
        },
    python: {
        starterCode:
`def arrayFilter(input):
    # input["arr"] is the array information
    # input["filterThreshold"] is the value below which all numbers should be removed from the array

    # return the filtered array
    return []`,
        callCode:
`arrayFilter(input)`,
        exampleCode:
`def arrayFilter(input):
    # input["arr"] is the array information
    # input["filterThreshold"] is the value below which all numbers should be removed from the array

    def filter_function(element):
        return element >= input["filterThreshold"]
    
    # return the filtered array
    return list(filter(filter_function, input["arr"]))
`
        }}

const templateCode_map = {
    // Placeholders
    javascript: {
        starterCode: 
`function arrayMap(input)
{
    // input.arr is the array information
    // If the element is ODD, add 1 to it. If the element is EVEN, leave it as it
    // Use Map function

    // return the mapped new array
    return []
}`,
        callCode: 
`arrayMap(input)`,
        exampleCode:
`function arrayMap(input)
{
    // input.arr is the array information
    // If the element is ODD, add 1 to it. If the element is EVEN, leave it as it
    // Use Map function

    // return the mapped new array
    return input.arr.map((element) => (element%2===0)? element: element+1)
}`
        },
    python: {
        starterCode:
`def arrayMap(input):
    # input["arr"] is the array information
    # If the element is ODD, add 1 to it. If the element is EVEN, leave it as it
    # Use Map function

    # return the mapped new array
    return []`,
        callCode:
`arrayMap(input)`,
        exampleCode:
`def arrayMap(input):
    # input["arr"] is the array information
    # If the element is ODD, add 1 to it. If the element is EVEN, leave it as it
    # Use Map function

    def map_function(element):
        return element if element%2==0 else element+1
    
    # return the mapped new array
    return list(map(map_function, input["arr"]))
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
            let arr = new Array(arrSize).fill(0)
            arr = arr.map(()=>{ 
                let element = Math.round(Math.random()*9)
                return element ? element : 1
             })
              return {arr}
        },
        challengeOutputFunction: (input) => {
            return input.arr.length
        },
        challengeDescriptionFunction: () => {
            return (
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must count the number of elements in the array and return the result<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets 1 array input. Count the input array element and return a single element value<br/>
                </div>
            )
        },
        challengeTemplateCode: templateCode_count,

    },

    {
        challengeID: "indexOf",
        challengeInputFunction: () => {
            let arrSize = Math.round(Math.random()*9)
            arrSize = arrSize ? arrSize : 1
            let elementIndex = Math.round(Math.random()*(arrSize-1))
            let arr = new Array(arrSize).fill(0)
            arr = arr.map(()=>{ 
                let element = Math.round(Math.random()*9)
                return element ? element : 1
             })
            let elementToFind = arr[elementIndex]
            return {arr, elementToFind}
        },
        challengeOutputFunction: (input) => {
            return input.arr.indexOf(input.elementToFind)
        },
        challengeDescriptionFunction: () => {
            return (
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must find the index of the given element in the input array and return the result<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets 1 array input<br/>
                    3. Find the index of the give element. Index of first instance of the given element should be found and returned<br/>
                    4. Return value should be single lement value<br/>
                </div>
            )
        },
        challengeTemplateCode: templateCode_indexOf,

    },

    {
        challengeID: "insert",
        challengeInputFunction: () => {
            let arrSize = Math.round(Math.random()*9)
            arrSize = arrSize ? arrSize : 1
            let arr = new Array(arrSize).fill(0)
            arr = arr.map(()=>{ 
                let i = Math.round(Math.random()*9)
                return i ? i : 1
             })

             let insertIndex = Math.round(Math.random()*(arrSize-1))

            let element =  Math.round(Math.random()*9)
            element = element ? element : 1
            return {arr, insertIndex, element}
        },
        challengeOutputFunction: (input) => {
            const newArr = [...input.arr]
            newArr.splice(input.insertIndex, 0, input.element)
            return newArr
        },
        challengeDescriptionFunction: () => {
            return (
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must insert the input element into the input array at the given input index and return the new array<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets 1 array input, element to be inserted and the index of the insert location<br/>
                    3. Insert the input element into the input array at the given input index<br/>
                    4. Return value should be the new array with the inserted element<br/>
                </div>
            )
        },
        challengeTemplateCode: templateCode_insert,

    },

    {
        challengeID: "remove",
        challengeInputFunction: () => {
            let arrSize = Math.round(Math.random()*9)
            arrSize = arrSize ? arrSize : 1
            let arr = new Array(arrSize).fill(0)
            arr = arr.map(()=>{ 
                let i = Math.round(Math.random()*9)
                return i ? i : 1
             })

            let removeIndex = Math.round(Math.random()*(arrSize-1))

            let removeElement =  arr[removeIndex]
            return {arr, removeElement}
        },
        challengeOutputFunction: (input) => {
            const newArr = [...input.arr]
            const index = newArr.indexOf(input.removeElement);
            if (index > -1) { // only splice array when item is found
                newArr.splice(index, 1); // 2nd parameter means remove one item only
            }
            return newArr
        },
        challengeDescriptionFunction: () => {
            return(
            <div>
                <strong>Challenge</strong><br/>
                Your program must remove the input element from the input array and return the new array<br/>
                <br/>
                <strong>Program Rule</strong><br/>
                1. Implement your main code within the given function definition<br/>
                2. The function gets 1 array input, element to be removed<br/>
                3. Remove the first instance of input element from the input array<br/>
                4. Return value should be the new array with the removed element<br/>
            </div>
            )
        },
        challengeTemplateCode: templateCode_remove,

    },

    {
        challengeID: "reverse",
        challengeInputFunction: () => {
            let arrSize = Math.round(Math.random()*9)
            arrSize = arrSize ? arrSize : 1
            let arr = new Array(arrSize).fill(0)
            arr = arr.map(()=>{ 
                let i = Math.round(Math.random()*9)
                return i ? i : 1
             })
            return {arr}
        },
        challengeOutputFunction: (input) => {
            let newArr = [...input.arr]
            return newArr.reverse()
        },
        challengeDescriptionFunction: () => {
            return(
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must reverse the input array and return the new reversed array<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets 1 array input<br/>
                    3. Reverse the input array and return the new array with the removed element<br/>
                </div>
                )
        },
        challengeTemplateCode: templateCode_reverse,

    },

    {
        challengeID: "sort",
        challengeInputFunction: () => {
            let arrSize = Math.round(Math.random()*9)
            arrSize = arrSize ? arrSize : 1
            let arr = new Array(arrSize).fill(0)
            arr = arr.map(()=>{ 
                let i = Math.round(Math.random()*9)
                return i ? i : 1
             })
            
            let sortOrder = (Math.random() > 0.5)? "ascending":"descending"
            return {arr, sortOrder}
        },
        challengeOutputFunction: (input) => {
            let newArr = [...input.arr]
            if (input.sortOrder === "ascending") {
                return newArr.sort()
            }
            else {
                return newArr.sort().reverse()
            }
        },
        challengeDescriptionFunction: () => {
            return(
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must sort the input array based on the sort order and return the new array<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets 1 array input and the sort order as either "ascending" or "descending"<br/>
                    3. Sort the input array based on the sort order input and return the new sorted array<br/>
                </div>
                )
        },
        challengeTemplateCode: templateCode_sort,

    },

    {
        challengeID: "filter",
        challengeInputFunction: () => {
            let arrSize = Math.round(Math.random()*9)
            arrSize = arrSize ? arrSize : 1
            let arr = new Array(arrSize).fill(0)
            arr = arr.map(()=>{ 
                let i = Math.round(Math.random()*9)
                return i ? i : 1
             })

            let filterThreshold = Math.round(Math.random()*6)
            filterThreshold = filterThreshold? filterThreshold : 1
            return {arr, filterThreshold}
        },
        challengeOutputFunction: (input) => {
            let newArr = [...input.arr]
            newArr = newArr.filter((element) => element >= input.filterThreshold)
            return newArr
        },
        challengeDescriptionFunction: () => {
            return(
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must filter the input array based on the filter threshold and return the new array with only elements that are equal to or higher than the filter threshold<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets 1 array input and the filter threshold value<br/>
                    3. Filter the input array by remove all the elements less than the given filter threshold<br/>
                    4. The filtered array elements should retain the order similar to the input array<br/>
                    5. Return the filtered array<br/>
                </div>
                )
        },
        challengeTemplateCode: templateCode_filter,

    },

    {
        challengeID: "map",
        challengeInputFunction: () => {
            let arrSize = Math.round(Math.random()*9)
            arrSize = arrSize ? arrSize : 1
            let arr = new Array(arrSize).fill(0)
            arr = arr.map(()=>{ 
                let i = Math.round(Math.random()*8)
                return i ? i : 1
             })
            return {arr}
        },
        challengeOutputFunction: (input) => {
            let newArr = [...input.arr]
            newArr = newArr.map((element) => (element%2===0)? element: element+1)
            return newArr
        },
        challengeDescriptionFunction: () => {
            return(
                <div>
                    <strong>Challenge</strong><br/>
                    Your program must map the input array in such a way that all odd element should be incremented by 1 and return the new array<br/>
                    <br/>
                    <strong>Program Rule</strong><br/>
                    1. Implement your main code within the given function definition<br/>
                    2. The function gets 1 array input<br/>
                    3. Map the input array to a new array where all ODD elements are incremented by 1 and EVEN elements should be retained as such<br/>
                    4. The mapped array elements should retain the order similar to the input array<br/>
                    5. Return the mapped array<br/>
                </div>
                )
        },
        challengeTemplateCode: templateCode_map,
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