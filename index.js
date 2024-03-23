const express = require('express')
const app = express()

app.get('/api/users', (req, res) => {
    res.status(200).send("Golang")
})

app.post('/api/users', (req, res) => {
    res.send("Nodejs")
})

app.get('/api/students', (req,res) => {
    res.send("C++")
})

app.post('/api/students', (req,res) => {
    res.send("C")
})

app.listen(3000)
