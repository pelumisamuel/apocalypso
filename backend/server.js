import express from 'express'
import morgan from 'morgan'
import movies from './Data/Movies.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
// import productRoutes from './Routes/productRoutes.js'
// import orderRoutes from './Routes/orderRoutes.js'
// import userRoutes from './Routes/userRoutes.js'
// import { notFound, errorHandler } from './Middlewares/errorMiddleware.js'
import path from 'path'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    //res.send('Api is running...')
    res.json(movies)
  })
}

const PORT = process.env.PORT || 4300

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on  port ${PORT}`.yellow
      .bold
  )
)
