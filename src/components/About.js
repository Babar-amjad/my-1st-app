import React,{useState} from 'react'

export default function About(props) {
    const[text,settext]=useState("Enter the value")//The value is render in text props
const handleUpclick=()=>{
  console.log("upper case was clicked"+text)
   let newtext=text.toUpperCase();
   settext(newtext)
  }
  const handleLoclick=()=>{
    console.log("upper case was clicked"+text)
     let newtext=text.toLowerCase();
     settext(newtext)
    }
    const handleClearclick=()=>{
      console.log("upper case was clicked"+text)
       let newtext='';
       settext(newtext)
      }
     const handleonChange=(event)=>{
      console.log("on change")
      settext(event.target.value)
    }

  return (
    <>
    <div className='container'> 
      <div>
      <h1>{props.Heading}</h1>
      </div>
      <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8">{text}</textarea>
</div>
  <button className='btn btn-primary' onClick={handleUpclick}>Convert to upper case</button>
  <button className='btn btn-primary mx-2' onClick={handleLoclick}>convert to lower case</button>
  <button className='btn btn-primary mx-2' onClick={handleClearclick}>Clear text</button>
    </div>
    <div className='container'>
<h1>your text sumary</h1>
<p>{text.split(" "). length }is word and {text.length } is chrachter</p>
<p>{(0.08)*text.split(" "). length } Mintus read</p>
<h2>preview</h2>
<p>{text}</p>
    </div>
    </>
  )
}
