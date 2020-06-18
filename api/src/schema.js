const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 * "That's it as for the types as far as the models in the DB goes"
 */
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
    }

    type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
    }

    input PetInput {
        name: String
        type: String
    }

    type Query {
        pets(input: PetInput): [Pet]!
    }
`;

module.exports = typeDefs
