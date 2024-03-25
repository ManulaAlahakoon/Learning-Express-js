const express = require('express')
const app = express()
const user = require('./routers/user')
const student = require('./routers/student')
const teacher = require('./routers/teacher')

app.use(express.json())
app.use('/api/users',username,password,user)
app.use('/api/students', addIdToReq, addUsernameToReq, student)
app.use('/api/teachers',teacher)

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

function addUsernameToReq(req, res, next) {
    req.username = "Manula"
    next()
}
console.log(process.env.PORT)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App is running on port ${port}`))

