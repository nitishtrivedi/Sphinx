import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '../components/Rating';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { Store } from '../Store';

//Define Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const navigate = useNavigate();
  //Use HOOKS From React Router DOM to define Slug
  const params = useParams();
  const { slug } = params;

  //Hooks
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
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
        const result = await axios.get(`/api/products/slug/${slug}`);
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
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    //Check if the item exists in the cart
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    //If Item exists, update the quantity of that item.
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    //If countInStock is less than quantity, display error
    if (data.countInStock < quantity) {
      window.alert('Sorry. This product is Out of Stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    navigate('/cart');
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={5}>
          <div className="product-image-div">
            <img src={product.images} alt={product.name}></img>
          </div>
        </Col>
        <Col md={4} className="mt-2">
          <div className="product-container">
            <div className="product-title">
              <ListGroup.Item>
                <Helmet>
                  <title>{product.name}</title>
                </Helmet>
                <h1>{product.name}</h1>
              </ListGroup.Item>
            </div>
            <div className="product-metadata">
              <ListGroup.Item>
                <Badge bg="light" text="dark">
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Price: </b> &#8377;{product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Description:</b>
                <p>{product.description}</p>
              </ListGroup.Item>
            </div>
          </div>
        </Col>
        <Col md={3} className="mt-2 mb-2">
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>&#8377;{product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="Danger">Currently Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        Add To Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

//Export
export default ProductScreen;
