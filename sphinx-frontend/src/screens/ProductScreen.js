import { useParams } from 'react-router-dom';

function ProductScreen() {
  //Use HOOKS From React Router DOM to define Slug
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

//Export
export default ProductScreen;
