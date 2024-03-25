const express = require('express')
const router = express.Router()

router.route('/')
.get((req, res) => {
    res.send("Learn")
})
.post((req, res) => {
    res.send("Keep it up")
})

module.exports = router