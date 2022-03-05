import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { DropdownButton, Dropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item href="#/action-1">Inicio</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Restaurantes</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Exposiciones</Dropdown.Item>
          </DropdownButton>
        </div>
        <img src={logo} />
      </header>
    </div>
  );
}

export default App;
