import React,{useState} from 'react'

export const Todos = () => {
  const [text,setText]=useState("");
  const Ucase=()=>{
    setText(text.toUpperCase());
  }
  const Lcase=()=>{
    setText(text.toLowerCase());
    console.log(text)
  }
  const clearTxt=()=>{
    setText("");
  }
  const Save=()=>{
    if(localStorage.getItem('Str')===null){
      localStorage.setItem('Str','[]');
    }
    let str=JSON.parse(localStorage.getItem('Str'));
    str.push(text);
    localStorage.setItem('Str',JSON.stringify(str));
    console.log("Saved");
  }
  const Clear=()=>{
    localStorage.clear();
  }
  const Changed=(e)=>{
    setText(e.target.value);
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
</>)
}
