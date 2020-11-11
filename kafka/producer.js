const kafka = require('kafka-node')
const client = require('./client')

const producer = new kafka.Producer(client)
producer.on('ready', function () {
  console.log('Kafka producer ready!')
})

module.exports = producer