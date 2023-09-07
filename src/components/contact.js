import React, { useState } from 'react'


export default function Contact(props) {
  const handleUpClick=()=>{
   // console.log("uppercase was clicked"+ text) not requied writen just understanding
    let newtext=text.toUpperCase();
    settext(newtext)
  }
  const handleLoClick=()=>{
    // console.log("uppercase was clicked"+ text) not requied writen just understanding
     let newtext=text.toLocaleLowerCase();
     settext(newtext)}
  const handleonchnage=(event)=>{
   // console.log("on change");
    settext(event.target.value);
}
    const handleClearClick=()=>{
      let newtext=' ';
     settext(newtext)
    }
    
    
  
    const [text, settext]=useState('')
  return (
    
      <>
      <div className='Contanier'>
   <h1 className='container'>{props.Heading} </h1>
   
     <div className="mb-3">
        <label for="my-box" classname="form-label">example bellow</label>
        <textarea className='form-control' id='my-box' onChange={handleonchnage} value={text} rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick} mx-2>convert to uppercase</button>
        <button className='btn btn-secondary' onClick={handleLoClick}mx-2>convert to lowercase</button>
        <button className='btn btn-primary' onClick={handleClearClick}> clear text</button>
      </div>
    </div>
  <div className='container' mb-5>
  <h1>Our text summary</h1>
  <p> {text.split( " ").length}  word and chrachter is  {text.length}</p>
  <p>{0.008 *text.split( " ").length}</p>
  <h2>preview</h2>
  <p>{text}</p>
  </div>

</>
  )
}
