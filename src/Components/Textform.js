import React,{useState} from 'react'


export default function Textform(props) {
  const handleUpclick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  }
  const hnadleLoclick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
  }
  const handleclearclick=()=>{
    let newText=''
    setText(newText)
    props.showAlert("Text cleared!","success")
}
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard","success");
  }
  const handelextraspace=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("extra space has been removed","success")
  }
  
  const handleOnChange = (event)=>{
    setText(event.target.value) 
}
  const[text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1 className="mb-4">{props.heading}</h1>
    <div className="mb-3" >
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
    <button type="button" className="btn btn-primary mx-1 my-1" onClick={hnadleLoclick}>Convert to LowerCase</button>
    <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear text</button>
    <button type="button" className="btn btn-primary mx-1 my-1" onClick={handelextraspace}>Remove Extra space</button>
    <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>
        {text.split(/\s+/).filter((element)=>{
          return element.length!=0}).length} words and {text.length} charecters
      </p>
      <h2>Previews</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
