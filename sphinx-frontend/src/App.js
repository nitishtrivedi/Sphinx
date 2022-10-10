//IMPORTS

import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './sphinx-1-logo-svg-vector.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// APPLICATION

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        {/* USING REACT BOOTSTRAP */}
        <header>
          <NavBar className="navbar-header" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>
                  <Row fluid="sm">
                    <Col className="logo-img-div">
                      <img src={logo} alt="" height="80px" width="65px" />
                    </Col>
                    <Col className="logo-text-div">
                      <span className="logo-text">Sphinx</span>
                    </Col>
                  </Row>
                </NavBar.Brand>
              </LinkContainer>
            </Container>
          </NavBar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <NavBar className="navbar-footer">
            &#169; Sphinx - A product of PinkBITS Inc. All Rights Reserved.
          </NavBar>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
