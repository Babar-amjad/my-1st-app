import React from 'react'


const Help=(props)=>{
    const clickhandle=()=>{
        alert("you clicked me")
        const clickhandle=()=>{
            alert('you well playing')
            
        }
        }

    return(
    <div className='container'>
    <button className="btn btn-primary my-3"onClick={clickhandle}>clicked</button>
      <button className='btn btn-secondary mx-3'onClick={clickhandle}  >plying</button>
    <div>
        <p>{props.name}</p>
    </div>
    </div>
    )
};
export default Help;
