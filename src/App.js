import './App.css';
import {Header} from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';

function App() {
  return (
    <>
    <Header title="React practice"/>
    <div className="container my-3">
    <Todos/>
    </div>
    </>
  );
}

export default App;
