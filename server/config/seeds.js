require('dotenv').config()
const db = require('./connection');
const {User , Product, Category} = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        {name: 'panties'},
        {name: 'socks'},
        {name: 'blouse'},
        {name: 'pants'},
        {name: "skirts"},
        {name: 'shoes'},
        {name: "mens-shirts"}
    ]);

    console.log('categories seeded');


    await Product.deleteMany();

    const products = await Product.insertMany([

        {
            name: 'zebra print silk skirt',
            description:
              'dope ass zebra skirt!!!',
            image: 'skirt.jpg',
            category: categories[4]._id,
            price: 2.99,
            quantity: 500
          },
        {
            name: ' skirt',
            description:
              'dope ass skirt!!!',
            image: 'skirt2.jpg',
            category: categories[4]._id,
            price: 2.99,
            quantity: 500
          },
        {
            name: 'skirt',
            description:
              'dope ass  skirt!!!',
            image: 'skirt3.jpg',
            category: categories[4]._id,
            price: 2.99,
            quantity: 500
          },
        {
            name: ' skirt',
            description:
              'dope ass  skirt!!!',
            image: 'skirt4.jpg',
            category: categories[4]._id,
            price: 2.99,
            quantity: 500
          },
        {
            name: ' skirt',
            description:
              'dope ass  skirt!!!',
            image: 'skirt5.jpg',
            category: categories[4]._id,
            price: 2.99,
            quantity: 500
          },
        {
            name: 'skirt',
            description:
              'dope ass  skirt!!!',
            image: 'skirt6.jpg',
            category: categories[4]._id,
            price: 2.99,
            quantity: 500
          },
          {
            name: 'pants',
            description:
              'cop dem dope leather pants',
            image: 'pants.jpg',
            category: categories[3]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'pants',
            description:
              'cop dem dope pants',
            image: 'pants2.jpg',
            category: categories[3]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'pants',
            description:
              'cop dem dope  pants',
            image: 'pants3.jpg',
            category: categories[3]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'pants',
            description:
              'cop dem dope  pants',
            image: 'pants5.jpg',
            category: categories[3]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'pants',
            description:
              'cop dem dope  pants',
            image: 'pants6.jpg',
            category: categories[3]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'pants',
            description:
              'cop dem dope  pants',
            image: 'pants7.jpg',
            category: categories[3]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'this cool shirt',
            description:
              'shirt with stuff',
            image: 'tshirt.jpg',
            category: categories[6]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'this cool shirt',
            description:
              'shirt with stuff',
            image: 'shirt2.jpg',
            category: categories[6]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'this cool shirt',
            description:
              'shirt with stuff',
            image: 'shirt3.jpg',
            category: categories[6]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'this cool shirt',
            description:
              'shirt with stuff',
            image: 'shirt4.jpg',
            category: categories[6]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'this cool shirt',
            description:
              'shirt with stuff',
            image: 'shirt5.jpg',
            category: categories[6]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'this cool shirt',
            description:
              'shirt with stuff',
            image: 'shirt6.jpg',
            category: categories[6]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'shoes',
            description:
              'cool ass shoe',
            image: 'shoes1.jpg',
            category: categories[5]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'shoes',
            description:
              'cool ass shoe',
            image: 'shoes2.jpg',
            category: categories[5]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'shoes',
            description:
              'cool ass shoe',
            image: 'shoes3.jpg',
            category: categories[5]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'shoes',
            description:
              'cool ass shoe',
            image: 'shoes4.jpg',
            category: categories[5]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'shoes',
            description:
              'cool ass shoe',
            image: 'shoes5.jpg',
            category: categories[5]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'shoes',
            description:
              'cool ass shoe',
            image: 'shoes6.jpg',
            category: categories[5]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'panties',
            description:
              'cool ass panties',
            image: 'panties1.jpg',
            category: categories[0]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'panties',
            description:
              'cool ass panties',
            image: 'panties2.jpg',
            category: categories[0]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'panties',
            description:
              'cool ass panties',
            image: 'panties3.jpg',
            category: categories[0]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'panties',
            description:
              'cool ass panties',
            image: 'panties4.jpg',
            category: categories[0]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'panties',
            description:
              'cool ass panties',
            image: 'panties5.jpg',
            category: categories[0]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'panties',
            description:
              'cool ass panties',
            image: 'panties6.jpg',
            category: categories[0]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'socks',
            description:
              'cool ass socks',
            image: 'socks1.jpg',
            category: categories[1]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'socks',
            description:
              'cool ass socks',
            image: 'socks2.jpg',
            category: categories[1]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'socks',
            description:
              'cool ass socks',
            image: 'socks3.jpg',
            category: categories[1]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'socks',
            description:
              'cool ass socks',
            image: 'socks4.jpg',
            category: categories[1]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'socks',
            description:
              'cool ass socks',
            image: 'socks5.jpg',
            category: categories[1]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'socks',
            description:
              'cool ass socks',
            image: 'socks6.jpg',
            category: categories[1]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'blouse',
            description:
              'cool ass blouse',
            image: 'blouse1.jpg',
            category: categories[2]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'blouse',
            description:
              'cool ass blouse',
            image: 'blouse2.jpg',
            category: categories[2]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'blouse',
            description:
              'cool ass blouse',
            image: 'blouse3.jpg',
            category: categories[2]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'blouse',
            description:
              'cool ass blouse',
            image: 'blouse4.jpg',
            category: categories[2]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'blouse',
            description:
              'cool ass blouse',
            image: 'blouse5.jpg',
            category: categories[2]._id,
            price: 1.99,
            quantity: 500
          },
          {
            name: 'blouse',
            description:
              'cool ass blouse',
            image: 'blouse6.jpg',
            category: categories[2]._id,
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