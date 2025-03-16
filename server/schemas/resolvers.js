const { User, Product, Category, Order } = require('../models');
const { signToken , AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51JKnrdJCLEsDyud23nLbxJYna7YTRblLy5FrooCNCU4gGeO3tWxVYiRoe31gSbe7RfMxr4edAijiiLpWqLIZqXZv00KMZpPaw0');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      console.log("user resolver==============",context)
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });
        console.log('User found:', user);
        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw AuthenticationError;
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw  AuthenticationError;
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password, role }, context) => {
      // Check if the role is being set to admin
      if (role === 'admin') {
        // If so, ensure the request is coming from an existing admin
        if (!context.user || !context.user.isAdmin()) {
          throw new AuthenticationError('Not authorized to create admin users');
        }
      }

      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        role: role || 'user' // Default to 'user' if no role is specified
      });

      const token = signToken(user);
      return { token, user };
    },
    
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw AuthenticationError;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw  AuthenticationError;
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw  AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    
    addCategory: async (parent, { name }, context) => {
      if (context.user && context.user.isAdmin) {
        const category = await Category.create({ name });
        return category;
      }
      throw  AuthenticationError;
    },

    addProduct: async (parent, { name, description, image, price, quantity, category }, context) => {
      if (context.user && context.user.isAdmin) {
        const product = await Product.create({
          name,
          description,
          image,
          price,
          quantity,
          category
        });
        return product;
      }
      throw AuthenticationError;
    },
  }
};

module.exports = resolvers;
