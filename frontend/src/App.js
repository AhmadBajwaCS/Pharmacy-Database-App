import logo from './logo.svg';
import './App.css';
import HomePageButtons from './components/HomePageButtons'
import AddNewCustomer from './components/AddNewCustomer'
import Table from './components/Table'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App-body">

        <Route path="/" exact component={HomePageButtons} />
        <Route path="/new" exact component={AddNewCustomer} />
        <Route path="/table" exact component={Table} />

    </div>
  );
}

export default App;
