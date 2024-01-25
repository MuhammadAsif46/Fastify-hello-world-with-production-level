const userController = require("./userController")

const userRoutes = (fastify, options, done) => {
    fastify.get('/users', userController.getUsers)
    fastify.get('/user/:id', userController.getUserId)
    fastify.get('/user', userController.getUserName)
    done();
  }
  
  module.exports = userRoutes;