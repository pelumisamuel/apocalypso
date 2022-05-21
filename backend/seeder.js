import mongoose from 'mongoose'
import movies from './Data/Movies'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import Order from './Models/orderModel.js'
import User from './Models/userModel.js'
import Product from './Models/productModel.js'
import users from './Data/Users.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    /**
     * clear all data from database
     */
    // await Order.deleteMany()
    // await User.deleteMany()
    // await movies.deleteMany()

    const createUsers = await User.insertMany(users)

    // const createdUsers = await User.(users)
    /**
     * find admin User and use it to add new products
     */
    const users = await User.find({})
    //console.log(users)
    // const adminUser = createdUsers[0]._id

    const adminUser = users[0]._id
    console.log(adminUser)

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)
    console.log('data imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()
    console.log('data has been destroy'.red.inverse)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
