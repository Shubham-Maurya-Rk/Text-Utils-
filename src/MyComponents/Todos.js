import React, { useState } from 'react'

export const Todos = ({list, setlist}) => {
  const [text, setText] = useState("");
  const Ucase = () => {
    setText(text.toUpperCase());
  }
  const Lcase = () => {
    setText(text.toLowerCase());
  }
  const clearTxt = () => {
    setText("");
  }
  const Save = () => {
    setlist(prev=>[...prev, text]);
  }
  const Clear = () => {
    localStorage.clear();
    setlist([]);
  }
  const Changed = (e) => {
    setText(e.target.value);
  }
  const Copy = (e) => {
    navigator.clipboard.writeText(text);
    alert('Copied to Clipboard')
  }
  return (<>
    <h1>Welcome to React Practice</h1>
    <div className="mb-3">
      <textarea className="form-control" id="TxtArea" rows="10" value={text} placeholder="Enter text here.." onChange={Changed}></textarea>
    </div>
    <button type="button" className="btn btn-primary" onClick={Ucase}>Ucase</button>
    <button type="button" className="btn btn-primary mx-2" onClick={Lcase}>Lcase</button>
    <button type="button" className="btn btn-primary" onClick={clearTxt}>Clear txt</button>
    <button type="button" className="btn btn-primary mx-2" onClick={Save}>Save</button>
    <button type="button" className="btn btn-primary mx-2" onClick={Clear}>Clear Strg</button>
    <button type="button" className="btn btn-primary mx-2" onClick={Copy}>Copy</button>
  </>)
}
