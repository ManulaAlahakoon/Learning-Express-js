const express = require('express')
const app = express()
const morgan = require('morgan')
const user = require('./routers/user')
const student = require('./routers/student')
const teacher = require('./routers/teacher')

app.use(express.json())
if (app.get('env') === "development"){
    app.use(morgan('dev'))
}
app.use('/api/users',username,password,user)
app.use('/api/students', addIdToReq, addUsernameToReq, student)
app.use('/api/teachers', teacher)

console.log(app.get('env'))

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

