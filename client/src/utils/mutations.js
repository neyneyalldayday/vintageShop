import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!,
    $role: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
        role
      }
    }
  }
`;


export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
      _id
      name
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($name: String!, $description: String, $image: String, $price: Float!, $quantity: Int!, $category: ID!) {
    addProduct(name: $name, description: $description, image: $image, price: $price, quantity: $quantity, category: $category) {
      _id
      name
      description
      image
      price
      quantity
      category {
        _id
        name
      }
    }
  }
`;
