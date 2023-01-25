import React, { useState } from "react";

export default function Form(props) {
    const uppercasebtn = () => {
        // console.log('convert to upper case ' + Text)
        let newText = Text.toUpperCase()
        setText(newText)
        props.showalert("Converted to Uppercase", "succees")
    }
    const lowercasebtn = () => {
        // console.log('convert to upper case ' + Text)
        let newText = Text.toLowerCase()
        setText(newText)
        props.showalert("Converted to Lowercase", "succees")

    }
    const clearbtn = () => {
        // console.log('convert to upper case ' + Text)
        let newText = '';
        setText(newText) 
        props.showalert("Clear All text from the Box", "danger")

    }
    const handleonchange = (event) => {
        // console.log('handle on the changee ')
        setText(event.target.value)
    }
    const [Text, setText] = useState("")

    return (
        <>
            <div className="container" style={{color: props.mode === "dark"?"white":"black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode ==="dark"? "gray": "white", color:props.mode ==="dark"? "white" : "dark"}} onChange={handleonchange} id="mybox" rows="8" value={Text} />
                    <button className="btn btn-primary my-3 mx-1" onClick={uppercasebtn}>convert to uppercase</button>
                    <button className="btn btn-primary my-3 mx-1 " onClick={lowercasebtn}>convert to lowercase</button>
                    <button className="btn btn-primary my-3 mx-1 " onClick={clearbtn}>Clear Text</button>
                </div>   
            </div>
            <div className="container my-2" style={{color: props.mode === "dark"?"white":"black" }}>
                <h1>Your Text Summary </h1>
                <p>{Text.split(" ").length} words and {Text.length} character</p>
                <p>{0.008 * Text.split(" ").length } Minutes   to read</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Enter something to preview here"}</p>
            </div>
        </>
    )
}