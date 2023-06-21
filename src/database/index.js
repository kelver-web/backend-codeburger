import Sequelize from "sequelize"
// import configDatabase from "../config/database"
import mongoose from "mongoose"

import User from "../app/models/User.js"
import Product from "../app/models/Product.js"
import Category from "../app/models/Category.js"

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      "postgresql://postgres:hiwAxMjbj85XeKjg6Oxv@containers-us-west-179.railway.app:6766/railway"
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb://mongo:WJKn5LDOCzkhhbbxsFpC@containers-us-west-176.railway.app:5641",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}

export default new Database()
