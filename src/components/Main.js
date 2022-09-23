import React, {useState}from 'react'

export default function Main(props) {
    const Uppercase = ()=>{
       setText(text.toUpperCase());        
    } 
    const lowercase = () => {
        setText(text.toLowerCase());
    }
    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
    const copy = () => {

        navigator.clipboard.writeText(text)
    }
    const [text ,setText] = useState('')
    
  return (
    <div className='main-content'>     
<div className="mb-2 my-5">
  <label htmlFor="exampleFormControlTextarea1" className="form-label "><h2 className='text-center'>enter your text here</h2></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={Uppercase} >convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={lowercase}>convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={copy} id='copyToClipboard'>copy text</button>
<div className="container my-3">
    <h3>Your Text summary</h3>
    <p><b> {text.split(' ').length}</b> words and <b>{text.length}</b> characters </p>
    <p>average time to read {text.split(' ').length*0.010 } minutes</p>
</div>
    </div>
  )
}

