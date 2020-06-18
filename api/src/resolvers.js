/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    petsFromSchema(_, {input}, context) {
      console.log(input)
      return context.models.Pet.findMany(input)
    },
    petFromSchema(_, {input}, context) {
      return context.models.Pet.findOne(input)
    }
  },
  Mutation: {
    newPet(_, {input}, context) {
      const pet = context.models.Pet.create(input)
      return pet
    }
  },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
    
  // }
}
