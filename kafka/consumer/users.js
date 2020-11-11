const kafka = require('kafka-node')
const client = require('../client')

const topicName = 'users'
const topics = [{ topic: topicName, partition: 0 }]
const options = { autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 }
const consumer = new kafka.Consumer(client, topics, options)
const offset = new kafka.Offset(client)

console.log(`Consume ${topicName} ready!`)

consumer.on('message', function (message) {
  console.log(`consume - ${JSON.stringify(message)}`)
})

consumer.on('error', function (err) {
  console.log(`consume error - ${err}`)
})