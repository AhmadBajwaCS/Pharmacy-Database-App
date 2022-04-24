import logo from './logo.svg';
import './App.css';
import HomePageButtons from './components/HomePageButtons'
import AddNewCustomer from './components/AddNewCustomer'
import LogPrescription from './components/LogPrescription'
import Table from './components/Table'
import {Route} from 'react-router-dom'

function App() {
  return (
      <body>

          <div>

              <Route path="/" exact component={HomePageButtons} />
              <Route path="/new" exact component={AddNewCustomer} />
              <Route path="/log" exact component={LogPrescription} />
              <Route path="/table" exact component={Table} />

          </div>


      </body>
  );
}

export default App;
