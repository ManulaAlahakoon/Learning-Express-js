const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
    res.send("C")
})


router.post('/post', (req, res) => {
    res.send("C++")
})


module.exports = router