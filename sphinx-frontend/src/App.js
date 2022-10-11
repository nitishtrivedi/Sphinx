//IMPORTS

import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './sphinx-1-logo-svg-vector.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

// APPLICATION

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="top-center" limit={1} />
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
              <Nav>
                <Link to="/cart" className="nav-link">
                  Cart{' '}
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown
                    title={'Hello ' + userInfo.name}
                    id="basic-nav-dropdown"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Your Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Your Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </NavBar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
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
