import logo from "./logo.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import Home from "./Home";
import Restaurantes from "./Restaurantes";
import Exposiciones from "./Exposiciones";

function App() {
  const [home, setHome] = useState(true);
  const [restaurantes, setRestaurantes] = useState(false);
  const [exposiciones, setExposiciones] = useState(false);

  const homeButton = (e) => {
    setHome(true);
    setRestaurantes(false);
    setExposiciones(false);
  };

  const restaurantesButton = (e) => {
    setHome(false);
    setRestaurantes(true);
    setExposiciones(false);
  };

  const exposicionesButton = (e) => {
    setHome(false);
    setRestaurantes(false);
    setExposiciones(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item href="" onClick={(e) => homeButton()}>
              Inicio
            </Dropdown.Item>
            <Dropdown.Item href="" onClick={(e) => restaurantesButton()}>
              Restaurantes
            </Dropdown.Item>
            <Dropdown.Item href="" onClick={(e) => exposicionesButton()}>
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
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <hr className="clearfix w-100 pb-0" />
            <div className="mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled d-flex justify-content-around">
                <li>
                  <Button className="boton" onClick={(e) => homeButton()}>
                    Inicio
                  </Button>
                </li>
                <li>
                  <Button
                    className="boton"
                    onClick={(e) => restaurantesButton()}
                  >
                    Restaurantes
                  </Button>
                </li>
                <li>
                  <Button
                    className="boton"
                    onClick={(e) => exposicionesButton()}
                  >
                    Exposiciones
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center pb-3">
          © 2020 Copyright:
          <a href="https://sleepy-agnesi-188d88.netlify.app/">
            {" "}
            Festivla japones
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
