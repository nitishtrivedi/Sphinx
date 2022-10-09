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

//Define PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Ready at http://localhost:${port}`);
});
