import logo from './logo.svg';
import './App.css';
import HomePageButtons from './components/HomePageButtons'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

        <Route path="/" exact component={HomePageButtons} />
    </div>
  );
}

export default App;
