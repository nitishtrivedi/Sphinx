import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nitish Trivedi Admin',
      email: 'nitish-admin@sphinx.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'Nitish Trivedi User',
      email: 'nitish-user@sphinx.com',
      password: bcrypt.hashSync('0406'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      images: '/images/p1.jpg',
      price: 600,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Shirt',
    },
    {
      //_id: '2',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      images: '/images/p3.jpg',
      price: 900,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 12,
      description: 'High Quality Pants',
    },
    {
      //_id: '3',
      name: 'Adidas Fit Pants',
      slug: 'adidas-fit-pants',
      category: 'Pants',
      images: '/images/p4.jpg',
      price: 750,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.1,
      numReviews: 8,
      description: 'Best pants for Sports',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      images: '/images/p2.jpg',
      price: 550,
      countInStock: 17,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 18,
      description: 'Best shirts for Sports',
    },
  ],
};

//Export Data for app.js

export default data;
