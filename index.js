const express = require('express')
const app = express()
const user = require('./routers/user')
const student = require('./routers/student')

app.use('/api/users',username,password,user)
app.use('/api/students',addIdToReq, student)

function username(req, res, next) {
    console.log("Username is correct - Username middleware worked correctly")
    next()
}

function password(req, res, next) {
    console.log("Password is corrrect - Password middleware worked correctly")
    next()
}

function addIdToReq(req,res,next) {
    req.id = "20010627"
    next()
}

console.log(process.env.PORT)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App is running on port ${port}`))

