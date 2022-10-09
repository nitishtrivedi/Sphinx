import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import data from '../data';
import logger from 'use-reducer-logger';

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
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
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
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      //Fill Products
      //setProducts(result.data);
    };
    fetchData();
  }, []);

  //Output
  return (
    <div>
      <h1>Featured Products</h1>
      {/* IMPORTED DATA.JS and Called Products here. Used JSX to render the data from data.js file */}
      <div className="products">
        {/* JSX EXPRESSION FOR GETTING PRODUCTS */}
        {
          //Use conditional Rendering
          loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            products.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.images} alt={product.name} />
                </Link>

                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>

                  <p>
                    <strong>&#8377;{product.price}</strong>
                  </p>
                  <button>Add To Cart</button>
                </div>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
}

//Export
export default HomeScreen;
