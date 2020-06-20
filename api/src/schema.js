const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 * "That's it as for the types as far as the models in the DB goes"
 */
const typeDefs = gql`

    type User {
        id: ID!
        username: String!
        pets: [Pet]!
    }


    type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
        img: String
        owner: User!
    }

    input PetInput {
        name: String
        type: String
    }

    input NewPetInput {
        name: String!
        type: String!
    }

    type Query {
        petsFromSchema(input: PetInput): [Pet]!
        petFromSchema(input: PetInput): Pet
    }

    type Mutation {
        # takes in an arguement called input, type is NewPetInput(required), returns a type Pet(required)
        newPet(input: NewPetInput!): Pet!
    }
`;

module.exports = typeDefs
