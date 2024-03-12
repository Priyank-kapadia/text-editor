import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Text(props) {
    const [text, setText] = useState('');
    const handleclick=()=>{
        setText(text.toUpperCase());
        props.showAlert("success", "Uppercase clicked");
    }
    const handleOnchange=(e)=>{
        setText(e.target.value);
    }
    const handleclear=()=>{
      setText('');
      props.showAlert("success", "Cleared");
  }
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
       <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder='Enter the text' value={text} onChange={handleOnchange} rows={7} /><br/>
        <Button variant="primary mx-2" onClick={handleclick}>Convert</Button>
        <Button variant="primary mx-2" onClick={handleclear}>Clear</Button>
      </Form.Group>
    </div>
    <div className='container'>
        <h2>Your word summary</h2>
        <p>Words:{text.split(' ').filter((e)=>{return e.length!==0}).length }  Characters:{text.length}</p>
        <p>Time:{0.008 * text.split(' ').length}</p>
    </div>
    <br/>
    </>
  )
}

export default Text
