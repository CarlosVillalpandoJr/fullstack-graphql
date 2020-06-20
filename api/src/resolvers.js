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
      console.log('Query => pet')
      return context.models.Pet.findOne(input)
    }
  },
  Mutation: {
    newPet(_, {input}, context) {
      const pet = context.models.Pet.create(input)
      return pet
    }
  },
  // second parameter is if owner had any inputs
  Pet: {
    owner(pet, _, context) {
      // give me the user that is this ID (real-world)
      // context.models.User.findById(pet.user)
      console.log('PET => owner')
      return context.models.User.findOne()
    }
  }
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
