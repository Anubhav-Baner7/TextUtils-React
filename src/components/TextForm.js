import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=() =>
    {
        let newText=text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted To UpperCase","success");
    }
    const handleLoClick=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick=()=>
    {
        let newText="";
        setText(newText);
        // props.showAlert("Cleared Text","success");
    }
    const handleNumbersClick=()=>
    {
        let newText=text.replace(/[0-9]/g, '');;
        setText(newText);
        // props.showAlert("Removed Numbers","success");

    }
    const handleExtraSpaceClick=()=>
    {
        let newText=text.trim().split(/ +/).join(' ');
        setText(newText);
        // props.showAlert("Removed extra spaces","success");
    }
    const handleOnChange=(event) =>
    {
        setText(event.target.value);
    }
    const [text, setText]=useState(''); 
    return (
        <>
        <div className="container" style={{color: props.mode==='light'? 'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'? 'white':'grey',color:props.mode==='light'? 'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleNumbersClick}>Remove Numbers</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaceClick}>Remove ExtraSpaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='light'? 'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} charcters</p>
            <p>{0.008*text.split(" ").length}minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}
