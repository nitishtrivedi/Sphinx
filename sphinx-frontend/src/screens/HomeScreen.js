import { useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';

//Define Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  //Hooks
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  //Commented out useState as we are using useReducer. Refer Docs
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      //Before sending XHR
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        //XHR
        const result = await axios.get('/api/products');
        //If data returned successfully, show data
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        //If Error, show error
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }

      //Fill Products
      //setProducts(result.data);
    };
    fetchData();
  }, []);

  //Output
  return (
    <div className="home-screen-container">
      <Helmet>
        <title>Sphinx</title>
      </Helmet>
      <h1>Featured Products</h1>
      {/* IMPORTED DATA.JS and Called Products here. Used JSX to render the data from data.js file */}
      <div className="products">
        {/* JSX EXPRESSION FOR GETTING PRODUCTS */}
        {
          //Use conditional Rendering
          loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          )
        }
      </div>
    </div>
  );
}

//Export
export default HomeScreen;
