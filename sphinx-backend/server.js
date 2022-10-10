//EXPRESS SERVER

//Imports
import express from 'express';
import data from './data.js';

//Functions
const app = express();

//GET
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
//GET individual Product
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

//GET Product by ID

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

//Define PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Ready at http://localhost:${port}`);
});
