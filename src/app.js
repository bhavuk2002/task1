const express = require('express')
const {findClosest} = require('./utils/findNum')
const app = express()
app.use(express.json()) // to access json from req handlers 
app.post('/findNum', (req, res) => {
    console.log(req.body)
    const targetNum = req.body.targetNum
    const arr = req.body.arr
    // findNum.findClosest
    
    res.send(findClosest(arr, targetNum)).status(200)
})

module.exports = app