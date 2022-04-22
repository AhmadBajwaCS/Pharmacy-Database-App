import logo from './logo.svg';
import './App.css';
import HomePageButtons from './components/HomePageButtons'
import AddNewCustomer from './components/AddNewCustomer'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

        <Route path="/" exact component={HomePageButtons} />
        <Route path="/new" exact component={AddNewCustomer} />

    </div>
  );
}

export default App;
