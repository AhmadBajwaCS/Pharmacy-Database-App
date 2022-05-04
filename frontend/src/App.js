import logo from "./logo.svg";
import "./App.css";
import HomePageButtons from "./components/HomePageButtons";
import AddNewCustomer from "./components/AddNewCustomer";
import LogPrescription from "./components/LogPrescription";
import Table from "./components/Table";
import { Route } from "react-router-dom";
import Quit from "./components/Quit";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <body>
      <div>
        <Route path="/" exact component={HomePageButtons} />
        <Route path="/new" exact component={AddNewCustomer} />
        <Route path="/log" exact component={LogPrescription} />
        <Route path="/quit" exact component={Quit} />

        <Route path="/search" exact render={() => <Table table="person" />} />
        <Route
          path="/tracker"
          exact
          render={() => <Table table="prescription_status" />}
        />
        <Route
          path="/drug-inventory"
          exact
          render={() => <Table table="drug_inventory" />}
        />
      </div>
    </body>
  );
}

export default App;
