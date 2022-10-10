import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card className="product-card">
      <Link to={`/product/${product.slug}`}>
        <img src={product.images} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>

        <Rating rating={product.rating} numReviews={product.numReviews} />

        <Card.Text>&#8377;{product.price}</Card.Text>

        <Button>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

//Export
export default Product;
