import logo from "./logo.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Home from "./Home";
import Restaurantes from "./Restaurantes";
import Exposiciones from "./Exposiciones";
import Footer from "./footer";

function App() {
  const [home, setHome] = useState(true);
  const [restaurantes, setRestaurantes] = useState(false);
  const [exposiciones, setExposiciones] = useState(false);

  const homeButton = () => {
    setHome(true);
    setRestaurantes(false);
    setExposiciones(false);
  };

  const restaurantesButton = () => {
    setHome(false);
    setRestaurantes(true);
    setExposiciones(false);
  };

  const exposicionesButton = () => {
    setHome(false);
    setRestaurantes(false);
    setExposiciones(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item href="" onClick={homeButton}>
              Inicio
            </Dropdown.Item>
            <Dropdown.Item href="" onClick={restaurantesButton}>
              Restaurantes
            </Dropdown.Item>
            <Dropdown.Item href="" onClick={exposicionesButton}>
              Exposiciones
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <img alt="logo" src={logo} />
      </header>
      <main className="App-main">
        {home && <Home />}
        {restaurantes && <Restaurantes />}
        {exposiciones && <Exposiciones />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
