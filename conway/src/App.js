import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/Main'
import Explain from './components/Explain'

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            <img src="/apple-icon.png" className="header-icon" />
            Conway's Game of Exploding Bunnies
          </NavbarBrand>

          <Explain buttonLabel="How it Works" />
        </div>
      </Navbar>

      <Main />
    </div>
  );
}

export default App;
