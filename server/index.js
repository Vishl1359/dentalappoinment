const express = require('express')
const  connectDb  = require('./utils/conentdb')
const bodyParser = require('body-parser')
const User=require("./router/user")
const cors=require("cors")
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})
connectDb()
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

app.use("/user",User)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})