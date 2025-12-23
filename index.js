// imports files 
const express = require('express')
const userController = require('./users/user.controller');

const app = express()

// use json middleware
app.use(express.json())
app.use('/api/v1',userController)

app.get('/check-health', (req, res) => {
  res.json({message:'server is running !'})
})

app.listen(3000, () => {
  console.log('server is running on port 3000')
})