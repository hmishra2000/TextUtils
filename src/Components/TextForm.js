import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const[text, setText]= useState("");
    const upFunc= ()=>{
        let a= text.toUpperCase();
        setText(a);
        props.showAlert("success", "Converted into UpperCase");
    }
    const downFunc= ()=>{
        let a= text.toLowerCase();
        setText(a);
        props.showAlert("success", "Converted into LowerCase");
    }
    const changeOfState= (event)=>{
        setText(event.target.value)
    }
    const clear= ()=>{
        let a= ""
        setText(a);
        props.showAlert("success", "Screen Cleared");
    }

    const extraSpaces=()=>{
        let newT= text.split(/[ ]+/);
        setText(newT.join(" "));
    }

    const copy=()=>{
        let a= document.getElementById("myBox").select();
        navigator.clipboard.writeText(document.getElementById("myBox").value);
    }
    
    return (
        <div  className= "container" style={{color : props.mode==='light'? '#010214': '#137548'}}>
            <h1 className="mb-3"> {props.heading}</h1>
             <div className="mb-3">
             <textarea className="form-control" id="myBox" rows="10" value={text} onChange={changeOfState} style={{backgroundColor : props.mode==='light'? 'white': 'black', color : props.mode==='light'? 'black': 'white' }}> </textarea>
             <button className="btn btn-success my-1 mx-1" disabled={text.length===0} onClick={upFunc} > Convert to Uppercase</button>
             <button className="btn btn-success my-1 mx-1" disabled={text.length===0} onClick={downFunc}> Convert to Lowercase</button>
             <button className="btn btn-warning my-1 mx-1" disabled={text.length===0} onClick= {extraSpaces}> Remove Extra Spaces </button>
             <button className="btn btn-warning my-1 mx-1" disabled={text.length===0} onClick= {copy}> Copy </button>
             <button className="btn btn-danger my-1 mx-1" disabled={text.length===0} onClick= {clear}> Clear </button>

             </div>
            <div className="container my-3">
               <h2 > Text Summary</h2>
               <p > {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
               <p > {text.split(" ").filter((element)=>{return element.length!==0}).length  * 0.008} min read</p>
               <h2 > Preview </h2>
               <p > {text.length>0 ? text : "Enter something to preview"} </p>
            </div>

      
        </div>
    );
}
TextForm.propTypes ={
    heading : PropTypes.string
}
