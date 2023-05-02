require('dotenv').config();
const db = require('./connection');
const {User , Product, Category} = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        {name: 'panties'},
        {name: 'socks'},
        {name: 'blouse'},
        {name: 'pants'},
        {name: 'shoes'},
    ]);

    console.log('categories seeded');


    await Product.deleteMany();

    const products = await Product.insertMany([

        {
            name: 'zebra print silk skirt',
            description:
              'dope ass zebra skirt!!!',
            image: 'skirt.jpg',
            category: categories[3]._id,
            price: 2.99,
            quantity: 500
          },
          {
            name: 'turquoise leather pants',
            description:
              'cop dem dope leather pants',
            image: 'pants.jpg',
            category: categories[3]._id,
            price: 1.99,
            quantity: 500
          },
    ]);

    console.log('products seeded')

    await User.deleteMany();

    await User.create({
     firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'

    });

    console.log('users seeded');

    process.exit();
});