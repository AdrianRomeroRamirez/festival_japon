import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Restaurantes from "./Restaurantes";
import Exposiciones from "./Exposiciones";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item href="/">Inicio</Dropdown.Item>
            <Dropdown.Item href="https://sleepy-agnesi-188d88.netlify.app/Restaurantes">
              Restaurantes
            </Dropdown.Item>
            <Dropdown.Item href="Exposiciones">Exposiciones</Dropdown.Item>
          </DropdownButton>
        </div>
        <img alt="logo" src={logo} />
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Restaurantes" element={<Restaurantes />} />
          <Route path="/Exposiciones" element={<Exposiciones />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
