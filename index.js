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

console.log(process.env.PORT)

const port = process.env.PORT || 3000

app.listen(port,()=>console.log(`App is running on port ${port}`))
