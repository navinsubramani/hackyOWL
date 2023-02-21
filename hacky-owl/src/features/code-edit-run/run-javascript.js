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

export default runJavascript