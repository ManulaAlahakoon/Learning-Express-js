const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
    //res.send("C")
    res.send(req.id)
})


router.post('/post', (req, res) => {
    res.send(req.username)
})


module.exports = router