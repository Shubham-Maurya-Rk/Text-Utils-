import './App.css';
import { Header } from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import List from './MyComponents/List';
import { useEffect, useState } from 'react';

function App() {
  const [list, setlist] = useState(JSON.parse(localStorage.getItem('Str')) || []);
  const [filtertext, setfiltertext] = useState('')
  useEffect(() => {
    localStorage.setItem('Str', JSON.stringify(list));
  }, [list]);


  return (
    <>
      <Header title="TextUtils" setfiltertext={setfiltertext}/>
      <div className="container my-3">
        <Todos list={list} setlist={setlist} />
        <List list={list} setlist={setlist} filtertext={filtertext}/>
      </div>
    </>
  );
}

export default App;
