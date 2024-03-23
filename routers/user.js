const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
    res.status(200).send("Golang")
})

router.post('/post', (req, res) => {
    res.send("Nodejs")
})

module.exports = router