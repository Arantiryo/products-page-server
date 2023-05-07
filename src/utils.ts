import { products } from "./products.js";

export const typeDefs = `#graphql
  type Query {
    products: [Product]
  }

  type Product {
    id: Int
    title: String
    price: Float
    description: String
    category: String
    image: String
    rating: Rating
  }

  type Rating {
    rate: Float
    count: Int
  }
`;

export const resolvers = {
  Query: {
    products: () => products,
  },
};
