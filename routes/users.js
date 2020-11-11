const express = require('express')
const router = express.Router()

const producer = require('../kafka/producer')

router.post('/', function (req, res, next) {
  const { userName } = req.body
  const payloads = [{ topic: 'users', messages: userName, partition: 0 }]
  try {
    producer.send(payloads, function (err, data) {
      if (err) console.log(err)
      console.log(`produce - ${JSON.stringify(data)}`)
    })
    res.send('success')
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
