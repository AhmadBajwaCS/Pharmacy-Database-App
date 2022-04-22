import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="App-body">
       
        
        <Route path="/" render={() => {
          return (
             <h1>Pharmacy DB  &emsp;  &ensp;    </h1>
        <button className="button">Search the database</button>
        <button className="button">Log prescription</button>
        <button className="button">Track active prescriptions</button>
        <button className="button">View drug inventory</button>
        <button className="button">Add new customer</button>
        <button className="button">Quit</button>
          );
        }} />
        

      </div>
    </div>
  );
}

export default App;
