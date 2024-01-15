import React,{useState}from "react";
import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
export default function Textform(props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const handleClsClick=()=>{
        setText("")
        props.showAlert("Your text is cleared!","success")
    }
    
    const handleCopyClick=()=>{
         navigator.clipboard.writeText(text);
         props.showAlert("Your text is copied to clipboard!","success")
    }
    const handlecpyExtraspaces=()=>{
         let newText=text.split(/[\s+/]+/).filter(Boolean).join(" ");
         setText(newText)
         navigator.clipboard.writeText(newText);
         props.showAlert("Your text is copied to clipboard without extra spaces!","success")
    }
    const handleExtraspaces=()=>{
      let newText=text.split(/[\s+/]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces are removed!","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const[text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-2">{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
        </label>
        <Grammarly clientId={props.demoClientId}>
        <GrammarlyEditorPlugin>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}
          placeholder="Enter the Text here"
          id="myBox"
          rows="8"
        ></textarea>
      </GrammarlyEditorPlugin>
        </Grammarly>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClsClick}>Clear Text</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handlecpyExtraspaces}>Copy text by Removeing Extra spaces</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>  
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
      {/* or we can use this text ? text.split(" ").length : 0 */}
      </p>
      <p>{0.008* text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
          </>
  );
}
