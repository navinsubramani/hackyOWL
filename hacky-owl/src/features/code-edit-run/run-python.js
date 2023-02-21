// In the index.html add a head script as, <script src="https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js"></script>

async function initializePyodide() {
    let pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/" });
    return pyodide;
};

async function evaluatePython(code, pyodideReadyPromise) {
    let pyodide = await pyodideReadyPromise;
    try {
        console.log(code)
        let output = pyodide.runPython(code);
        return output
        } 
    catch (err) {
        console.log(err)
        return err
        }
};

let instance;

class runPython {

    constructor() {
        if(instance) {
            //console.log("runPython Object already created..")
            this.pyodideReadyPromise = instance.pyodideReadyPromise
        }
        else {
            //console.log("First time", instance)
            this.pyodideReadyPromise = initializePyodide();
            instance = this;
        }     
    }

    evaluate(code) {
        return evaluatePython(code, this.pyodideReadyPromise)
    }
}

const singletonrunPython = Object.freeze(new runPython());
export default runPython