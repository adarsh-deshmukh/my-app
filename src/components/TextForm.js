import { useState } from "react"

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log("clicked handleUpClick =>" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase', 'success');
    }
    const handleLowClick = () => {
        // console.log("clicked handleUpClick =>" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'warning');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log("clicked handleOnChange");
    }

    const handleCopy = (event) => {
        navigator.clipboard.writeText(text)
            .then(() => console.log("Copied!"));
        props.showAlert('Text copied successfully', 'info');
    }
    let newStyleColor = props.mode === 'dark' ? 'white' : ''

    let newText = [];
    text.split(" ").forEach(element => {
        if (element.length > 0) {
            newText.push(element);
        }
    });

    let textString = newText.join(" ");


    return (
        <>
            <div className="container">
                <h2 style={{ color: newStyleColor }}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea style={{ color: newStyleColor, backgroundColor: props.mode === 'dark' ? props.darkColor : '' }} placeholder="Enter your text here..." className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8" />
                </div>
                <button className="btn btn-success" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-danger" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-2" style={{ color: newStyleColor }}>
                <div className="row">
                    <div className="col-md-6">
                        <h1>your text summary</h1>
                        <p>{textString === "" ? 0 : textString.split(" ").length} words and {textString.length} characters</p>
                        <p>{text.length * 0.008} minutes required to read</p>
                    </div>
                    <div className="col-md-6">
                        <h1>Preview</h1>
                        <textarea className="form-control" rows="5" style={{ color: newStyleColor, backgroundColor: props.mode === 'dark' ? props.darkColor : '' }} value={text.length > 0 ? text : 'Enter something to preview here..'} readOnly />
                    </div>
                </div>
            </div >
        </>
    )
}

