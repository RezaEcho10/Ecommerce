import express from 'express'
import mongoose from 'mongoose'
import router from './routes/User.js'

const app = express()
import cors from 'cors'
import bodyParser from 'body-parser'
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://0.0.0.0:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB"))
.catch(error => console.log(error));

app.use(router)

app.listen(1000, () => {
    console.log("Server Running");
})