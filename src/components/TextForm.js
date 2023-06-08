import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("UpperCase was Clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase ", "success");
    }
    
    const handleloClick=()=>{
      console.log("UpperCase was Clicked");
      let newText= text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase ", "success");
  }

  const handleClearClick=()=>{
    console.log("Clear Text");
    let newText= '';
    setText(newText);
    props.showAlert("Text was cleared ", "success");
}

        
    const handleOnChange=(event)=>{
        console.log("Onchange was Clicked"+text);
        setText(event.target.value);
    }

    const [text , setText]= useState('Enter the text here');
    //  text="new text"; //wrong way to change the state ....use settext fnction to do the same 
    //  setText("New Text");  //corect way
  return (
    <>
    
        <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',  color:props.mode==='dark'?'white':'black'}}id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
      <div className="container" my-5 style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} time taken </p>
        </div>  
    </>
  )
}
