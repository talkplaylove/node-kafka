const kafka = require('kafka-node')

module.exports = new kafka.KafkaClient({
  kafkaHost: 'localhost:9092'
})