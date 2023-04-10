let instance;

class executeProgram {
    constructor() {
        //console.log("construct executeProgram", instance)
        if(instance) {
            this.python = instance.python
            this.javascript = instance.javascript
            //console.log("Update: Retrieved Initialized compliers")

        }
        else {
            // Constructor function
            //console.log("Start: All Web compliers getting initialized")
            this.python = new runPython()
            this.javascript = new runJavascript()

            // Initialize before this & also update the equavalent code in if case
            instance = this
            //console.log("End: All Web compliers got initialized")
        }

    }

    evaluateCode(lang, code, toDoFuction) {
        switch(lang) {
            case "javascript":
                {
                    let output = this.javascript.evaluate(code)
                    toDoFuction(output)
                    break
                } 
            
            case "python":
                {
                    let output = this.python.evaluate(code)
                    console.log("Run Python Code: ", output)
                    output.then(op => toDoFuction(op))
                    .catch((err)=>toDoFuction(err))
                    break
                }
            
            default:
                toDoFuction("unsopported language")
        }

    }

    evaluateCodeExternally(lang, code, callerCode, inputJSON, toDoFuction) {
        switch(lang) {
            case "javascript":
                {
                    code = code + "\n" + "let input='" + inputJSON + "'" + "\n" + "input=JSON.parse(input);" + "\n" + callerCode
                    //console.log(code)
                    let output = this.javascript.evaluate(code)
                    toDoFuction(output)
                    break
                } 
            
            case "python":
                {   
                    code = code + "\nimport json" + "\ninput='" + inputJSON + "'" + "\ninput=json.loads(input)" + "\n" + callerCode
                    let output = this.python.evaluate(code)
                    output.then(op => toDoFuction(op))
                    .catch((err)=>toDoFuction(err))
                    break
                }
            
            default:
                toDoFuction("unsopported language")
        }

    }

}



// In the index.html add a head script as, <script src="https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js"></script>
async function initializePyodide() {
    let pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.0/full/" });
    return pyodide;
};

async function evaluatePython(code, pyodideReadyPromise) {
    let pyodide = await pyodideReadyPromise;
    try {
        console.log(code)
        let output = pyodide.runPython(code);
        console.log(output)
            try {
                const convertedOutput = output.toJs({depth : 1})
                //console.log(output, convertedOutput)
                return convertedOutput
            }
            catch(err) {
                console.log(err)
                return output
            }        
        } 
    catch (err) {
        console.log(err)
        return err
        }
};



class runPython {

    constructor() {
            this.pyodideReadyPromise = initializePyodide();
    }

    evaluate(code) {
        return evaluatePython(code, this.pyodideReadyPromise)
    }
}

class runJavascript {

    evaluate(code) {
        try {
            return eval(code)
        }
        catch(err) {
            return err
        }
    }
}

export {runJavascript, runPython } 
export default executeProgram