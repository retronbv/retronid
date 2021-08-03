const { v5 } = require('uuid');

function generateString() {
  const uuid = v5(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5), "1e230887-bf0e-477d-9f68-a2c27edcbdf6")
  return `${uuid.split("-")[0]}${uuid.substr(uuid.length - 2)}`
}

module.exports = generateString
module.exports.generate = generateString
module.exports.number = (max=10,min=1) => {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}